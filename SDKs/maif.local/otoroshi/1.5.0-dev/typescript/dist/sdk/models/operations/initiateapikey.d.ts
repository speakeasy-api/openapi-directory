import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class InitiateApiKeyResponse extends SpeakeasyBase {
    /**
     * Successful operation
     */
    apiKey?: shared.ApiKey;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
