import { SpeakeasyBase } from "../../../internal/utils";
import { ObjectT } from "./object";
/**
 * A list of objects.
 */
export declare class Objects extends SpeakeasyBase {
    /**
     * The list of items.
     */
    items?: ObjectT[];
    /**
     * The kind of item this is. For lists of objects, this is always storage#objects.
     */
    kind?: string;
    /**
     * The continuation token, used to page through large result sets. Provide this value in a subsequent request to return the next page of results.
     */
    nextPageToken?: string;
    /**
     * The list of prefixes of objects matching-but-not-listed up to and including the requested delimiter.
     */
    prefixes?: string[];
}
