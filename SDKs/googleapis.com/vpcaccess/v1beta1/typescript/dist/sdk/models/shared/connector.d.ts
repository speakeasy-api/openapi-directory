import { SpeakeasyBase } from "../../../internal/utils";
import { Subnet } from "./subnet";
/**
 * Definition of a Serverless VPC Access connector.
 */
export declare class ConnectorInput extends SpeakeasyBase {
    /**
     * The range of internal addresses that follows RFC 4632 notation. Example: `10.132.0.0/28`.
     */
    ipCidrRange?: string;
    /**
     * Machine type of VM Instance underlying connector. Default is e2-micro
     */
    machineType?: string;
    /**
     * Maximum value of instances in autoscaling group underlying the connector.
     */
    maxInstances?: number;
    /**
     * Maximum throughput of the connector in Mbps. Default is 300, max is 1000.
     */
    maxThroughput?: number;
    /**
     * Minimum value of instances in autoscaling group underlying the connector.
     */
    minInstances?: number;
    /**
     * Minimum throughput of the connector in Mbps. Default and min is 200.
     */
    minThroughput?: number;
    /**
     * The resource name in the format `projects/* /locations/* /connectors/*`.
     */
    name?: string;
    /**
     * Name of a VPC network.
     */
    network?: string;
    /**
     * The subnet in which to house the connector
     */
    subnet?: Subnet;
}
/**
 * Output only. State of the VPC access connector.
 */
export declare enum ConnectorStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Ready = "READY",
    Creating = "CREATING",
    Deleting = "DELETING",
    Error = "ERROR",
    Updating = "UPDATING"
}
/**
 * Definition of a Serverless VPC Access connector.
 */
export declare class Connector extends SpeakeasyBase {
    /**
     * Output only. List of projects using the connector.
     */
    connectedProjects?: string[];
    /**
     * The range of internal addresses that follows RFC 4632 notation. Example: `10.132.0.0/28`.
     */
    ipCidrRange?: string;
    /**
     * Machine type of VM Instance underlying connector. Default is e2-micro
     */
    machineType?: string;
    /**
     * Maximum value of instances in autoscaling group underlying the connector.
     */
    maxInstances?: number;
    /**
     * Maximum throughput of the connector in Mbps. Default is 300, max is 1000.
     */
    maxThroughput?: number;
    /**
     * Minimum value of instances in autoscaling group underlying the connector.
     */
    minInstances?: number;
    /**
     * Minimum throughput of the connector in Mbps. Default and min is 200.
     */
    minThroughput?: number;
    /**
     * The resource name in the format `projects/* /locations/* /connectors/*`.
     */
    name?: string;
    /**
     * Name of a VPC network.
     */
    network?: string;
    /**
     * Output only. State of the VPC access connector.
     */
    state?: ConnectorStateEnum;
    /**
     * The subnet in which to house the connector
     */
    subnet?: Subnet;
}
