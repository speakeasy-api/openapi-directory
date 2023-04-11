import { SpeakeasyBase } from "../../../internal/utils";
import { RepositoryError } from "./repositoryerror";
/**
 * The type of the push operation that defines the push behavior.
 */
export declare enum PushItemTypeEnum {
    Unspecified = "UNSPECIFIED",
    Modified = "MODIFIED",
    NotModified = "NOT_MODIFIED",
    RepositoryError = "REPOSITORY_ERROR",
    Requeue = "REQUEUE"
}
/**
 * Represents an item to be pushed to the indexing queue.
 */
export declare class PushItem extends SpeakeasyBase {
    /**
     * Content hash of the item according to the repository. If specified, this is used to determine how to modify this item's status. Setting this field and the type field results in argument error. The maximum length is 2048 characters.
     */
    contentHash?: string;
    /**
     * The metadata hash of the item according to the repository. If specified, this is used to determine how to modify this item's status. Setting this field and the type field results in argument error. The maximum length is 2048 characters.
     */
    metadataHash?: string;
    /**
     * Provides additional document state information for the connector, such as an alternate repository ID and other metadata. The maximum length is 8192 bytes.
     */
    payload?: string;
    /**
     * Queue to which this item belongs. The `default` queue is chosen if this field is not specified. The maximum length is 512 characters.
     */
    queue?: string;
    /**
     * Errors when the connector is communicating to the source repository.
     */
    repositoryError?: RepositoryError;
    /**
     * Structured data hash of the item according to the repository. If specified, this is used to determine how to modify this item's status. Setting this field and the type field results in argument error. The maximum length is 2048 characters.
     */
    structuredDataHash?: string;
    /**
     * The type of the push operation that defines the push behavior.
     */
    type?: PushItemTypeEnum;
}
