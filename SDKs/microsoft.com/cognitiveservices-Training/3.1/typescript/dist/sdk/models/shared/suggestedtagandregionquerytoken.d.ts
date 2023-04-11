import { SpeakeasyBase } from "../../../internal/utils";
/**
 * OrderBy. Ordering mechanism for your results.
 */
export declare enum SuggestedTagAndRegionQueryTokenSortByEnum {
    UncertaintyAscending = "UncertaintyAscending",
    UncertaintyDescending = "UncertaintyDescending"
}
/**
 * Contains properties we need to fetch suggested tags for. For the first call, Session and continuation set to null.
 *
 * @remarks
 * Then on subsequent calls, uses the session/continuation from the previous SuggestedTagAndRegionQuery result to fetch additional results.
 */
export declare class SuggestedTagAndRegionQueryToken extends SpeakeasyBase {
    /**
     * Continuation Id for database pagination. Initially null but later used to paginate.
     */
    continuation?: string;
    /**
     * Maximum number of results you want to be returned in the response.
     */
    maxCount?: number;
    /**
     * SessionId for database query. Initially set to null but later used to paginate.
     */
    session?: string;
    /**
     * OrderBy. Ordering mechanism for your results.
     */
    sortBy?: SuggestedTagAndRegionQueryTokenSortByEnum;
    /**
     * Existing TagIds in project to filter suggested tags on.
     */
    tagIds?: string[];
    /**
     * Confidence threshold to filter suggested tags on.
     */
    threshold?: number;
}
