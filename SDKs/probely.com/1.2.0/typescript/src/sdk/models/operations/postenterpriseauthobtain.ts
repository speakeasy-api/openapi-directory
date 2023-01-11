import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostEnterpriseAuthObtain200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=token" })
  token?: string;

  @SpeakeasyMetadata({ data: "json, name=ttl" })
  ttl?: number;
}


export class PostEnterpriseAuthObtain400ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=<field name>" })
  lessThanFieldNameGreaterThan?: string[];

  @SpeakeasyMetadata({ data: "json, name=non_field_errors" })
  nonFieldErrors?: string[];
}


export class PostEnterpriseAuthObtain500ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=detail" })
  detail?: string;
}


export class PostEnterpriseAuthObtainRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.Login;
}


export class PostEnterpriseAuthObtainResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  postEnterpriseAuthObtain200ApplicationJSONObject?: PostEnterpriseAuthObtain200ApplicationJson;

  @SpeakeasyMetadata()
  postEnterpriseAuthObtain400ApplicationJSONObject?: PostEnterpriseAuthObtain400ApplicationJson;

  @SpeakeasyMetadata()
  postEnterpriseAuthObtain500ApplicationJSONObject?: PostEnterpriseAuthObtain500ApplicationJson;
}
