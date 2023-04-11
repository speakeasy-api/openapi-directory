import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Links to 16x16 and 32x32 icons representing the API.
 */
export declare class DirectoryListItemsIcons extends SpeakeasyBase {
    /**
     * The URL of the 16x16 icon.
     */
    x16?: string;
    /**
     * The URL of the 32x32 icon.
     */
    x32?: string;
}
export declare class DirectoryListItems extends SpeakeasyBase {
    /**
     * The description of this API.
     */
    description?: string;
    /**
     * A link to the discovery document.
     */
    discoveryLink?: string;
    /**
     * The URL for the discovery REST document.
     */
    discoveryRestUrl?: string;
    /**
     * A link to human readable documentation for the API.
     */
    documentationLink?: string;
    /**
     * Links to 16x16 and 32x32 icons representing the API.
     */
    icons?: DirectoryListItemsIcons;
    /**
     * The id of this API.
     */
    id?: string;
    /**
     * The kind for this response.
     */
    kind?: string;
    /**
     * Labels for the status of this API, such as labs or deprecated.
     */
    labels?: string[];
    /**
     * The name of the API.
     */
    name?: string;
    /**
     * True if this version is the preferred version to use.
     */
    preferred?: boolean;
    /**
     * The title of this API.
     */
    title?: string;
    /**
     * The version of the API.
     */
    version?: string;
}
/**
 * Successful response
 */
export declare class DirectoryList extends SpeakeasyBase {
    /**
     * Indicate the version of the Discovery API used to generate this doc.
     */
    discoveryVersion?: string;
    /**
     * The individual directory entries. One entry per api/version pair.
     */
    items?: DirectoryListItems[];
    /**
     * The kind for this response.
     */
    kind?: string;
}
