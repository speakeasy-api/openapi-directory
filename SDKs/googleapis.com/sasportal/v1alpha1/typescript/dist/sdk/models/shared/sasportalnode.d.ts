import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The Node.
 */
export declare class SasPortalNode extends SpeakeasyBase {
    /**
     * The node's display name.
     */
    displayName?: string;
    /**
     * Output only. Resource name.
     */
    name?: string;
    /**
     * User ids used by the devices belonging to this node.
     */
    sasUserIds?: string[];
}
