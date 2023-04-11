import { SpeakeasyBase } from "../../../internal/utils";
import { PublicAdvertisedPrefixPublicDelegatedPrefix } from "./publicadvertisedprefixpublicdelegatedprefix";
/**
 * Specifies how child public delegated prefix will be scoped. It could be one of following values: - `REGIONAL`: The public delegated prefix is regional only. The provisioning will take a few minutes. - `GLOBAL`: The public delegated prefix is global only. The provisioning will take ~4 weeks. - `GLOBAL_AND_REGIONAL` [output only]: The public delegated prefixes is BYOIP V1 legacy prefix. This is output only value and no longer supported in BYOIP V2.
 */
export declare enum PublicAdvertisedPrefixPdpScopeEnum {
    Global = "GLOBAL",
    GlobalAndRegional = "GLOBAL_AND_REGIONAL",
    Regional = "REGIONAL"
}
/**
 * The status of the public advertised prefix. Possible values include: - `INITIAL`: RPKI validation is complete. - `PTR_CONFIGURED`: User has configured the PTR. - `VALIDATED`: Reverse DNS lookup is successful. - `REVERSE_DNS_LOOKUP_FAILED`: Reverse DNS lookup failed. - `PREFIX_CONFIGURATION_IN_PROGRESS`: The prefix is being configured. - `PREFIX_CONFIGURATION_COMPLETE`: The prefix is fully configured. - `PREFIX_REMOVAL_IN_PROGRESS`: The prefix is being removed.
 */
export declare enum PublicAdvertisedPrefixStatusEnum {
    AnnouncedToInternet = "ANNOUNCED_TO_INTERNET",
    Initial = "INITIAL",
    PrefixConfigurationComplete = "PREFIX_CONFIGURATION_COMPLETE",
    PrefixConfigurationInProgress = "PREFIX_CONFIGURATION_IN_PROGRESS",
    PrefixRemovalInProgress = "PREFIX_REMOVAL_IN_PROGRESS",
    PtrConfigured = "PTR_CONFIGURED",
    ReadyToAnnounce = "READY_TO_ANNOUNCE",
    ReverseDnsLookupFailed = "REVERSE_DNS_LOOKUP_FAILED",
    Validated = "VALIDATED"
}
/**
 * A public advertised prefix represents an aggregated IP prefix or netblock which customers bring to cloud. The IP prefix is a single unit of route advertisement and is announced globally to the internet.
 */
export declare class PublicAdvertisedPrefix extends SpeakeasyBase {
    /**
     * [Output Only] Creation timestamp in RFC3339 text format.
     */
    creationTimestamp?: string;
    /**
     * An optional description of this resource. Provide this property when you create the resource.
     */
    description?: string;
    /**
     * The IPv4 address to be used for reverse DNS verification.
     */
    dnsVerificationIp?: string;
    /**
     * Fingerprint of this resource. A hash of the contents stored in this object. This field is used in optimistic locking. This field will be ignored when inserting a new PublicAdvertisedPrefix. An up-to-date fingerprint must be provided in order to update the PublicAdvertisedPrefix, otherwise the request will fail with error 412 conditionNotMet. To see the latest fingerprint, make a get() request to retrieve a PublicAdvertisedPrefix.
     */
    fingerprint?: string;
    /**
     * [Output Only] The unique identifier for the resource type. The server generates this identifier.
     */
    id?: string;
    /**
     * The IPv4 address range, in CIDR format, represented by this public advertised prefix.
     */
    ipCidrRange?: string;
    /**
     * [Output Only] Type of the resource. Always compute#publicAdvertisedPrefix for public advertised prefixes.
     */
    kind?: string;
    /**
     * Name of the resource. Provided by the client when the resource is created. The name must be 1-63 characters long, and comply with RFC1035. Specifically, the name must be 1-63 characters long and match the regular expression `[a-z]([-a-z0-9]*[a-z0-9])?` which means the first character must be a lowercase letter, and all following characters must be a dash, lowercase letter, or digit, except the last character, which cannot be a dash.
     */
    name?: string;
    /**
     * Specifies how child public delegated prefix will be scoped. It could be one of following values: - `REGIONAL`: The public delegated prefix is regional only. The provisioning will take a few minutes. - `GLOBAL`: The public delegated prefix is global only. The provisioning will take ~4 weeks. - `GLOBAL_AND_REGIONAL` [output only]: The public delegated prefixes is BYOIP V1 legacy prefix. This is output only value and no longer supported in BYOIP V2.
     */
    pdpScope?: PublicAdvertisedPrefixPdpScopeEnum;
    /**
     * [Output Only] The list of public delegated prefixes that exist for this public advertised prefix.
     */
    publicDelegatedPrefixs?: PublicAdvertisedPrefixPublicDelegatedPrefix[];
    /**
     * [Output Only] Server-defined URL for the resource.
     */
    selfLink?: string;
    /**
     * [Output Only] Server-defined URL with id for the resource.
     */
    selfLinkWithId?: string;
    /**
     * [Output Only] The shared secret to be used for reverse DNS verification.
     */
    sharedSecret?: string;
    /**
     * The status of the public advertised prefix. Possible values include: - `INITIAL`: RPKI validation is complete. - `PTR_CONFIGURED`: User has configured the PTR. - `VALIDATED`: Reverse DNS lookup is successful. - `REVERSE_DNS_LOOKUP_FAILED`: Reverse DNS lookup failed. - `PREFIX_CONFIGURATION_IN_PROGRESS`: The prefix is being configured. - `PREFIX_CONFIGURATION_COMPLETE`: The prefix is fully configured. - `PREFIX_REMOVAL_IN_PROGRESS`: The prefix is being removed.
     */
    status?: PublicAdvertisedPrefixStatusEnum;
}
