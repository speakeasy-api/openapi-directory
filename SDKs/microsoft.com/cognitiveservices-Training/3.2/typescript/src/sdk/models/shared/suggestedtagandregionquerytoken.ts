import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum SuggestedTagAndRegionQueryTokenSortByEnum {
    UncertaintyAscending = "UncertaintyAscending",
    UncertaintyDescending = "UncertaintyDescending"
}


// SuggestedTagAndRegionQueryToken
/** 
 * Contains properties we need to fetch suggested tags for. For the first call, Session and continuation set to null.
 * Then on subsequent calls, uses the session/continuation from the previous SuggestedTagAndRegionQuery result to fetch additional results.
**/
export class SuggestedTagAndRegionQueryToken extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=continuation, form, name=continuation;" })
  continuation?: string;

  @SpeakeasyMetadata({ data: "json, name=maxCount, form, name=maxCount;" })
  maxCount?: number;

  @SpeakeasyMetadata({ data: "json, name=session, form, name=session;" })
  session?: string;

  @SpeakeasyMetadata({ data: "json, name=sortBy, form, name=sortBy;" })
  sortBy?: SuggestedTagAndRegionQueryTokenSortByEnum;

  @SpeakeasyMetadata({ data: "json, name=tagIds, form, name=tagIds;" })
  tagIds?: string[];

  @SpeakeasyMetadata({ data: "json, name=threshold, form, name=threshold;" })
  threshold?: number;
}
