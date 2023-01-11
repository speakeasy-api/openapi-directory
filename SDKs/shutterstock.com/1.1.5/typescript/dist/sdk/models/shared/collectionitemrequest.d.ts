import { SpeakeasyBase } from "../../../internal/utils";
import { CollectionItem } from "./collectionitem";
/**
 * Request to get a list of items in a collection
**/
export declare class CollectionItemRequest extends SpeakeasyBase {
    items: CollectionItem[];
}
