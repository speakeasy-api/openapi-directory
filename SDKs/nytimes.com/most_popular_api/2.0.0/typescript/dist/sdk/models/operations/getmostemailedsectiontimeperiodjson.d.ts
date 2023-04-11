import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GETMostemailedSectionTimePeriodJsonSecurity extends SpeakeasyBase {
    apiKey: string;
}
export declare class GETMostemailedSectionTimePeriodJsonRequest extends SpeakeasyBase {
    /**
     * Limits the results by one or more sections. You can use
     *
     * @remarks
     * `all-sections` or one or more section names seperated by semicolons. See `viewed/sections.json` call to get a list of sections.
     *
     */
    section: shared.SectionEnum;
    /**
     * Number of days `1 | 7 | 30 ` corresponds to a day, a week, or a month of content.
     */
    timePeriod: shared.TimePeriodEnum;
}
/**
 * An array of Articles
 */
export declare class GETMostemailedSectionTimePeriodJson200ApplicationXML extends SpeakeasyBase {
    copyright?: string;
    numResults?: number;
    results?: shared.ArticleWithCountType[];
    status?: string;
}
export declare class GETMostemailedSectionTimePeriodJson400ApplicationJSON extends SpeakeasyBase {
    copyright?: string;
    errors?: string[];
    results?: any[];
    status?: string;
}
/**
 * An array of Articles
 */
export declare class GETMostemailedSectionTimePeriodJson200ApplicationJSON extends SpeakeasyBase {
    copyright?: string;
    numResults?: number;
    results?: shared.ArticleWithCountType[];
    status?: string;
}
export declare class GETMostemailedSectionTimePeriodJsonResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    /**
     * An array of Articles
     */
    getMostemailedSectionTimePeriodJSON200ApplicationJSONObject?: GETMostemailedSectionTimePeriodJson200ApplicationJSON;
    getMostemailedSectionTimePeriodJSON400ApplicationJSONObject?: GETMostemailedSectionTimePeriodJson400ApplicationJSON;
    getMostemailedSectionTimePeriodJSON403ApplicationJSONObject?: Record<string, any>;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
