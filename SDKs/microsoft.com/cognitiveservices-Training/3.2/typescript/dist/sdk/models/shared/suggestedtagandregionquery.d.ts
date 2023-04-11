import { SpeakeasyBase } from "../../../internal/utils";
import { StoredSuggestedTagAndRegion } from "./storedsuggestedtagandregion";
import { SuggestedTagAndRegionQueryToken } from "./suggestedtagandregionquerytoken";
/**
 * The array of result images and token containing session and continuation Ids for the next query.
 */
export declare class SuggestedTagAndRegionQuery extends SpeakeasyBase {
    /**
     * Result of a suggested tags and regions request of the untagged image.
     */
    results?: StoredSuggestedTagAndRegion[];
    /**
     * Contains properties we need to fetch suggested tags for. For the first call, Session and continuation set to null.
     *
     * @remarks
     * Then on subsequent calls, uses the session/continuation from the previous SuggestedTagAndRegionQuery result to fetch additional results.
     */
    token?: SuggestedTagAndRegionQueryToken;
}
