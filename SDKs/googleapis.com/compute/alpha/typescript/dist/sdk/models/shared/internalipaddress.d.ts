import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The type of the internal IP address.
 */
export declare enum InternalIpAddressTypeEnum {
    PeerReserved = "PEER_RESERVED",
    PeerUsed = "PEER_USED",
    RemoteReserved = "REMOTE_RESERVED",
    RemoteUsed = "REMOTE_USED",
    Reserved = "RESERVED",
    Subnetwork = "SUBNETWORK",
    TypeUnspecified = "TYPE_UNSPECIFIED"
}
export declare class InternalIpAddress extends SpeakeasyBase {
    /**
     * IP CIDR address or range.
     */
    cidr?: string;
    /**
     * The owner of the internal IP address.
     */
    owner?: string;
    /**
     * The purpose of the internal IP address if applicable.
     */
    purpose?: string;
    /**
     * The region of the internal IP address if applicable.
     */
    region?: string;
    /**
     * The type of the internal IP address.
     */
    type?: InternalIpAddressTypeEnum;
}
