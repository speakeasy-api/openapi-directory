import { SpeakeasyBase } from "../../../internal/utils";
import { DateRange } from "./daterange";
import { User } from "./user";
export declare enum SearchUserActivityRequestActivityTypesEnum {
    ActivityTypeUnspecified = "ACTIVITY_TYPE_UNSPECIFIED",
    Pageview = "PAGEVIEW",
    Screenview = "SCREENVIEW",
    Goal = "GOAL",
    Ecommerce = "ECOMMERCE",
    Event = "EVENT"
}
/**
 * The request to fetch User Report from Reporting API `userActivity:get` call.
 */
export declare class SearchUserActivityRequest extends SpeakeasyBase {
    /**
     * Set of all activity types being requested. Only acvities matching these types will be returned in the response. If empty, all activies will be returned.
     */
    activityTypes?: SearchUserActivityRequestActivityTypesEnum[];
    /**
     * A contiguous set of days: startDate, startDate + 1 day, ..., endDate. The start and end dates are specified in [ISO8601](https://en.wikipedia.org/wiki/ISO_8601) date format `YYYY-MM-DD`.
     */
    dateRange?: DateRange;
    /**
     * Page size is for paging and specifies the maximum number of returned rows. Page size should be > 0. If the value is 0 or if the field isn't specified, the request returns the default of 1000 rows per page.
     */
    pageSize?: number;
    /**
     * A continuation token to get the next page of the results. Adding this to the request will return the rows after the pageToken. The pageToken should be the value returned in the nextPageToken parameter in the response to the [SearchUserActivityRequest](#SearchUserActivityRequest) request.
     */
    pageToken?: string;
    /**
     * Contains information to identify a particular user uniquely.
     */
    user?: User;
    /**
     * Required. The Analytics [view ID](https://support.google.com/analytics/answer/1009618) from which to retrieve data. Every [SearchUserActivityRequest](#SearchUserActivityRequest) must contain the `viewId`.
     */
    viewId?: string;
}
