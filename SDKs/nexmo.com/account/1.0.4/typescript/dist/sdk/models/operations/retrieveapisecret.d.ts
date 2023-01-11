import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RetrieveApiSecretPathParams extends SpeakeasyBase {
    apiKey: string;
    secretId: string;
}
export declare class RetrieveApiSecretSecurity extends SpeakeasyBase {
    basicAuth: shared.SchemeBasicAuth;
}
export declare class RetrieveApiSecretRequest extends SpeakeasyBase {
    pathParams: RetrieveApiSecretPathParams;
    security: RetrieveApiSecretSecurity;
}
export declare class RetrieveApiSecretResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    retrieveAPISecret401ApplicationJSONAny?: any;
    retrieveAPISecret404ApplicationJSONOneOf?: any;
    secretInfo?: shared.SecretInfo;
}
