import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Contains the data that describes an Identity Aware Proxy owned client.
 */
export declare class IdentityAwareProxyClient extends SpeakeasyBase {
    /**
     * Human-friendly name given to the OAuth client.
     */
    displayName?: string;
    /**
     * Output only. Unique identifier of the OAuth client.
     */
    name?: string;
    /**
     * Output only. Client secret of the OAuth client.
     */
    secret?: string;
}
/**
 * Contains the data that describes an Identity Aware Proxy owned client.
 */
export declare class IdentityAwareProxyClientInput extends SpeakeasyBase {
    /**
     * Human-friendly name given to the OAuth client.
     */
    displayName?: string;
}
