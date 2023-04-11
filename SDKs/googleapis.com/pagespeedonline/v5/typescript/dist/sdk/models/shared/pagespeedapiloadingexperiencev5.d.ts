import { SpeakeasyBase } from "../../../internal/utils";
import { UserPageLoadMetricV5 } from "./userpageloadmetricv5";
/**
 * The CrUX loading experience object that contains CrUX data breakdowns.
 */
export declare class PagespeedApiLoadingExperienceV5 extends SpeakeasyBase {
    /**
     * The url, pattern or origin which the metrics are on.
     */
    id?: string;
    /**
     * The requested URL, which may differ from the resolved "id".
     */
    initialUrl?: string;
    /**
     * The map of .
     */
    metrics?: Record<string, UserPageLoadMetricV5>;
    /**
     * True if the result is an origin fallback from a page, false otherwise.
     */
    originFallback?: boolean;
    /**
     * The human readable speed "category" of the id.
     */
    overallCategory?: string;
}
