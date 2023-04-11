import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class NewsRequest extends SpeakeasyBase {
    query: string;
}
export declare class News200ApplicationJSONEntries extends SpeakeasyBase {
    guidislink?: string;
    id?: string;
    link?: string;
    links?: string;
    published?: string;
    publishedParsed?: string;
    source?: string;
    subArticles?: string;
    summary?: string;
    summaryDetail?: string;
    title?: string;
    titleDetail?: string;
}
export declare class News200ApplicationJSONFeed extends SpeakeasyBase {
    generator?: string;
    generatorDetail?: string;
    language?: string;
    link?: string;
    links?: string;
    publisher?: string;
    publisherDetail?: string;
    rights?: string;
    rightsDetail?: string;
    subtitle?: string;
    subtitleDetail?: string;
    title?: string;
    updated?: string;
    updatedParsed?: string;
}
/**
 * OK
 */
export declare class News200ApplicationJSON extends SpeakeasyBase {
    entries?: News200ApplicationJSONEntries[];
    feed?: News200ApplicationJSONFeed;
}
export declare class NewsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Unprocessable Entity (WebDAV)
     */
    httpValidationError?: shared.HTTPValidationError;
    /**
     * OK
     */
    news200ApplicationJSONObject?: News200ApplicationJSON;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
