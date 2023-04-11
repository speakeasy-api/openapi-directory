import { SpeakeasyBase } from "../../../internal/utils";
import { Tag } from "./tag";
import { Trigger } from "./trigger";
import { Variable } from "./variable";
/**
 * Represents a Google Tag Manager Folder's contents.
 */
export declare class FolderEntities extends SpeakeasyBase {
    /**
     * Continuation token for fetching the next page of results.
     */
    nextPageToken?: string;
    /**
     * The list of tags inside the folder.
     */
    tag?: Tag[];
    /**
     * The list of triggers inside the folder.
     */
    trigger?: Trigger[];
    /**
     * The list of variables inside the folder.
     */
    variable?: Variable[];
}
