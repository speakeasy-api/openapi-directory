import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CrawlRequest extends SpeakeasyBase {
    query: string;
}
/**
 * Successful Response
 */
export declare class Crawl200ApplicationJSON extends SpeakeasyBase {
    answer?: string;
    results?: string[];
    total?: string;
}
export declare class CrawlResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful Response
     */
    crawl200ApplicationJSONObject?: Crawl200ApplicationJSON;
    /**
     * Validation Error
     */
    httpValidationError?: shared.HTTPValidationError;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
