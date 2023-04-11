import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The trust direction, which decides if the current domain is trusted, trusting, or both.
 */
export declare enum TrustTrustDirectionEnum {
    TrustDirectionUnspecified = "TRUST_DIRECTION_UNSPECIFIED",
    Inbound = "INBOUND",
    Outbound = "OUTBOUND",
    Bidirectional = "BIDIRECTIONAL"
}
/**
 * The type of trust represented by the trust resource.
 */
export declare enum TrustTrustTypeEnum {
    TrustTypeUnspecified = "TRUST_TYPE_UNSPECIFIED",
    Forest = "FOREST",
    External = "EXTERNAL"
}
/**
 * Represents a relationship between two domains. This allows a controller in one domain to authenticate a user in another domain.
 */
export declare class TrustInput extends SpeakeasyBase {
    /**
     * The trust authentication type, which decides whether the trusted side has forest/domain wide access or selective access to an approved set of resources.
     */
    selectiveAuthentication?: boolean;
    /**
     * The target DNS server IP addresses which can resolve the remote domain involved in the trust.
     */
    targetDnsIpAddresses?: string[];
    /**
     * The fully qualified target domain name which will be in trust with the current domain.
     */
    targetDomainName?: string;
    /**
     * The trust direction, which decides if the current domain is trusted, trusting, or both.
     */
    trustDirection?: TrustTrustDirectionEnum;
    /**
     * Input only. The trust secret used for the handshake with the target domain. It will not be stored.
     */
    trustHandshakeSecret?: string;
    /**
     * The type of trust represented by the trust resource.
     */
    trustType?: TrustTrustTypeEnum;
}
/**
 * Output only. The current state of the trust.
 */
export declare enum TrustStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Creating = "CREATING",
    Updating = "UPDATING",
    Deleting = "DELETING",
    Connected = "CONNECTED",
    Disconnected = "DISCONNECTED"
}
/**
 * Represents a relationship between two domains. This allows a controller in one domain to authenticate a user in another domain.
 */
export declare class Trust extends SpeakeasyBase {
    /**
     * Output only. The time the instance was created.
     */
    createTime?: string;
    /**
     * Output only. The last heartbeat time when the trust was known to be connected.
     */
    lastTrustHeartbeatTime?: string;
    /**
     * The trust authentication type, which decides whether the trusted side has forest/domain wide access or selective access to an approved set of resources.
     */
    selectiveAuthentication?: boolean;
    /**
     * Output only. The current state of the trust.
     */
    state?: TrustStateEnum;
    /**
     * Output only. Additional information about the current state of the trust, if available.
     */
    stateDescription?: string;
    /**
     * The target DNS server IP addresses which can resolve the remote domain involved in the trust.
     */
    targetDnsIpAddresses?: string[];
    /**
     * The fully qualified target domain name which will be in trust with the current domain.
     */
    targetDomainName?: string;
    /**
     * The trust direction, which decides if the current domain is trusted, trusting, or both.
     */
    trustDirection?: TrustTrustDirectionEnum;
    /**
     * Input only. The trust secret used for the handshake with the target domain. It will not be stored.
     */
    trustHandshakeSecret?: string;
    /**
     * The type of trust represented by the trust resource.
     */
    trustType?: TrustTrustTypeEnum;
    /**
     * Output only. The last update time.
     */
    updateTime?: string;
}
