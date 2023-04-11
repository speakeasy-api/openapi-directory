import { SpeakeasyBase } from "../../../internal/utils";
import { Bookshelf } from "./bookshelf";
/**
 * Successful response
 */
export declare class Bookshelves extends SpeakeasyBase {
    /**
     * A list of bookshelves.
     */
    items?: Bookshelf[];
    /**
     * Resource type.
     */
    kind?: string;
}
