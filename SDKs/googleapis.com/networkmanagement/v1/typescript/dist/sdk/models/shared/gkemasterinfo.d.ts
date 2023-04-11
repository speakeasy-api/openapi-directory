import { SpeakeasyBase } from "../../../internal/utils";
/**
 * For display only. Metadata associated with a Google Kubernetes Engine (GKE) cluster master.
 */
export declare class GKEMasterInfo extends SpeakeasyBase {
    /**
     * URI of a GKE cluster network.
     */
    clusterNetworkUri?: string;
    /**
     * URI of a GKE cluster.
     */
    clusterUri?: string;
    /**
     * External IP address of a GKE cluster master.
     */
    externalIp?: string;
    /**
     * Internal IP address of a GKE cluster master.
     */
    internalIp?: string;
}
