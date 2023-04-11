import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class FilesDetailRequest extends SpeakeasyBase {
    /**
     * The unique identifier of the file you wish to retrieve.
     */
    fileId: string;
}
/**
 * The properties of the file entity.
 */
export declare class FilesDetailFileAttributes extends SpeakeasyBase {
    /**
     * SOON TO BE DEPRECATED, see relationships checkout.
     */
    checkout?: string;
    /**
     * Whether or not the current user is allowed to post comments.
     */
    currentUserCanComment?: boolean;
    /**
     * Version number of the file.
     */
    currentVersion?: number;
    /**
     * The time at which the file was created, as an iso8601 formatted timestamp.
     */
    dateCreated?: Date;
    /**
     * The time at which the file was last modified, as an iso8601 formatted timestamp.
     */
    dateModified?: Date;
    /**
     * Whether or not deletion of the file is allowed.
     */
    deleteAllowed?: boolean;
    /**
     * Extra information, contains `hashes` (`sha256`, `md5`) and `downloads` count.
     */
    extra?: Record<string, any>;
    /**
     * Global unique identifier (GUID) for this file (if one has been assigned).
     */
    guid?: string;
    /**
     * The kind of files object it is (`file` or `folder`).
     */
    kind?: string;
    /**
     * The time at which the file external metadata was last retrieved as an iso8601 formatted timestamp (does not apply to OSF Storage files).
     */
    lastTouched?: Date;
    /**
     * Unix-style path to the file relative to the provider root.
     */
    materializedPath?: string;
    /**
     * Name of the file
     */
    name?: string;
    /**
     * The unique identifier for this file entity for this project and storage provider.
     */
    path?: string;
    /**
     * The id of the file provider (e.g., `osfstorage`)
     */
    provider?: string;
    /**
     * Size of the file in bytes.
     */
    size?: number;
    /**
     * A list of strings that describe this file, as entered by project contributors.
     */
    tags?: string[];
}
/**
 * Links to alternative representations of the file entity.
 */
export declare class FilesDetailFileLinks extends SpeakeasyBase {
    /**
     * The Waterbutler API route for file deletions.
     */
    delete?: string;
    /**
     * The Waterbutler API route for file downloads.
     */
    download?: string;
    /**
     * A link to the page to view a file's information or a folder's contents.
     */
    info?: string;
    /**
     * The Waterbutler API route for file moves.
     */
    move?: string;
    /**
     * The Waterbutler API route for creating a new subfolder (does not exist for files).
     */
    newFolder?: string;
    /**
     * A link to the detail page for the file.
     */
    self?: string;
    /**
     * The Waterbutler API route for file uploads.
     */
    upload?: string;
}
/**
 * Links to other entities or entity collections that have a relationship to the file entity.
 */
export declare class FilesDetailFileRelationships extends SpeakeasyBase {
    /**
     * A link to the user who checked out the file.
     */
    checkout?: string;
    /**
     * A link to the comments on the file.
     */
    comments?: string;
    /**
     * A link to the node the file is on.
     */
    node?: string;
    /**
     * A link to the versions of the file.
     */
    versions?: string;
}
export declare class FilesDetailFile extends SpeakeasyBase {
    /**
     * The properties of the file entity.
     */
    attributes?: FilesDetailFileAttributes;
    /**
     * The identifier of the file entity.
     */
    id?: string;
    /**
     * Links to alternative representations of the file entity.
     */
    links?: FilesDetailFileLinks;
    /**
     * Links to other entities or entity collections that have a relationship to the file entity.
     */
    relationships?: FilesDetailFileRelationships;
    /**
     * The type identifier of the file entity (`files`).
     */
    type?: string;
}
export declare class FilesDetailResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
