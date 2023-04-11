import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleExampleLibraryagentV1Shelf } from "./googleexamplelibraryagentv1shelf";
/**
 * Response message for LibraryAgent.ListShelves.
 */
export declare class GoogleExampleLibraryagentV1ListShelvesResponse extends SpeakeasyBase {
    /**
     * A token to retrieve next page of results. Pass this value in the ListShelvesRequest.page_token field in the subsequent call to `ListShelves` method to retrieve the next page of results.
     */
    nextPageToken?: string;
    /**
     * The list of shelves.
     */
    shelves?: GoogleExampleLibraryagentV1Shelf[];
}
