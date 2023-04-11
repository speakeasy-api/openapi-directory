import { SpeakeasyBase } from "../../../internal/utils";
import { CollectionLinks } from "./collectionlinks";
import { CollectionMetadata } from "./collectionmetadata";
import { ServiceInventory } from "./serviceinventory";
/**
 * ServiceInventories collection
 */
export declare class ServiceInventoriesCollection extends SpeakeasyBase {
    data?: ServiceInventory[];
    links?: CollectionLinks;
    meta?: CollectionMetadata;
}
