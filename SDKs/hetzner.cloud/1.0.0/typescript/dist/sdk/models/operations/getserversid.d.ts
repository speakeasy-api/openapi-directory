import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetServersIdRequest extends SpeakeasyBase {
    /**
     * ID of the Server
     */
    id: number;
}
export declare class GetServersId200ApplicationJSONServerDatacenterLocation extends SpeakeasyBase {
    /**
     * City the Location is closest to
     */
    city: string;
    /**
     * ISO 3166-1 alpha-2 code of the country the Location resides in
     */
    country: string;
    /**
     * Description of the Location
     */
    description: string;
    /**
     * ID of the Location
     */
    id: number;
    /**
     * Latitude of the city closest to the Location
     */
    latitude: number;
    /**
     * Longitude of the city closest to the Location
     */
    longitude: number;
    /**
     * Unique identifier of the Location
     */
    name: string;
    /**
     * Name of network zone this Location resides in
     */
    networkZone: string;
}
/**
 * The Server types the Datacenter can handle
 */
export declare class GetServersId200ApplicationJSONServerDatacenterServerTypes extends SpeakeasyBase {
    /**
     * IDs of Server types that are supported and for which the Datacenter has enough resources left
     */
    available: number[];
    /**
     * IDs of Server types that are supported and for which the Datacenter has enough resources left
     */
    availableForMigration: number[];
    /**
     * IDs of Server types that are supported in the Datacenter
     */
    supported: number[];
}
/**
 * Datacenter this Resource is located at
 */
export declare class GetServersId200ApplicationJSONServerDatacenter extends SpeakeasyBase {
    /**
     * Description of the Datacenter
     */
    description: string;
    /**
     * ID of the Resource
     */
    id: number;
    location: GetServersId200ApplicationJSONServerDatacenterLocation;
    /**
     * Unique identifier of the Datacenter
     */
    name: string;
    /**
     * The Server types the Datacenter can handle
     */
    serverTypes: GetServersId200ApplicationJSONServerDatacenterServerTypes;
}
/**
 * Information about the Server the Image was created from
 */
export declare class GetServersId200ApplicationJSONServerImageCreatedFrom extends SpeakeasyBase {
    /**
     * ID of the Server the Image was created from
     */
    id: number;
    /**
     * Server name at the time the Image was created
     */
    name: string;
}
/**
 * Flavor of operating system contained in the Image
 */
export declare enum GetServersId200ApplicationJSONServerImageOsFlavorEnum {
    Ubuntu = "ubuntu",
    Centos = "centos",
    Debian = "debian",
    Fedora = "fedora",
    Unknown = "unknown"
}
/**
 * Protection configuration for the Resource
 */
export declare class GetServersId200ApplicationJSONServerImageProtection extends SpeakeasyBase {
    /**
     * If true, prevents the Resource from being deleted
     */
    delete: boolean;
}
/**
 * Whether the Image can be used or if it's still being created or unavailable
 */
export declare enum GetServersId200ApplicationJSONServerImageStatusEnum {
    Available = "available",
    Creating = "creating",
    Unavailable = "unavailable"
}
/**
 * Type of the Image
 */
export declare enum GetServersId200ApplicationJSONServerImageTypeEnum {
    System = "system",
    App = "app",
    Snapshot = "snapshot",
    Backup = "backup",
    Temporary = "temporary"
}
export declare class GetServersId200ApplicationJSONServerImage extends SpeakeasyBase {
    /**
     * ID of Server the Image is bound to. Only set for Images of type `backup`.
     */
    boundTo: number;
    /**
     * Point in time when the Resource was created (in ISO-8601 format)
     */
    created: string;
    /**
     * Information about the Server the Image was created from
     */
    createdFrom: GetServersId200ApplicationJSONServerImageCreatedFrom;
    /**
     * Point in time where the Image was deleted (in ISO-8601 format)
     */
    deleted: string;
    /**
     * Point in time when the Image is considered to be deprecated (in ISO-8601 format)
     */
    deprecated: string;
    /**
     * Description of the Image
     */
    description: string;
    /**
     * Size of the disk contained in the Image in GB
     */
    diskSize: number;
    /**
     * ID of the Resource
     */
    id: number;
    /**
     * Size of the Image file in our storage in GB. For snapshot Images this is the value relevant for calculating costs for the Image.
     */
    imageSize: number;
    /**
     * User-defined labels (key-value pairs)
     */
    labels: Record<string, string>;
    /**
     * Unique identifier of the Image. This value is only set for system Images.
     */
    name: string;
    /**
     * Flavor of operating system contained in the Image
     */
    osFlavor: GetServersId200ApplicationJSONServerImageOsFlavorEnum;
    /**
     * Operating system version
     */
    osVersion: string;
    /**
     * Protection configuration for the Resource
     */
    protection: GetServersId200ApplicationJSONServerImageProtection;
    /**
     * Indicates that rapid deploy of the Image is available
     */
    rapidDeploy?: boolean;
    /**
     * Whether the Image can be used or if it's still being created or unavailable
     */
    status: GetServersId200ApplicationJSONServerImageStatusEnum;
    /**
     * Type of the Image
     */
    type: GetServersId200ApplicationJSONServerImageTypeEnum;
}
/**
 * Type of the ISO
 */
export declare enum GetServersId200ApplicationJSONServerIsoTypeEnum {
    Public = "public",
    Private = "private"
}
/**
 * ISO Image that is attached to this Server. Null if no ISO is attached.
 */
export declare class GetServersId200ApplicationJSONServerIso extends SpeakeasyBase {
    /**
     * ISO 8601 timestamp of deprecation, null if ISO is still available. After the deprecation time it will no longer be possible to attach the ISO to Servers.
     */
    deprecated: string;
    /**
     * Description of the ISO
     */
    description: string;
    /**
     * ID of the Resource
     */
    id: number;
    /**
     * Unique identifier of the ISO. Only set for public ISOs
     */
    name: string;
    /**
     * Type of the ISO
     */
    type: GetServersId200ApplicationJSONServerIsoTypeEnum;
}
/**
 * Type of the Placement Group
 */
export declare enum GetServersId200ApplicationJSONServerPlacementGroupNullableTypeEnum {
    Spread = "spread"
}
export declare class GetServersId200ApplicationJSONServerPlacementGroupNullable extends SpeakeasyBase {
    /**
     * Point in time when the Resource was created (in ISO-8601 format)
     */
    created: string;
    /**
     * ID of the Resource
     */
    id: number;
    /**
     * User-defined labels (key-value pairs)
     */
    labels: Record<string, string>;
    /**
     * Name of the Resource. Must be unique per Project.
     */
    name: string;
    /**
     * Array of IDs of Servers that are part of this Placement Group
     */
    servers: number[];
    /**
     * Type of the Placement Group
     */
    type: GetServersId200ApplicationJSONServerPlacementGroupNullableTypeEnum;
}
export declare class GetServersId200ApplicationJSONServerPrivateNet extends SpeakeasyBase {
    aliasIps?: string[];
    ip?: string;
    macAddress?: string;
    network?: number;
}
/**
 * Protection configuration for the Server
 */
export declare class GetServersId200ApplicationJSONServerProtection extends SpeakeasyBase {
    /**
     * If true, prevents the Server from being deleted
     */
    delete: boolean;
    /**
     * If true, prevents the Server from being rebuilt
     */
    rebuild: boolean;
}
/**
 * Status of the Firewall on the Server
 */
export declare enum GetServersId200ApplicationJSONServerPublicNetServerPublicNetFirewallStatusEnum {
    Applied = "applied",
    Pending = "pending"
}
export declare class GetServersId200ApplicationJSONServerPublicNetServerPublicNetFirewall extends SpeakeasyBase {
    /**
     * ID of the Resource
     */
    id?: number;
    /**
     * Status of the Firewall on the Server
     */
    status?: GetServersId200ApplicationJSONServerPublicNetServerPublicNetFirewallStatusEnum;
}
/**
 * IP address (v4) and its reverse DNS entry of this Server
 */
export declare class GetServersId200ApplicationJSONServerPublicNetIpv4 extends SpeakeasyBase {
    /**
     * If the IP is blocked by our anti abuse dept
     */
    blocked: boolean;
    /**
     * Reverse DNS PTR entry for the IPv4 addresses of this Server
     */
    dnsPtr: string;
    /**
     * ID of the Resource
     */
    id?: number;
    /**
     * IP address (v4) of this Server
     */
    ip: string;
}
export declare class GetServersId200ApplicationJSONServerPublicNetIpv6DnsPtr extends SpeakeasyBase {
    /**
     * DNS pointer for the specific IP address
     */
    dnsPtr: string;
    /**
     * Single IPv6 address of this Server for which the reverse DNS entry has been set up
     */
    ip: string;
}
/**
 * IPv6 network assigned to this Server and its reverse DNS entry
 */
export declare class GetServersId200ApplicationJSONServerPublicNetIpv6 extends SpeakeasyBase {
    /**
     * If the IP is blocked by our anti abuse dept
     */
    blocked: boolean;
    /**
     * Reverse DNS PTR entries for the IPv6 addresses of this Server, `null` by default
     */
    dnsPtr: GetServersId200ApplicationJSONServerPublicNetIpv6DnsPtr[];
    /**
     * ID of the Resource
     */
    id?: number;
    /**
     * IP address (v6) of this Server
     */
    ip: string;
}
/**
 * Public network information. The Server's IPv4 address can be found in `public_net->ipv4->ip`
 */
export declare class GetServersId200ApplicationJSONServerPublicNet extends SpeakeasyBase {
    /**
     * Firewalls applied to the public network interface of this Server
     */
    firewalls?: GetServersId200ApplicationJSONServerPublicNetServerPublicNetFirewall[];
    /**
     * IDs of Floating IPs assigned to this Server
     */
    floatingIps: number[];
    /**
     * IP address (v4) and its reverse DNS entry of this Server
     */
    ipv4: GetServersId200ApplicationJSONServerPublicNetIpv4;
    /**
     * IPv6 network assigned to this Server and its reverse DNS entry
     */
    ipv6: GetServersId200ApplicationJSONServerPublicNetIpv6;
}
/**
 * Type of cpu
 */
export declare enum GetServersId200ApplicationJSONServerServerTypeCpuTypeEnum {
    Shared = "shared",
    Dedicated = "dedicated"
}
/**
 * Hourly costs for a Server type in this Location
 */
export declare class GetServersId200ApplicationJSONServerServerTypePricesPriceHourly extends SpeakeasyBase {
    /**
     * Price with VAT added
     */
    gross: string;
    /**
     * Price without VAT
     */
    net: string;
}
/**
 * Monthly costs for a Server type in this Location
 */
export declare class GetServersId200ApplicationJSONServerServerTypePricesPriceMonthly extends SpeakeasyBase {
    /**
     * Price with VAT added
     */
    gross: string;
    /**
     * Price without VAT
     */
    net: string;
}
export declare class GetServersId200ApplicationJSONServerServerTypePrices extends SpeakeasyBase {
    /**
     * Name of the Location the price is for
     */
    location: string;
    /**
     * Hourly costs for a Server type in this Location
     */
    priceHourly: GetServersId200ApplicationJSONServerServerTypePricesPriceHourly;
    /**
     * Monthly costs for a Server type in this Location
     */
    priceMonthly: GetServersId200ApplicationJSONServerServerTypePricesPriceMonthly;
}
/**
 * Type of Server boot drive. Local has higher speed. Network has better availability.
 */
export declare enum GetServersId200ApplicationJSONServerServerTypeStorageTypeEnum {
    Local = "local",
    Network = "network"
}
/**
 * Type of Server - determines how much ram, disk and cpu a Server has
 */
export declare class GetServersId200ApplicationJSONServerServerType extends SpeakeasyBase {
    /**
     * Number of cpu cores a Server of this type will have
     */
    cores: number;
    /**
     * Type of cpu
     */
    cpuType: GetServersId200ApplicationJSONServerServerTypeCpuTypeEnum;
    /**
     * True if Server type is deprecated
     */
    deprecated: boolean;
    /**
     * Description of the Server type
     */
    description: string;
    /**
     * Disk size a Server of this type will have in GB
     */
    disk: number;
    /**
     * ID of the Server type
     */
    id: number;
    /**
     * Memory a Server of this type will have in GB
     */
    memory: number;
    /**
     * Unique identifier of the Server type
     */
    name: string;
    /**
     * Prices in different Locations
     */
    prices: GetServersId200ApplicationJSONServerServerTypePrices[];
    /**
     * Type of Server boot drive. Local has higher speed. Network has better availability.
     */
    storageType: GetServersId200ApplicationJSONServerServerTypeStorageTypeEnum;
}
/**
 * Status of the Server
 */
export declare enum GetServersId200ApplicationJSONServerStatusEnum {
    Running = "running",
    Initializing = "initializing",
    Starting = "starting",
    Stopping = "stopping",
    Off = "off",
    Deleting = "deleting",
    Migrating = "migrating",
    Rebuilding = "rebuilding",
    Unknown = "unknown"
}
export declare class GetServersId200ApplicationJSONServer extends SpeakeasyBase {
    /**
     * Time window (UTC) in which the backup will run, or null if the backups are not enabled
     */
    backupWindow: string;
    /**
     * Point in time when the Resource was created (in ISO-8601 format)
     */
    created: string;
    /**
     * Datacenter this Resource is located at
     */
    datacenter: GetServersId200ApplicationJSONServerDatacenter;
    /**
     * ID of the Resource
     */
    id: number;
    image: GetServersId200ApplicationJSONServerImage;
    /**
     * Free Traffic for the current billing period in bytes
     */
    includedTraffic: number;
    /**
     * Inbound Traffic for the current billing period in bytes
     */
    ingoingTraffic: number;
    /**
     * ISO Image that is attached to this Server. Null if no ISO is attached.
     */
    iso: GetServersId200ApplicationJSONServerIso;
    /**
     * User-defined labels (key-value pairs)
     */
    labels: Record<string, string>;
    loadBalancers?: number[];
    /**
     * True if Server has been locked and is not available to user
     */
    locked: boolean;
    /**
     * Name of the Server (must be unique per Project and a valid hostname as per RFC 1123)
     */
    name: string;
    /**
     * Outbound Traffic for the current billing period in bytes
     */
    outgoingTraffic: number;
    placementGroup?: GetServersId200ApplicationJSONServerPlacementGroupNullable;
    /**
     * Size of the primary Disk
     */
    primaryDiskSize: number;
    /**
     * Private networks information
     */
    privateNet: GetServersId200ApplicationJSONServerPrivateNet[];
    /**
     * Protection configuration for the Server
     */
    protection: GetServersId200ApplicationJSONServerProtection;
    /**
     * Public network information. The Server's IPv4 address can be found in `public_net->ipv4->ip`
     */
    publicNet: GetServersId200ApplicationJSONServerPublicNet;
    /**
     * True if rescue mode is enabled. Server will then boot into rescue system on next reboot
     */
    rescueEnabled: boolean;
    /**
     * Type of Server - determines how much ram, disk and cpu a Server has
     */
    serverType: GetServersId200ApplicationJSONServerServerType;
    /**
     * Status of the Server
     */
    status: GetServersId200ApplicationJSONServerStatusEnum;
    /**
     * IDs of Volumes assigned to this Server
     */
    volumes?: number[];
}
/**
 * The `server` key in the reply contains a Server object with this structure
 */
export declare class GetServersId200ApplicationJSON extends SpeakeasyBase {
    server?: GetServersId200ApplicationJSONServer;
}
export declare class GetServersIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * The `server` key in the reply contains a Server object with this structure
     */
    getServersId200ApplicationJSONObject?: GetServersId200ApplicationJSON;
}
