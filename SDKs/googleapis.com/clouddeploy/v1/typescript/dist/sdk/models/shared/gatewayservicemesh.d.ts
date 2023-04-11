import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Information about the Kubernetes Gateway API service mesh configuration.
 */
export declare class GatewayServiceMesh extends SpeakeasyBase {
    /**
     * Required. Name of the Kubernetes Deployment whose traffic is managed by the specified HTTPRoute and Service.
     */
    deployment?: string;
    /**
     * Required. Name of the Gateway API HTTPRoute.
     */
    httpRoute?: string;
    /**
     * Required. Name of the Kubernetes Service.
     */
    service?: string;
}
