import { SpeakeasyBase } from "../../../internal/utils";
import { Folder } from "./folder";
/**
 * The response message for searching folders.
 */
export declare class SearchFoldersResponse extends SpeakeasyBase {
    /**
     * A possibly paginated folder search results. the specified parent resource.
     */
    folders?: Folder[];
    /**
     * A pagination token returned from a previous call to `SearchFolders` that indicates from where searching should continue.
     */
    nextPageToken?: string;
}
