import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Successfully retrieved
 */
export declare class Media extends SpeakeasyBase {
    /**
     * The ID of your Nexmo account. This is the same as your API key.
     */
    accountId?: string;
    /**
     * An identifier for the content. This will change if the content of the file has been changed (i.e. if you upload a new version of the file). For more information see Wikipedia: [HTTP ETag](https://en.wikipedia.org/wiki/HTTP_ETag)
     */
    etag?: string;
    /**
     * A UUID representing the object.
     */
    id?: string;
    /**
     * The maximum number of times the file may be downloaded.
     */
    maxDownloadsAllowed?: number;
    /**
     * The size of the file in bytes
     */
    mediaSize?: number;
    /**
     * A user set string containing metadata about the media file.
     */
    metadataPrimary?: string;
    /**
     * A user set string containing further metadata about the media file.
     */
    metadataSecondary?: string;
    /**
     * The IETF MIME type of the file.
     */
    mimeType?: string;
    /**
     * The filename of the object as it was originally uploaded.
     */
    originalFileName?: string;
    /**
     * Whether the item is available for download without authentication.
     */
    public?: boolean;
    /**
     * An internal identifier of how the file is stored.
     */
    storeId?: string;
    /**
     * A timestamp for the time that the file was created
     */
    timeCreated?: string;
    /**
     * A timestamp for the time that the file was last modified
     */
    timeLastUpdated?: string;
    /**
     * The number of times the file has been downloaded.
     */
    timesDownloaded?: number;
}
