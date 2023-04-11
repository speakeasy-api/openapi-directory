import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleExampleLibraryagentV1Book } from "./googleexamplelibraryagentv1book";
/**
 * Response message for LibraryAgent.ListBooks.
 */
export declare class GoogleExampleLibraryagentV1ListBooksResponse extends SpeakeasyBase {
    /**
     * The list of books.
     */
    books?: GoogleExampleLibraryagentV1Book[];
    /**
     * A token to retrieve next page of results. Pass this value in the ListBooksRequest.page_token field in the subsequent call to `ListBooks` method to retrieve the next page of results.
     */
    nextPageToken?: string;
}
