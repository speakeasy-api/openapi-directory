import { SpeakeasyBase } from "../../../internal/utils";
import { Folder } from "./folder";
/**
 * The ListFolders response message.
 */
export declare class ListFoldersResponse extends SpeakeasyBase {
    /**
     * A possibly paginated list of Folders that are direct descendants of the specified parent resource.
     */
    folders?: Folder[];
    /**
     * A pagination token returned from a previous call to `ListFolders` that indicates from where listing should continue.
     */
    nextPageToken?: string;
}
