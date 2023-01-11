import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PostAuthRevokeRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=token" })
  token?: string;
}


export class PostAuthRevoke200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=token" })
  token?: string;

  @SpeakeasyMetadata({ data: "json, name=ttl" })
  ttl?: number;
}


export class PostAuthRevoke400ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=<field name>" })
  lessThanFieldNameGreaterThan?: string[];

  @SpeakeasyMetadata({ data: "json, name=non_field_errors" })
  nonFieldErrors?: string[];
}


export class PostAuthRevoke500ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=detail" })
  detail?: string;
}


export class PostAuthRevokeRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: PostAuthRevokeRequestBody;
}


export class PostAuthRevokeResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  postAuthRevoke200ApplicationJSONObject?: PostAuthRevoke200ApplicationJson;

  @SpeakeasyMetadata()
  postAuthRevoke400ApplicationJSONObject?: PostAuthRevoke400ApplicationJson;

  @SpeakeasyMetadata()
  postAuthRevoke500ApplicationJSONObject?: PostAuthRevoke500ApplicationJson;
}
