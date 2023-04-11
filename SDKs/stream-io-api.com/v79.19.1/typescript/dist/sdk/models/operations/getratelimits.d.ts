import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetRateLimitsRequest extends SpeakeasyBase {
    android?: boolean;
    endpoints?: string;
    ios?: boolean;
    serverSide?: boolean;
    web?: boolean;
}
export declare class GetRateLimitsResponse extends SpeakeasyBase {
    /**
     * Bad request
     */
    apiError?: shared.APIError;
    contentType: string;
    /**
     * Get Rate Limits Response
     */
    getRateLimitsResponse?: shared.GetRateLimitsResponse;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
