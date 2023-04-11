import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Output only. The current state of this trust.
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
 * The trust direction decides the current domain is trusted, trusting or both.
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
 * Represents a relationship between two domains which makes it possible for users in one domain to be authenticated by a dc in another domain. Refer https://docs.microsoft.com/en-us/previous-versions/windows/it-pro/windows-server-2008-R2-and-2008/cc731335(v%3dws.10) If the trust is being changed, it will be placed into the UPDATING state, which indicates that the resource is being reconciled. At this point, Get will reflect an intermediate state.
 */
export declare class Trust extends SpeakeasyBase {
    /**
     * Output only. The time the instance was created.
     */
    createTime?: string;
    /**
     * Output only. The last heartbeat time when the trust was known to be connected.
     */
    lastKnownTrustConnectedHeartbeatTime?: string;
    /**
     * The trust authentication type which decides whether the trusted side has forest/domain wide access or selective access to approved set of resources.
     */
    selectiveAuthentication?: boolean;
    /**
     * Output only. The current state of this trust.
     */
    state?: TrustStateEnum;
    /**
     * Output only. Additional information about the current state of this trust, if available.
     */
    stateDescription?: string;
    /**
     * The target dns server ip addresses which can resolve the remote domain involved in trust.
     */
    targetDnsIpAddresses?: string[];
    /**
     * The fully qualified target domain name which will be in trust with current domain.
     */
    targetDomainName?: string;
    /**
     * The trust direction decides the current domain is trusted, trusting or both.
     */
    trustDirection?: TrustTrustDirectionEnum;
    /**
     * Input only, and will not be stored. The trust secret used for handshake with target domain.
     */
    trustHandshakeSecret?: string;
    /**
     * The type of trust represented by the trust resource.
     */
    trustType?: TrustTrustTypeEnum;
    /**
     * Output only. Last update time.
     */
    updateTime?: string;
}
