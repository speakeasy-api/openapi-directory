import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostAuthObtain200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=token" })
  token?: string;

  @SpeakeasyMetadata({ data: "json, name=ttl" })
  ttl?: number;
}


export class PostAuthObtain400ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=<field name>" })
  lessThanFieldNameGreaterThan?: string[];

  @SpeakeasyMetadata({ data: "json, name=non_field_errors" })
  nonFieldErrors?: string[];
}


export class PostAuthObtain500ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=detail" })
  detail?: string;
}


export class PostAuthObtainRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.Login;
}


export class PostAuthObtainResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  postAuthObtain200ApplicationJSONObject?: PostAuthObtain200ApplicationJson;

  @SpeakeasyMetadata()
  postAuthObtain400ApplicationJSONObject?: PostAuthObtain400ApplicationJson;

  @SpeakeasyMetadata()
  postAuthObtain500ApplicationJSONObject?: PostAuthObtain500ApplicationJson;
}
