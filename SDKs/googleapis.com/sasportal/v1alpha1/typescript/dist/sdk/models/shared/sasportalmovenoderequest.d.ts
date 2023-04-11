import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Request for MoveNode.
 */
export declare class SasPortalMoveNodeRequest extends SpeakeasyBase {
    /**
     * Required. The name of the new parent resource node or customer to reparent the node under.
     */
    destination?: string;
}
