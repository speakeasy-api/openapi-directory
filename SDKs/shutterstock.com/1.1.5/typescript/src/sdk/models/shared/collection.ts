import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CollectionItem } from "./collectionitem";



// Collection
/** 
 * Metadata about a collection of assets
**/
export class Collection extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cover_item" })
  coverItem?: CollectionItem;

  @SpeakeasyMetadata({ data: "json, name=created_time" })
  createdTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=items_updated_time" })
  itemsUpdatedTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=share_code" })
  shareCode?: string;

  @SpeakeasyMetadata({ data: "json, name=share_url" })
  shareUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=total_item_count" })
  totalItemCount: number;

  @SpeakeasyMetadata({ data: "json, name=updated_time" })
  updatedTime?: Date;
}
