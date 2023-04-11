import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A reference to a file's parent.
 */
export declare class ParentReference extends SpeakeasyBase {
    /**
     * The ID of the parent.
     */
    id?: string;
    /**
     * Whether or not the parent is the root folder.
     */
    isRoot?: boolean;
    /**
     * This is always drive#parentReference.
     */
    kind?: string;
    /**
     * A link to the parent.
     */
    parentLink?: string;
    /**
     * A link back to this reference.
     */
    selfLink?: string;
}
