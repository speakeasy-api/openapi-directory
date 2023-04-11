import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Request for ApplyParameters.
 */
export declare class ApplyParametersRequest extends SpeakeasyBase {
    /**
     * Whether to apply instance-level parameter group to all nodes. If set to true, users are restricted from specifying individual nodes, and `ApplyParameters` updates all nodes within the instance.
     */
    applyAll?: boolean;
    /**
     * Nodes to which the instance-level parameter group is applied.
     */
    nodeIds?: string[];
}
