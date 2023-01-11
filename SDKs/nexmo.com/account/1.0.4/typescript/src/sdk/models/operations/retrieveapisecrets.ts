import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class RetrieveApiSecretsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=api_key" })
  apiKey: string;
}


export class RetrieveApiSecretsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basicAuth: shared.SchemeBasicAuth;
}


export class RetrieveApiSecretsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: RetrieveApiSecretsPathParams;

  @SpeakeasyMetadata()
  security: RetrieveApiSecretsSecurity;
}


export class RetrieveApiSecretsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorAPIKeyNotFound?: shared.ErrorApiKeyNotFound;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  retrieveAPISecrets200ApplicationJSONAny?: any;

  @SpeakeasyMetadata()
  retrieveAPISecrets401ApplicationJSONAny?: any;
}
