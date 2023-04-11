import { SpeakeasyBase } from "../../../internal/utils";
import { CollectionLinks } from "./collectionlinks";
import { CollectionMetadata } from "./collectionmetadata";
import { Tag } from "./tag";
/**
 * Tags collection
 */
export declare class TagsCollection extends SpeakeasyBase {
    data?: Tag[];
    links?: CollectionLinks;
    meta?: CollectionMetadata;
}
