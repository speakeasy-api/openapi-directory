import { SpeakeasyBase } from "../../../internal/utils";
import { ManagedZoneCloudLoggingConfig } from "./managedzonecloudloggingconfig";
import { ManagedZoneDnsSecConfig } from "./managedzonednssecconfig";
import { ManagedZoneForwardingConfig } from "./managedzoneforwardingconfig";
import { ManagedZonePeeringConfig } from "./managedzonepeeringconfig";
import { ManagedZonePrivateVisibilityConfig } from "./managedzoneprivatevisibilityconfig";
import { ManagedZoneReverseLookupConfig } from "./managedzonereverselookupconfig";
import { ManagedZoneServiceDirectoryConfig } from "./managedzoneservicedirectoryconfig";
/**
 * The zone's visibility: public zones are exposed to the Internet, while private zones are visible only to Virtual Private Cloud resources.
 */
export declare enum ManagedZoneVisibilityEnum {
    Public = "PUBLIC",
    Private = "PRIVATE"
}
/**
 * A zone is a subtree of the DNS namespace under one administrative responsibility. A ManagedZone is a resource that represents a DNS zone hosted by the Cloud DNS service.
 */
export declare class ManagedZone extends SpeakeasyBase {
    /**
     * Cloud Logging configurations for publicly visible zones.
     */
    cloudLoggingConfig?: ManagedZoneCloudLoggingConfig;
    /**
     * The time that this resource was created on the server. This is in RFC3339 text format. Output only.
     */
    creationTime?: string;
    /**
     * A mutable string of at most 1024 characters associated with this resource for the user's convenience. Has no effect on the managed zone's function.
     */
    description?: string;
    /**
     * The DNS name of this managed zone, for instance "example.com.".
     */
    dnsName?: string;
    dnssecConfig?: ManagedZoneDnsSecConfig;
    forwardingConfig?: ManagedZoneForwardingConfig;
    /**
     * Unique identifier for the resource; defined by the server (output only)
     */
    id?: string;
    kind?: string;
    /**
     * User labels.
     */
    labels?: Record<string, string>;
    /**
     * User assigned name for this resource. Must be unique within the project. The name must be 1-63 characters long, must begin with a letter, end with a letter or digit, and only contain lowercase letters, digits or dashes.
     */
    name?: string;
    /**
     * Optionally specifies the NameServerSet for this ManagedZone. A NameServerSet is a set of DNS name servers that all host the same ManagedZones. Most users leave this field unset. If you need to use this field, contact your account team.
     */
    nameServerSet?: string;
    /**
     * Delegate your managed_zone to these virtual name servers; defined by the server (output only)
     */
    nameServers?: string[];
    peeringConfig?: ManagedZonePeeringConfig;
    privateVisibilityConfig?: ManagedZonePrivateVisibilityConfig;
    reverseLookupConfig?: ManagedZoneReverseLookupConfig;
    /**
     * Contains information about Service Directory-backed zones.
     */
    serviceDirectoryConfig?: ManagedZoneServiceDirectoryConfig;
    /**
     * The zone's visibility: public zones are exposed to the Internet, while private zones are visible only to Virtual Private Cloud resources.
     */
    visibility?: ManagedZoneVisibilityEnum;
}
