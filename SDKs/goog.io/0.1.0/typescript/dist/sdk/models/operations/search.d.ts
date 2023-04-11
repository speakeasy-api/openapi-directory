import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class SearchRequest extends SpeakeasyBase {
    query: string;
}
export declare class Search200ApplicationJSONResults extends SpeakeasyBase {
    description?: string;
    link?: string;
    title?: string;
}
/**
 * results
 */
export declare class Search200ApplicationJSON extends SpeakeasyBase {
    answer?: string;
    results?: Search200ApplicationJSONResults[];
    total?: string;
}
export declare class SearchResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Validation Error
     */
    httpValidationError?: shared.HTTPValidationError;
    /**
     * Successful Response
     */
    search200ApplicationJSONObject?: Search200ApplicationJSON;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
