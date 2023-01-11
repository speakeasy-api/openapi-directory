import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PostEnterpriseAuthRefreshRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=token" })
  token?: string;
}


export class PostEnterpriseAuthRefresh200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=token" })
  token?: string;

  @SpeakeasyMetadata({ data: "json, name=ttl" })
  ttl?: number;
}


export class PostEnterpriseAuthRefresh400ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=<field name>" })
  lessThanFieldNameGreaterThan?: string[];

  @SpeakeasyMetadata({ data: "json, name=non_field_errors" })
  nonFieldErrors?: string[];
}


export class PostEnterpriseAuthRefresh500ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=detail" })
  detail?: string;
}


export class PostEnterpriseAuthRefreshRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: PostEnterpriseAuthRefreshRequestBody;
}


export class PostEnterpriseAuthRefreshResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  postEnterpriseAuthRefresh200ApplicationJSONObject?: PostEnterpriseAuthRefresh200ApplicationJson;

  @SpeakeasyMetadata()
  postEnterpriseAuthRefresh400ApplicationJSONObject?: PostEnterpriseAuthRefresh400ApplicationJson;

  @SpeakeasyMetadata()
  postEnterpriseAuthRefresh500ApplicationJSONObject?: PostEnterpriseAuthRefresh500ApplicationJson;
}
