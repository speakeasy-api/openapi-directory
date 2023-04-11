import { SpeakeasyBase } from "../../../internal/utils";
import { Query } from "./query";
/**
 * Sets the granularity of the count results.
 */
export declare enum CountArtifactsRequestViewEnum {
    CountResultViewUnspecified = "COUNT_RESULT_VIEW_UNSPECIFIED",
    TotalCount = "TOTAL_COUNT",
    All = "ALL"
}
/**
 * Count artifacts request.
 */
export declare class CountArtifactsRequest extends SpeakeasyBase {
    /**
     * The query definition used for search and export.
     */
    query?: Query;
    /**
     * Sets the granularity of the count results.
     */
    view?: CountArtifactsRequestViewEnum;
}
