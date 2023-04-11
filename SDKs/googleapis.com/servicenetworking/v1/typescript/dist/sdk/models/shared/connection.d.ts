import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Represents a private connection resource. A private connection is implemented as a VPC Network Peering connection between a service producer's VPC network and a service consumer's VPC network.
 */
export declare class ConnectionInput extends SpeakeasyBase {
    /**
     * The name of service consumer's VPC network that's connected with service producer network, in the following format: `projects/{project}/global/networks/{network}`. `{project}` is a project number, such as in `12345` that includes the VPC service consumer's VPC network. `{network}` is the name of the service consumer's VPC network.
     */
    network?: string;
    /**
     * The name of one or more allocated IP address ranges for this service producer of type `PEERING`. Note that invoking CreateConnection method with a different range when connection is already established will not modify already provisioned service producer subnetworks. If CreateConnection method is invoked repeatedly to reconnect when peering connection had been disconnected on the consumer side, leaving this field empty will restore previously allocated IP ranges.
     */
    reservedPeeringRanges?: string[];
}
/**
 * Represents a private connection resource. A private connection is implemented as a VPC Network Peering connection between a service producer's VPC network and a service consumer's VPC network.
 */
export declare class Connection extends SpeakeasyBase {
    /**
     * The name of service consumer's VPC network that's connected with service producer network, in the following format: `projects/{project}/global/networks/{network}`. `{project}` is a project number, such as in `12345` that includes the VPC service consumer's VPC network. `{network}` is the name of the service consumer's VPC network.
     */
    network?: string;
    /**
     * Output only. The name of the VPC Network Peering connection that was created by the service producer.
     */
    peering?: string;
    /**
     * The name of one or more allocated IP address ranges for this service producer of type `PEERING`. Note that invoking CreateConnection method with a different range when connection is already established will not modify already provisioned service producer subnetworks. If CreateConnection method is invoked repeatedly to reconnect when peering connection had been disconnected on the consumer side, leaving this field empty will restore previously allocated IP ranges.
     */
    reservedPeeringRanges?: string[];
    /**
     * Output only. The name of the peering service that's associated with this connection, in the following format: `services/{service name}`.
     */
    service?: string;
}
