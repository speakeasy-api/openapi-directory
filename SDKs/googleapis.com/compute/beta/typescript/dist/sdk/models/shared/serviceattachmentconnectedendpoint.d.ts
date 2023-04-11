import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The status of a connected endpoint to this service attachment.
 */
export declare enum ServiceAttachmentConnectedEndpointStatusEnum {
    Accepted = "ACCEPTED",
    Closed = "CLOSED",
    NeedsAttention = "NEEDS_ATTENTION",
    Pending = "PENDING",
    Rejected = "REJECTED",
    StatusUnspecified = "STATUS_UNSPECIFIED"
}
/**
 * [Output Only] A connection connected to this service attachment.
 */
export declare class ServiceAttachmentConnectedEndpoint extends SpeakeasyBase {
    /**
     * The url of a connected endpoint.
     */
    endpoint?: string;
    /**
     * The PSC connection id of the connected endpoint.
     */
    pscConnectionId?: string;
    /**
     * The status of a connected endpoint to this service attachment.
     */
    status?: ServiceAttachmentConnectedEndpointStatusEnum;
}
