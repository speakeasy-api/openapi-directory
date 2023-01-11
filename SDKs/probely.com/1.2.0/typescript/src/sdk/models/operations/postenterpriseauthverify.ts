import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PostEnterpriseAuthVerifyRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=token" })
  token?: string;
}


export class PostEnterpriseAuthVerify200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=token" })
  token?: string;

  @SpeakeasyMetadata({ data: "json, name=ttl" })
  ttl?: number;
}


export class PostEnterpriseAuthVerify400ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=<field name>" })
  lessThanFieldNameGreaterThan?: string[];

  @SpeakeasyMetadata({ data: "json, name=non_field_errors" })
  nonFieldErrors?: string[];
}


export class PostEnterpriseAuthVerify500ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=detail" })
  detail?: string;
}


export class PostEnterpriseAuthVerifyRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: PostEnterpriseAuthVerifyRequestBody;
}


export class PostEnterpriseAuthVerifyResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  postEnterpriseAuthVerify200ApplicationJSONObject?: PostEnterpriseAuthVerify200ApplicationJson;

  @SpeakeasyMetadata()
  postEnterpriseAuthVerify400ApplicationJSONObject?: PostEnterpriseAuthVerify400ApplicationJson;

  @SpeakeasyMetadata()
  postEnterpriseAuthVerify500ApplicationJSONObject?: PostEnterpriseAuthVerify500ApplicationJson;
}
