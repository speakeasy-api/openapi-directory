import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Time range the given count applies to.
 */
export declare enum PageviewsCountsTimeRangeEnum {
    AllTime = "ALL_TIME",
    ThirtyDays = "THIRTY_DAYS",
    SevenDays = "SEVEN_DAYS"
}
export declare class PageviewsCounts extends SpeakeasyBase {
    /**
     * Count of page views for the given time range.
     */
    count?: string;
    /**
     * Time range the given count applies to.
     */
    timeRange?: PageviewsCountsTimeRangeEnum;
}
/**
 * Successful response
 */
export declare class Pageviews extends SpeakeasyBase {
    /**
     * Blog Id.
     */
    blogId?: string;
    /**
     * The container of posts in this blog.
     */
    counts?: PageviewsCounts[];
    /**
     * The kind of this entry. Always blogger#page_views.
     */
    kind?: string;
}
