import { SpeakeasyBase } from "../../../internal/utils";
import { ParentReference } from "./parentreference";
/**
 * A list of a file's parents.
 */
export declare class ParentList extends SpeakeasyBase {
    /**
     * The ETag of the list.
     */
    etag?: string;
    /**
     * The list of parents.
     */
    items?: ParentReference[];
    /**
     * This is always drive#parentList.
     */
    kind?: string;
    /**
     * A link back to this list.
     */
    selfLink?: string;
}
