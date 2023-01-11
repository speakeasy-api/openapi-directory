import { SpeakeasyBase } from "../../../internal/utils";
export declare enum SuggestedTagAndRegionQueryTokenSortByEnum {
    UncertaintyAscending = "UncertaintyAscending",
    UncertaintyDescending = "UncertaintyDescending"
}
/**
 * Contains properties we need to fetch suggested tags for. For the first call, Session and continuation set to null.
 * Then on subsequent calls, uses the session/continuation from the previous SuggestedTagAndRegionQuery result to fetch additional results.
**/
export declare class SuggestedTagAndRegionQueryToken extends SpeakeasyBase {
    continuation?: string;
    maxCount?: number;
    session?: string;
    sortBy?: SuggestedTagAndRegionQueryTokenSortByEnum;
    tagIds?: string[];
    threshold?: number;
}
