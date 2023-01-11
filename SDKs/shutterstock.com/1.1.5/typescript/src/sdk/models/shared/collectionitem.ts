import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// CollectionItem
/** 
 * Metadata about an item that is part of a collection
**/
export class CollectionItem extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=added_time" })
  addedTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=media_type" })
  mediaType?: string;
}
