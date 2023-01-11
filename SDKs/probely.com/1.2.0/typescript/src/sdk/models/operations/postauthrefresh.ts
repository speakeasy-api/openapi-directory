import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PostAuthRefreshRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=token" })
  token?: string;
}


export class PostAuthRefresh200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=token" })
  token?: string;

  @SpeakeasyMetadata({ data: "json, name=ttl" })
  ttl?: number;
}


export class PostAuthRefresh400ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=<field name>" })
  lessThanFieldNameGreaterThan?: string[];

  @SpeakeasyMetadata({ data: "json, name=non_field_errors" })
  nonFieldErrors?: string[];
}


export class PostAuthRefresh500ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=detail" })
  detail?: string;
}


export class PostAuthRefreshRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: PostAuthRefreshRequestBody;
}


export class PostAuthRefreshResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  postAuthRefresh200ApplicationJSONObject?: PostAuthRefresh200ApplicationJson;

  @SpeakeasyMetadata()
  postAuthRefresh400ApplicationJSONObject?: PostAuthRefresh400ApplicationJson;

  @SpeakeasyMetadata()
  postAuthRefresh500ApplicationJSONObject?: PostAuthRefresh500ApplicationJson;
}
