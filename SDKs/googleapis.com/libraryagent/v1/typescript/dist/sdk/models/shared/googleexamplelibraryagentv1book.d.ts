import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A single book in the library.
 */
export declare class GoogleExampleLibraryagentV1Book extends SpeakeasyBase {
    /**
     * The name of the book author.
     */
    author?: string;
    /**
     * The resource name of the book. Book names have the form `shelves/{shelf_id}/books/{book_id}`. The name is ignored when creating a book.
     */
    name?: string;
    /**
     * Value indicating whether the book has been read.
     */
    read?: boolean;
    /**
     * The title of the book.
     */
    title?: string;
}
