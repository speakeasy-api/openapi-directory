import { SpeakeasyBase } from "../../../internal/utils";
import { EmbeddedResource } from "./embeddedresource";
/**
 * Success
 */
export declare class Group extends SpeakeasyBase {
    /**
     * Groups accessible if any
     */
    accessibleGroups?: EmbeddedResource[];
    /**
     * ID of the Group
     */
    id?: number;
    /**
     * Name of the Group
     */
    name?: string;
    /**
     * ID of the parent Group
     */
    parentId?: number;
}
