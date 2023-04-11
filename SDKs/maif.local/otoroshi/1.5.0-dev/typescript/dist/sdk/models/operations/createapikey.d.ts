import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CreateApiKeySecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class CreateApiKeyRequest extends SpeakeasyBase {
    apiKey?: shared.ApiKey;
    /**
     * The api key service id
     */
    serviceId: string;
}
export declare class CreateApiKeyResponse extends SpeakeasyBase {
    /**
     * Successful operation
     */
    apiKey?: shared.ApiKey;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
