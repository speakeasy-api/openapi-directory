import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Configuration options for private clusters.
 */
export declare class PrivateClusterConfig extends SpeakeasyBase {
    /**
     * Additional projects that are allowed to attach to the workstation cluster's service attachment. By default, the workstation cluster's project and the VPC host project (if different) are allowed.
     */
    allowedProjects?: string[];
    /**
     * Output only. Hostname for the workstation cluster. This field will be populated only when private endpoint is enabled. To access workstations in the cluster, create a new DNS zone mapping this domain name to an internal IP address and a forwarding rule mapping that address to the service attachment.
     */
    clusterHostname?: string;
    /**
     * Immutable. Whether Workstations endpoint is private.
     */
    enablePrivateEndpoint?: boolean;
    /**
     * Output only. Service attachment URI for the workstation cluster. The service attachemnt is created when private endpoint is enabled. To access workstations in the cluster, configure access to the managed service using [Private Service Connect](https://cloud.google.com/vpc/docs/configure-private-service-connect-services).
     */
    serviceAttachmentUri?: string;
}
/**
 * Configuration options for private clusters.
 */
export declare class PrivateClusterConfigInput extends SpeakeasyBase {
    /**
     * Additional projects that are allowed to attach to the workstation cluster's service attachment. By default, the workstation cluster's project and the VPC host project (if different) are allowed.
     */
    allowedProjects?: string[];
    /**
     * Immutable. Whether Workstations endpoint is private.
     */
    enablePrivateEndpoint?: boolean;
}
