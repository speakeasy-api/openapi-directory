import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A contiguous range of days: startDate, startDate + 1, ..., endDate.
 */
export declare class GoogleAnalyticsAdminV1alphaAccessDateRange extends SpeakeasyBase {
    /**
     * The inclusive end date for the query in the format `YYYY-MM-DD`. Cannot be before `startDate`. The format `NdaysAgo`, `yesterday`, or `today` is also accepted, and in that case, the date is inferred based on the current time in the request's time zone.
     */
    endDate?: string;
    /**
     * The inclusive start date for the query in the format `YYYY-MM-DD`. Cannot be after `endDate`. The format `NdaysAgo`, `yesterday`, or `today` is also accepted, and in that case, the date is inferred based on the current time in the request's time zone.
     */
    startDate?: string;
}
