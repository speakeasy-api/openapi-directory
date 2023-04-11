import { SpeakeasyBase } from "../../../internal/utils";
import { CollectionLinks } from "./collectionlinks";
import { CollectionMetadata } from "./collectionmetadata";
import { ServiceOffering } from "./serviceoffering";
/**
 * ServiceOfferings collection
 */
export declare class ServiceOfferingsCollection extends SpeakeasyBase {
    data?: ServiceOffering[];
    links?: CollectionLinks;
    meta?: CollectionMetadata;
}
