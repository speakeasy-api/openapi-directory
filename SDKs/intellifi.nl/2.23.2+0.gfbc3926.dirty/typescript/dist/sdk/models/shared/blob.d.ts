import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A JSON object containing the blob
 */
export declare class Blob extends SpeakeasyBase {
    /**
     * Unique key to the blob
     */
    blobKey?: string;
    /**
     * Media type of the resource. Automatically detected when not given in a POST.
     */
    contentType?: string;
    /**
     * Url to the individual resource.
     */
    downloadUrl?: string;
    /**
     * Filename of the blob
     */
    filename?: string;
    /**
     * Hash of the blob
     */
    hash?: string;
    /**
     * Unique identifier for resource.
     */
    id?: string;
    /**
     * [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) formatted string for when this resource was created.
     */
    timeCreated?: string;
    /**
     * [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) formatted string for when this resource was last accessed.
     */
    timeLastAccessed?: string;
    /**
     * [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) formatted string for when this resource was updated.
     */
    timeUpdated?: string;
    /**
     * Url to the individual resource.
     */
    uploadUrl?: string;
    /**
     * Url to the individual resource.
     */
    url?: string;
}
/**
 * A JSON object containing blob information
 */
export declare class BlobInput extends SpeakeasyBase {
    /**
     * Unique key to the blob
     */
    blobKey?: string;
    /**
     * Media type of the resource. Automatically detected when not given in a POST.
     */
    contentType?: string;
    /**
     * Filename of the blob
     */
    filename?: string;
}
