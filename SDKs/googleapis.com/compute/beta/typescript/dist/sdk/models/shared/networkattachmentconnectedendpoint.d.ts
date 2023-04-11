import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The status of a connected endpoint to this network attachment.
 */
export declare enum NetworkAttachmentConnectedEndpointStatusEnum {
    Accepted = "ACCEPTED",
    Closed = "CLOSED",
    NeedsAttention = "NEEDS_ATTENTION",
    Pending = "PENDING",
    Rejected = "REJECTED",
    StatusUnspecified = "STATUS_UNSPECIFIED"
}
/**
 * [Output Only] A connection connected to this network attachment.
 */
export declare class NetworkAttachmentConnectedEndpoint extends SpeakeasyBase {
    /**
     * The IP address assigned to the producer instance network interface. This value will be a range in case of Serverless.
     */
    ipAddress?: string;
    /**
     * The project id or number of the interface to which the IP was assigned.
     */
    projectIdOrNum?: string;
    /**
     * Alias IP ranges from the same subnetwork
     */
    secondaryIpCidrRanges?: string[];
    /**
     * The status of a connected endpoint to this network attachment.
     */
    status?: NetworkAttachmentConnectedEndpointStatusEnum;
    /**
     * The subnetwork used to assign the IP to the producer instance network interface.
     */
    subnetwork?: string;
}
