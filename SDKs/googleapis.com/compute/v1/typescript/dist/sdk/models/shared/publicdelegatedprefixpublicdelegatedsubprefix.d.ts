import { SpeakeasyBase } from "../../../internal/utils";
/**
 * [Output Only] The status of the sub public delegated prefix.
 */
export declare enum PublicDelegatedPrefixPublicDelegatedSubPrefixStatusEnum {
    Active = "ACTIVE",
    Inactive = "INACTIVE"
}
/**
 * Represents a sub PublicDelegatedPrefix.
 */
export declare class PublicDelegatedPrefixPublicDelegatedSubPrefix extends SpeakeasyBase {
    /**
     * Name of the project scoping this PublicDelegatedSubPrefix.
     */
    delegateeProject?: string;
    /**
     * An optional description of this resource. Provide this property when you create the resource.
     */
    description?: string;
    /**
     * The IPv4 address range, in CIDR format, represented by this sub public delegated prefix.
     */
    ipCidrRange?: string;
    /**
     * Whether the sub prefix is delegated to create Address resources in the delegatee project.
     */
    isAddress?: boolean;
    /**
     * The name of the sub public delegated prefix.
     */
    name?: string;
    /**
     * [Output Only] The region of the sub public delegated prefix if it is regional. If absent, the sub prefix is global.
     */
    region?: string;
    /**
     * [Output Only] The status of the sub public delegated prefix.
     */
    status?: PublicDelegatedPrefixPublicDelegatedSubPrefixStatusEnum;
}
