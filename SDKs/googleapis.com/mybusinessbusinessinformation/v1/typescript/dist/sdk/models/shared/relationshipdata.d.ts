import { SpeakeasyBase } from "../../../internal/utils";
import { RelevantLocation } from "./relevantlocation";
/**
 * Information of all parent and children locations related to this one.
 */
export declare class RelationshipData extends SpeakeasyBase {
    /**
     * The list of children locations that this location has relations with.
     */
    childrenLocations?: RelevantLocation[];
    /**
     * The resource name of the Chain that this location is member of. How to find Chain ID
     */
    parentChain?: string;
    /**
     * Information about another location that is related to current one. The relation can be any one of DEPARTMENT_OF or INDEPENDENT_ESTABLISHMENT_OF, and the location specified here can be on either side (parent/child) of the location.
     */
    parentLocation?: RelevantLocation;
}
