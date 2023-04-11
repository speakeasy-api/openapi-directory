import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ApiKeysSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class ApiKeysRequest extends SpeakeasyBase {
    /**
     * The api key service id
     */
    serviceId: string;
}
export declare class ApiKeysResponse extends SpeakeasyBase {
    /**
     * Successful operation
     */
    apiKeys?: shared.ApiKey[];
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
