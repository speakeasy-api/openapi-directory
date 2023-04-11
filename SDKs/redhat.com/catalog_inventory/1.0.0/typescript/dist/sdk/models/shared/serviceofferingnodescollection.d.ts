import { SpeakeasyBase } from "../../../internal/utils";
import { CollectionLinks } from "./collectionlinks";
import { CollectionMetadata } from "./collectionmetadata";
import { ServiceOfferingNode } from "./serviceofferingnode";
/**
 * ServiceOfferingNodes collection
 */
export declare class ServiceOfferingNodesCollection extends SpeakeasyBase {
    data?: ServiceOfferingNode[];
    links?: CollectionLinks;
    meta?: CollectionMetadata;
}
