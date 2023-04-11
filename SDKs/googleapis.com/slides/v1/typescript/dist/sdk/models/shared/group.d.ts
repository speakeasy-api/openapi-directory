import { SpeakeasyBase } from "../../../internal/utils";
import { PageElement } from "./pageelement";
/**
 * A PageElement kind representing a joined collection of PageElements.
 */
export declare class Group extends SpeakeasyBase {
    /**
     * The collection of elements in the group. The minimum size of a group is 2.
     */
    children?: PageElement[];
}
