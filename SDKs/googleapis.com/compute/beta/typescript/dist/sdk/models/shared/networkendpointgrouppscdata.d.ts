import { SpeakeasyBase } from "../../../internal/utils";
/**
 * [Output Only] The connection status of the PSC Forwarding Rule.
 */
export declare enum NetworkEndpointGroupPscDataPscConnectionStatusEnum {
    Accepted = "ACCEPTED",
    Closed = "CLOSED",
    NeedsAttention = "NEEDS_ATTENTION",
    Pending = "PENDING",
    Rejected = "REJECTED",
    StatusUnspecified = "STATUS_UNSPECIFIED"
}
/**
 * All data that is specifically relevant to only network endpoint groups of type PRIVATE_SERVICE_CONNECT.
 */
export declare class NetworkEndpointGroupPscData extends SpeakeasyBase {
    /**
     * [Output Only] Address allocated from given subnetwork for PSC. This IP address acts as a VIP for a PSC NEG, allowing it to act as an endpoint in L7 PSC-XLB.
     */
    consumerPscAddress?: string;
    /**
     * [Output Only] The PSC connection id of the PSC Network Endpoint Group Consumer.
     */
    pscConnectionId?: string;
    /**
     * [Output Only] The connection status of the PSC Forwarding Rule.
     */
    pscConnectionStatus?: NetworkEndpointGroupPscDataPscConnectionStatusEnum;
}
