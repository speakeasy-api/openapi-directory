import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A reference to a folder's child.
 */
export declare class ChildReference extends SpeakeasyBase {
    /**
     * A link to the child.
     */
    childLink?: string;
    /**
     * The ID of the child.
     */
    id?: string;
    /**
     * This is always drive#childReference.
     */
    kind?: string;
    /**
     * A link back to this reference.
     */
    selfLink?: string;
}
