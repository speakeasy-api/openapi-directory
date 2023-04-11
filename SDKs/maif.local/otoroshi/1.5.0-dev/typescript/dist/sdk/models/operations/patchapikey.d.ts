import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PatchApiKeySecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class PatchApiKeyRequest extends SpeakeasyBase {
    requestBody?: shared.Patch[];
    /**
     * the api key id
     */
    clientId: string;
    /**
     * The api key service id
     */
    serviceId: string;
}
export declare class PatchApiKeyResponse extends SpeakeasyBase {
    /**
     * Successful operation
     */
    apiKey?: shared.ApiKey;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
