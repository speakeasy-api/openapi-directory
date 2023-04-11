import { SpeakeasyBase } from "../../../internal/utils";
import { GatewayServiceMesh } from "./gatewayservicemesh";
import { ServiceNetworking } from "./servicenetworking";
/**
 * KubernetesConfig contains the Kubernetes runtime configuration.
 */
export declare class KubernetesConfig extends SpeakeasyBase {
    /**
     * Information about the Kubernetes Gateway API service mesh configuration.
     */
    gatewayServiceMesh?: GatewayServiceMesh;
    /**
     * Information about the Kubernetes Service networking configuration.
     */
    serviceNetworking?: ServiceNetworking;
}
