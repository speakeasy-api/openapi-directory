import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class QueryCampaignsRequest extends SpeakeasyBase {
    payload?: shared.QueryCampaignsRequest;
}
export declare class QueryCampaignsResponse extends SpeakeasyBase {
    /**
     * Bad request
     */
    apiError?: shared.APIError;
    contentType: string;
    headers?: Record<string, string[]>;
    /**
     * Successful response
     */
    queryCampaignsResponse?: shared.QueryCampaignsResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
