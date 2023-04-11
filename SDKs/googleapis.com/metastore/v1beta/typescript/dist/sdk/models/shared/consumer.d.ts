import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Contains information of the customer's network configurations.
 */
export declare class Consumer extends SpeakeasyBase {
    /**
     * Output only. The URI of the endpoint used to access the metastore service.
     */
    endpointUri?: string;
    /**
     * Immutable. The subnetwork of the customer project from which an IP address is reserved and used as the Dataproc Metastore service's endpoint. It is accessible to hosts in the subnet and to all hosts in a subnet in the same region and same network. There must be at least one IP address available in the subnet's primary range. The subnet is specified in the following form:projects/{project_number}/regions/{region_id}/subnetworks/{subnetwork_id}
     */
    subnetwork?: string;
}
/**
 * Contains information of the customer's network configurations.
 */
export declare class ConsumerInput extends SpeakeasyBase {
    /**
     * Immutable. The subnetwork of the customer project from which an IP address is reserved and used as the Dataproc Metastore service's endpoint. It is accessible to hosts in the subnet and to all hosts in a subnet in the same region and same network. There must be at least one IP address available in the subnet's primary range. The subnet is specified in the following form:projects/{project_number}/regions/{region_id}/subnetworks/{subnetwork_id}
     */
    subnetwork?: string;
}
