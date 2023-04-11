import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A Shelf contains a collection of books with a theme.
 */
export declare class GoogleExampleLibraryagentV1Shelf extends SpeakeasyBase {
    /**
     * Output only. The resource name of the shelf. Shelf names have the form `shelves/{shelf_id}`. The name is ignored when creating a shelf.
     */
    name?: string;
    /**
     * The theme of the shelf
     */
    theme?: string;
}
