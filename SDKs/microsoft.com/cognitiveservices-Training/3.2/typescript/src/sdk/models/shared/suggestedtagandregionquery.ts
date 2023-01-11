import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { StoredSuggestedTagAndRegion } from "./storedsuggestedtagandregion";
import { SuggestedTagAndRegionQueryToken } from "./suggestedtagandregionquerytoken";



// SuggestedTagAndRegionQuery
/** 
 * The array of result images and token containing session and continuation Ids for the next query.
**/
export class SuggestedTagAndRegionQuery extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=results", elemType: StoredSuggestedTagAndRegion })
  results?: StoredSuggestedTagAndRegion[];

  @SpeakeasyMetadata({ data: "json, name=token" })
  token?: SuggestedTagAndRegionQueryToken;
}
