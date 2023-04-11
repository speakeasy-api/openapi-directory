import { SpeakeasyBase } from "../../../internal/utils";
import { CollectionLinks } from "./collectionlinks";
import { CollectionMetadata } from "./collectionmetadata";
import { Source } from "./source";
/**
 * Sources collection
 */
export declare class SourcesCollection extends SpeakeasyBase {
    data?: Source[];
    links?: CollectionLinks;
    meta?: CollectionMetadata;
}
