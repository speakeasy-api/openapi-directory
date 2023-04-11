import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class QuerySegmentsRequest extends SpeakeasyBase {
    payload?: shared.QuerySegmentsRequest;
}
export declare class QuerySegmentsResponse extends SpeakeasyBase {
    /**
     * Bad request
     */
    apiError?: shared.APIError;
    contentType: string;
    headers?: Record<string, string[]>;
    /**
     * Successful response
     */
    querySegmentsResponse?: shared.QuerySegmentsResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
