import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Represents a CIDR range which can be used to assign addresses.
 */
export declare class PublicAdvertisedPrefixPublicDelegatedPrefix extends SpeakeasyBase {
    /**
     * The IP address range of the public delegated prefix
     */
    ipRange?: string;
    /**
     * The name of the public delegated prefix
     */
    name?: string;
    /**
     * The project number of the public delegated prefix
     */
    project?: string;
    /**
     * The region of the public delegated prefix if it is regional. If absent, the prefix is global.
     */
    region?: string;
    /**
     * The status of the public delegated prefix. Possible values are: INITIALIZING: The public delegated prefix is being initialized and addresses cannot be created yet. ANNOUNCED: The public delegated prefix is active.
     */
    status?: string;
}
