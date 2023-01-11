import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PostAuthVerifyRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=token" })
  token?: string;
}


export class PostAuthVerify200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=token" })
  token?: string;

  @SpeakeasyMetadata({ data: "json, name=ttl" })
  ttl?: number;
}


export class PostAuthVerify400ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=<field name>" })
  lessThanFieldNameGreaterThan?: string[];

  @SpeakeasyMetadata({ data: "json, name=non_field_errors" })
  nonFieldErrors?: string[];
}


export class PostAuthVerify500ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=detail" })
  detail?: string;
}


export class PostAuthVerifyRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: PostAuthVerifyRequestBody;
}


export class PostAuthVerifyResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  postAuthVerify200ApplicationJSONObject?: PostAuthVerify200ApplicationJson;

  @SpeakeasyMetadata()
  postAuthVerify400ApplicationJSONObject?: PostAuthVerify400ApplicationJson;

  @SpeakeasyMetadata()
  postAuthVerify500ApplicationJSONObject?: PostAuthVerify500ApplicationJson;
}
