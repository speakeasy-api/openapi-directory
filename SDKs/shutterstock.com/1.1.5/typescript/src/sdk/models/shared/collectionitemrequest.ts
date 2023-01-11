import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CollectionItem } from "./collectionitem";



// CollectionItemRequest
/** 
 * Request to get a list of items in a collection
**/
export class CollectionItemRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=items", elemType: CollectionItem })
  items: CollectionItem[];
}
