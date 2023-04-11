import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Information about the Kubernetes Service networking configuration.
 */
export declare class ServiceNetworking extends SpeakeasyBase {
    /**
     * Required. Name of the Kubernetes Deployment whose traffic is managed by the specified Service.
     */
    deployment?: string;
    /**
     * Required. Name of the Kubernetes Service.
     */
    service?: string;
}
