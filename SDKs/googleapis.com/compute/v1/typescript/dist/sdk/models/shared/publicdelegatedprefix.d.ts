import { SpeakeasyBase } from "../../../internal/utils";
import { PublicDelegatedPrefixPublicDelegatedSubPrefix } from "./publicdelegatedprefixpublicdelegatedsubprefix";
/**
 * [Output Only] The status of the public delegated prefix, which can be one of following values: - `INITIALIZING` The public delegated prefix is being initialized and addresses cannot be created yet. - `READY_TO_ANNOUNCE` The public delegated prefix is a live migration prefix and is active. - `ANNOUNCED` The public delegated prefix is active. - `DELETING` The public delegated prefix is being deprovsioned.
 */
export declare enum PublicDelegatedPrefixStatusEnum {
    Announced = "ANNOUNCED",
    Deleting = "DELETING",
    Initializing = "INITIALIZING",
    ReadyToAnnounce = "READY_TO_ANNOUNCE"
}
/**
 * A PublicDelegatedPrefix resource represents an IP block within a PublicAdvertisedPrefix that is configured within a single cloud scope (global or region). IPs in the block can be allocated to resources within that scope. Public delegated prefixes may be further broken up into smaller IP blocks in the same scope as the parent block.
 */
export declare class PublicDelegatedPrefix extends SpeakeasyBase {
    /**
     * [Output Only] Creation timestamp in RFC3339 text format.
     */
    creationTimestamp?: string;
    /**
     * An optional description of this resource. Provide this property when you create the resource.
     */
    description?: string;
    /**
     * Fingerprint of this resource. A hash of the contents stored in this object. This field is used in optimistic locking. This field will be ignored when inserting a new PublicDelegatedPrefix. An up-to-date fingerprint must be provided in order to update the PublicDelegatedPrefix, otherwise the request will fail with error 412 conditionNotMet. To see the latest fingerprint, make a get() request to retrieve a PublicDelegatedPrefix.
     */
    fingerprint?: string;
    /**
     * [Output Only] The unique identifier for the resource type. The server generates this identifier.
     */
    id?: string;
    /**
     * The IPv4 address range, in CIDR format, represented by this public delegated prefix.
     */
    ipCidrRange?: string;
    /**
     * If true, the prefix will be live migrated.
     */
    isLiveMigration?: boolean;
    /**
     * [Output Only] Type of the resource. Always compute#publicDelegatedPrefix for public delegated prefixes.
     */
    kind?: string;
    /**
     * Name of the resource. Provided by the client when the resource is created. The name must be 1-63 characters long, and comply with RFC1035. Specifically, the name must be 1-63 characters long and match the regular expression `[a-z]([-a-z0-9]*[a-z0-9])?` which means the first character must be a lowercase letter, and all following characters must be a dash, lowercase letter, or digit, except the last character, which cannot be a dash.
     */
    name?: string;
    /**
     * The URL of parent prefix. Either PublicAdvertisedPrefix or PublicDelegatedPrefix.
     */
    parentPrefix?: string;
    /**
     * The list of sub public delegated prefixes that exist for this public delegated prefix.
     */
    publicDelegatedSubPrefixs?: PublicDelegatedPrefixPublicDelegatedSubPrefix[];
    /**
     * [Output Only] URL of the region where the public delegated prefix resides. This field applies only to the region resource. You must specify this field as part of the HTTP request URL. It is not settable as a field in the request body.
     */
    region?: string;
    /**
     * [Output Only] Server-defined URL for the resource.
     */
    selfLink?: string;
    /**
     * [Output Only] The status of the public delegated prefix, which can be one of following values: - `INITIALIZING` The public delegated prefix is being initialized and addresses cannot be created yet. - `READY_TO_ANNOUNCE` The public delegated prefix is a live migration prefix and is active. - `ANNOUNCED` The public delegated prefix is active. - `DELETING` The public delegated prefix is being deprovsioned.
     */
    status?: PublicDelegatedPrefixStatusEnum;
}
