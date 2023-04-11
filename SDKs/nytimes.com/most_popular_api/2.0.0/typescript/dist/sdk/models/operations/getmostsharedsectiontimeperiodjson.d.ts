import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GETMostsharedSectionTimePeriodJsonSecurity extends SpeakeasyBase {
    apiKey: string;
}
export declare class GETMostsharedSectionTimePeriodJsonRequest extends SpeakeasyBase {
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
export declare class GETMostsharedSectionTimePeriodJson400ApplicationJSON extends SpeakeasyBase {
    copyright?: string;
    errors?: string[];
    results?: any[];
    status?: string;
}
/**
 * An array of Articles
 */
export declare class GETMostsharedSectionTimePeriodJson200ApplicationJSON extends SpeakeasyBase {
    copyright?: string;
    numResults?: number;
    results?: shared.Article[];
    status?: string;
}
export declare class GETMostsharedSectionTimePeriodJsonResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * An array of Articles
     */
    getMostsharedSectionTimePeriodJSON200ApplicationJSONObject?: GETMostsharedSectionTimePeriodJson200ApplicationJSON;
    getMostsharedSectionTimePeriodJSON400ApplicationJSONObject?: GETMostsharedSectionTimePeriodJson400ApplicationJSON;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
