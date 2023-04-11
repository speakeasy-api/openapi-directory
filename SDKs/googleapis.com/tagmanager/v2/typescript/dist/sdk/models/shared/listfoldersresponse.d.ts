import { SpeakeasyBase } from "../../../internal/utils";
import { Folder } from "./folder";
/**
 * List Folders Response.
 */
export declare class ListFoldersResponse extends SpeakeasyBase {
    /**
     * All GTM Folders of a GTM Container.
     */
    folder?: Folder[];
    /**
     * Continuation token for fetching the next page of results.
     */
    nextPageToken?: string;
}
