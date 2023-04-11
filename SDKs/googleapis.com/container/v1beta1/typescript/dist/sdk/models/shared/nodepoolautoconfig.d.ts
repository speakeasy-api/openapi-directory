import { SpeakeasyBase } from "../../../internal/utils";
import { NetworkTags } from "./networktags";
/**
 * node pool configs that apply to all auto-provisioned node pools in autopilot clusters and node auto-provisioning enabled clusters
 */
export declare class NodePoolAutoConfig extends SpeakeasyBase {
    /**
     * Collection of Compute Engine network tags that can be applied to a node's underlying VM instance. (See `tags` field in [`NodeConfig`](/kubernetes-engine/docs/reference/rest/v1/NodeConfig)).
     */
    networkTags?: NetworkTags;
}
