import { SpeakeasyBase } from "../../../internal/utils";
import { Setting } from "./setting";
/**
 * Successful response
 */
export declare class Settings extends SpeakeasyBase {
    /**
     * Etag of the collection.
     */
    etag?: string;
    /**
     * List of user settings.
     */
    items?: Setting[];
    /**
     * Type of the collection ("calendar#settings").
     */
    kind?: string;
    /**
     * Token used to access the next page of this result. Omitted if no further results are available, in which case nextSyncToken is provided.
     */
    nextPageToken?: string;
    /**
     * Token used at a later point in time to retrieve only the entries that have changed since this result was returned. Omitted if further results are available, in which case nextPageToken is provided.
     */
    nextSyncToken?: string;
}
