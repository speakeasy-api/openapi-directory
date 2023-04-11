import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class UpdateApiKeySecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class UpdateApiKeyRequest extends SpeakeasyBase {
    apiKey?: shared.ApiKey;
    /**
     * the api key id
     */
    clientId: string;
    /**
     * The api key service id
     */
    serviceId: string;
}
export declare class UpdateApiKeyResponse extends SpeakeasyBase {
    /**
     * Successful operation
     */
    apiKey?: shared.ApiKey;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
