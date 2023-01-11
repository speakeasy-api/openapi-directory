import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// TagFilter
/** 
 * Model that query for counting of images whose suggested tags match given tags and their probability are greater than or equal to the given threshold.
**/
export class TagFilter extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=tagIds, form, name=tagIds;" })
  tagIds?: string[];

  @SpeakeasyMetadata({ data: "json, name=threshold, form, name=threshold;" })
  threshold?: number;
}
