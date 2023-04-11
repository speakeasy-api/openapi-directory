import { SpeakeasyBase } from "../../../internal/utils";
import { CollectionLinks } from "./collectionlinks";
import { CollectionMetadata } from "./collectionmetadata";
import { ServiceInstance } from "./serviceinstance";
/**
 * ServiceInstances collection
 */
export declare class ServiceInstancesCollection extends SpeakeasyBase {
    data?: ServiceInstance[];
    links?: CollectionLinks;
    meta?: CollectionMetadata;
}
