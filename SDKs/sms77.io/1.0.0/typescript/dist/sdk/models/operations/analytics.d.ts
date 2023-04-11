import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * Defines the grouping of the data.
 */
export declare enum AnalyticsGroupByEnum {
    Date = "date",
    Label = "label",
    Subaccount = "subaccount",
    Country = "country"
}
export declare class AnalyticsRequest extends SpeakeasyBase {
    /**
     * End date of the statistics in the format YYYY-MM-DD. By default, the current day.
     */
    end?: string;
    /**
     * Defines the grouping of the data.
     */
    groupBy?: AnalyticsGroupByEnum;
    /**
     * Shows only data of a specific label.
     */
    label?: string;
    /**
     * Start date of the statistics in the format YYYY-MM-DD. By default, the date of 30 days ago is set.
     */
    start?: string;
    /**
     * Receive the data only for the main account, all your (sub-)accounts or only for specific subaccounts.
     */
    subaccounts?: string;
}
/**
 * OK
 */
export declare class Analytics200ApplicationJSON extends SpeakeasyBase {
    date?: string;
    direct?: number;
    economy?: number;
    hlr?: number;
    inbound?: number;
    mnp?: number;
    usageEur?: number;
    voice?: number;
}
export declare class AnalyticsResponse extends SpeakeasyBase {
    /**
     * OK
     */
    analytics200ApplicationJSONObject?: Analytics200ApplicationJSON;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
