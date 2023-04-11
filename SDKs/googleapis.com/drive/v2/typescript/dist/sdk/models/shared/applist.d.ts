import { SpeakeasyBase } from "../../../internal/utils";
import { App } from "./app";
/**
 * A list of third-party applications which the user has installed or given access to Google Drive.
 */
export declare class AppList extends SpeakeasyBase {
    /**
     * List of app IDs that the user has specified to use by default. The list is in reverse-priority order (lowest to highest).
     */
    defaultAppIds?: string[];
    /**
     * The ETag of the list.
     */
    etag?: string;
    /**
     * The list of apps.
     */
    items?: App[];
    /**
     * This is always drive#appList.
     */
    kind?: string;
    /**
     * A link back to this list.
     */
    selfLink?: string;
}
