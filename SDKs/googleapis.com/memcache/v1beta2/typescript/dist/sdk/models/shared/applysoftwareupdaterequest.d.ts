import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Request for ApplySoftwareUpdate.
 */
export declare class ApplySoftwareUpdateRequest extends SpeakeasyBase {
    /**
     * Whether to apply the update to all nodes. If set to true, will explicitly restrict users from specifying any nodes, and apply software update to all nodes (where applicable) within the instance.
     */
    applyAll?: boolean;
    /**
     * Nodes to which we should apply the update to. Note all the selected nodes are updated in parallel.
     */
    nodeIds?: string[];
}
