import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Limits the set of items by originating source
 *
 * @remarks
 *
 * all = items from both The New York Times and The International New York Times
 * nyt = New York Times items only
 * iht = International New York Times items only
 *
 */
export declare enum GetContentSourceSectionJsonSourceEnum {
    All = "all",
    Nyt = "nyt",
    Iht = "iht"
}
export declare class GetContentSourceSectionJsonRequest extends SpeakeasyBase {
    /**
     * Limits the number of results, between 1 and 20
     */
    limit?: number;
    /**
     * Sets the starting point of the result set
     */
    offset?: number;
    /**
     * Limits the set of items by one or more sections
     *
     * @remarks
     * all | One or more section names, separated by semicolons
     *
     *  To get all sections, specify all. To get a particular section or sections, use the section names returned by this request:
     *  http://api.nytimes.com/svc/news/v3/content/section-list.json
     *
     */
    section: string;
    /**
     * Limits the set of items by originating source
     *
     * @remarks
     *
     * all = items from both The New York Times and The International New York Times
     * nyt = New York Times items only
     * iht = International New York Times items only
     *
     */
    source: GetContentSourceSectionJsonSourceEnum;
}
/**
 * An array of Articles
 */
export declare class GetContentSourceSectionJson200ApplicationJSON extends SpeakeasyBase {
    copyright?: string;
    numResults?: number;
    results?: shared.Article[];
    status?: string;
}
export declare class GetContentSourceSectionJsonResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * An array of Articles
     */
    getContentSourceSectionJSON200ApplicationJSONObject?: GetContentSourceSectionJson200ApplicationJSON;
}
