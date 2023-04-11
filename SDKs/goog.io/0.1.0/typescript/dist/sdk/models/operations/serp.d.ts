import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Successful Response
 */
export declare class Serp200ApplicationJSON extends SpeakeasyBase {
    position?: number;
    query?: string;
    searchedResults?: number;
    website?: string;
}
export declare class SerpResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Validation Error
     */
    httpValidationError?: shared.HTTPValidationError;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful Response
     */
    serp200ApplicationJSONObject?: Serp200ApplicationJSON;
}
