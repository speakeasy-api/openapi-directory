import { SpeakeasyBase } from "../../../internal/utils";
import { ItemAcl } from "./itemacl";
import { ItemContent } from "./itemcontent";
import { ItemMetadata } from "./itemmetadata";
import { ItemStatus } from "./itemstatus";
import { ItemStructuredData } from "./itemstructureddata";
/**
 * The type for this item.
 */
export declare enum ItemItemTypeEnum {
    Unspecified = "UNSPECIFIED",
    ContentItem = "CONTENT_ITEM",
    ContainerItem = "CONTAINER_ITEM",
    VirtualContainerItem = "VIRTUAL_CONTAINER_ITEM"
}
/**
 * Represents a single object that is an item in the search index, such as a file, folder, or a database record.
 */
export declare class Item extends SpeakeasyBase {
    /**
     * Access control list information for the item. For more information see [Map ACLs](https://developers.google.com/cloud-search/docs/guides/acls).
     */
    acl?: ItemAcl;
    /**
     * Content of an item to be indexed and surfaced by Cloud Search. Only UTF-8 encoded strings are allowed as inlineContent. If the content is uploaded and not binary, it must be UTF-8 encoded.
     */
    content?: ItemContent;
    /**
     * The type for this item.
     */
    itemType?: ItemItemTypeEnum;
    /**
     * Available metadata fields for the item.
     */
    metadata?: ItemMetadata;
    /**
     * The name of the Item. Format: datasources/{source_id}/items/{item_id} This is a required field. The maximum length is 1536 characters.
     */
    name?: string;
    /**
     * Additional state connector can store for this item. The maximum length is 10000 bytes.
     */
    payload?: string;
    /**
     * Queue this item belongs to. The maximum length is 100 characters.
     */
    queue?: string;
    /**
     * This contains item's status and any errors.
     */
    status?: ItemStatus;
    /**
     * Available structured data fields for the item.
     */
    structuredData?: ItemStructuredData;
    /**
     * Required. The indexing system stores the version from the datasource as a byte string and compares the Item version in the index to the version of the queued Item using lexical ordering. Cloud Search Indexing won't index or delete any queued item with a version value that is less than or equal to the version of the currently indexed item. The maximum length for this field is 1024 bytes. For information on how item version affects the deletion process, refer to [Handle revisions after manual deletes](https://developers.google.com/cloud-search/docs/guides/operations).
     */
    version?: string;
}
