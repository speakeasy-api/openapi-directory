import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// FeaturedCollectionCoverItem
/** 
 * Featured collection cover item metadata
**/
export class FeaturedCollectionCoverItem extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=url" })
  url: string;
}
