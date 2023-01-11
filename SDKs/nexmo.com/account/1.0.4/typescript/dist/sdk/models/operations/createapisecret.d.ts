import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateApiSecretPathParams extends SpeakeasyBase {
    apiKey: string;
}
export declare class CreateApiSecretSecurity extends SpeakeasyBase {
    basicAuth: shared.SchemeBasicAuth;
}
export declare class CreateApiSecretRequest extends SpeakeasyBase {
    pathParams: CreateApiSecretPathParams;
    request: shared.CreateSecretRequest;
    security: CreateApiSecretSecurity;
}
export declare class CreateApiSecretResponse extends SpeakeasyBase {
    contentType: string;
    errorAPIKeyNotFound?: shared.ErrorApiKeyNotFound;
    statusCode: number;
    createAPISecret400ApplicationJSONAny?: any;
    createAPISecret401ApplicationJSONAny?: any;
    secretInfo?: shared.SecretInfo;
}
