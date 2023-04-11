import { SpeakeasyBase } from "../../../internal/utils";
import { ConnectAgentResource } from "./connectagentresource";
/**
 * GenerateConnectManifestResponse contains manifest information for installing/upgrading a Connect agent.
 */
export declare class GenerateConnectManifestResponse extends SpeakeasyBase {
    /**
     * The ordered list of Kubernetes resources that need to be applied to the cluster for GKE Connect agent installation/upgrade.
     */
    manifest?: ConnectAgentResource[];
}
