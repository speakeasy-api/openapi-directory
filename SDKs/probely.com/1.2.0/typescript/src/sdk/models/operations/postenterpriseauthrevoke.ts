import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PostEnterpriseAuthRevokeRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=token" })
  token?: string;
}


export class PostEnterpriseAuthRevoke200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=token" })
  token?: string;

  @SpeakeasyMetadata({ data: "json, name=ttl" })
  ttl?: number;
}


export class PostEnterpriseAuthRevoke400ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=<field name>" })
  lessThanFieldNameGreaterThan?: string[];

  @SpeakeasyMetadata({ data: "json, name=non_field_errors" })
  nonFieldErrors?: string[];
}


export class PostEnterpriseAuthRevoke500ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=detail" })
  detail?: string;
}


export class PostEnterpriseAuthRevokeRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: PostEnterpriseAuthRevokeRequestBody;
}


export class PostEnterpriseAuthRevokeResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  postEnterpriseAuthRevoke200ApplicationJSONObject?: PostEnterpriseAuthRevoke200ApplicationJson;

  @SpeakeasyMetadata()
  postEnterpriseAuthRevoke400ApplicationJSONObject?: PostEnterpriseAuthRevoke400ApplicationJson;

  @SpeakeasyMetadata()
  postEnterpriseAuthRevoke500ApplicationJSONObject?: PostEnterpriseAuthRevoke500ApplicationJson;
}
