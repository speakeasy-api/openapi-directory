import { SpeakeasyBase } from "../../../internal/utils";
/**
 * For display only. The specification of the endpoints for the test. EndpointInfo is derived from source and destination Endpoint and validated by the backend data plane model.
 */
export declare class EndpointInfo extends SpeakeasyBase {
    /**
     * Destination IP address.
     */
    destinationIp?: string;
    /**
     * URI of the network where this packet is sent to.
     */
    destinationNetworkUri?: string;
    /**
     * Destination port. Only valid when protocol is TCP or UDP.
     */
    destinationPort?: number;
    /**
     * IP protocol in string format, for example: "TCP", "UDP", "ICMP".
     */
    protocol?: string;
    /**
     * URI of the source telemetry agent this packet originates from.
     */
    sourceAgentUri?: string;
    /**
     * Source IP address.
     */
    sourceIp?: string;
    /**
     * URI of the network where this packet originates from.
     */
    sourceNetworkUri?: string;
    /**
     * Source port. Only valid when protocol is TCP or UDP.
     */
    sourcePort?: number;
}
