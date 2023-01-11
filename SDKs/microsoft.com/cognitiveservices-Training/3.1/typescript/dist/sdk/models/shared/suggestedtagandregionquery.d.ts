import { SpeakeasyBase } from "../../../internal/utils";
import { StoredSuggestedTagAndRegion } from "./storedsuggestedtagandregion";
import { SuggestedTagAndRegionQueryToken } from "./suggestedtagandregionquerytoken";
/**
 * The array of result images and token containing session and continuation Ids for the next query.
**/
export declare class SuggestedTagAndRegionQuery extends SpeakeasyBase {
    results?: StoredSuggestedTagAndRegion[];
    token?: SuggestedTagAndRegionQueryToken;
}
