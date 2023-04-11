import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Information of all parent and children locations related to this one.
 */
export declare class RelationshipData extends SpeakeasyBase {
    /**
     * The resource name of the Chain that this location is member of. How to find Chain ID
     */
    parentChain?: string;
}
