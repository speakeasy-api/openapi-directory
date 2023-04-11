import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GETMostviewedSectionTimePeriodJsonSecurity extends SpeakeasyBase {
    apiKey: string;
}
export declare class GETMostviewedSectionTimePeriodJsonRequest extends SpeakeasyBase {
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
export declare class GETMostviewedSectionTimePeriodJson200ApplicationJSON extends SpeakeasyBase {
    copyright?: string;
    numResults?: number;
    results?: shared.Article[];
    status?: string;
}
export declare class GETMostviewedSectionTimePeriodJsonResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * An array of Articles
     */
    getMostviewedSectionTimePeriodJSON200ApplicationJSONObject?: GETMostviewedSectionTimePeriodJson200ApplicationJSON;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
