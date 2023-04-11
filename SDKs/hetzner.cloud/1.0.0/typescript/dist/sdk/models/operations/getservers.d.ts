import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * Can be used multiple times.
 */
export declare enum GetServersSortEnum {
    Id = "id",
    IdAsc = "id:asc",
    IdDesc = "id:desc",
    Name = "name",
    NameAsc = "name:asc",
    NameDesc = "name:desc",
    Created = "created",
    CreatedAsc = "created:asc",
    CreatedDesc = "created:desc"
}
/**
 * Can be used multiple times. The response will only contain Server matching the status
 */
export declare enum GetServersStatusEnum {
    Initializing = "initializing",
    Starting = "starting",
    Running = "running",
    Stopping = "stopping",
    Off = "off",
    Deleting = "deleting",
    Rebuilding = "rebuilding",
    Migrating = "migrating",
    Unknown = "unknown"
}
export declare class GetServersRequest extends SpeakeasyBase {
    /**
     * Can be used to filter resources by labels. The response will only contain resources matching the label selector.
     */
    labelSelector?: string;
    /**
     * Can be used to filter resources by their name. The response will only contain the resources matching the specified name
     */
    name?: string;
    /**
     * Can be used multiple times.
     */
    sort?: GetServersSortEnum;
    /**
     * Can be used multiple times. The response will only contain Server matching the status
     */
    status?: GetServersStatusEnum;
}
export declare class GetServers200ApplicationJSONMetaPagination extends SpeakeasyBase {
    /**
     * ID of the last page available. Can be null if the current page is the last one.
     */
    lastPage: number;
    /**
     * ID of the next page. Can be null if the current page is the last one.
     */
    nextPage: number;
    /**
     * Current page number
     */
    page: number;
    /**
     * Maximum number of items shown per page in the response
     */
    perPage: number;
    /**
     * ID of the previous page. Can be null if the current page is the first one.
     */
    previousPage: number;
    /**
     * The total number of entries that exist in the database for this query. Nullable if unknown.
     */
    totalEntries: number;
}
export declare class GetServers200ApplicationJSONMeta extends SpeakeasyBase {
    pagination: GetServers200ApplicationJSONMetaPagination;
}
export declare class GetServers200ApplicationJSONServersDatacenterLocation extends SpeakeasyBase {
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
export declare class GetServers200ApplicationJSONServersDatacenterServerTypes extends SpeakeasyBase {
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
export declare class GetServers200ApplicationJSONServersDatacenter extends SpeakeasyBase {
    /**
     * Description of the Datacenter
     */
    description: string;
    /**
     * ID of the Resource
     */
    id: number;
    location: GetServers200ApplicationJSONServersDatacenterLocation;
    /**
     * Unique identifier of the Datacenter
     */
    name: string;
    /**
     * The Server types the Datacenter can handle
     */
    serverTypes: GetServers200ApplicationJSONServersDatacenterServerTypes;
}
/**
 * Information about the Server the Image was created from
 */
export declare class GetServers200ApplicationJSONServersImageCreatedFrom extends SpeakeasyBase {
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
export declare enum GetServers200ApplicationJSONServersImageOsFlavorEnum {
    Ubuntu = "ubuntu",
    Centos = "centos",
    Debian = "debian",
    Fedora = "fedora",
    Unknown = "unknown"
}
/**
 * Protection configuration for the Resource
 */
export declare class GetServers200ApplicationJSONServersImageProtection extends SpeakeasyBase {
    /**
     * If true, prevents the Resource from being deleted
     */
    delete: boolean;
}
/**
 * Whether the Image can be used or if it's still being created or unavailable
 */
export declare enum GetServers200ApplicationJSONServersImageStatusEnum {
    Available = "available",
    Creating = "creating",
    Unavailable = "unavailable"
}
/**
 * Type of the Image
 */
export declare enum GetServers200ApplicationJSONServersImageTypeEnum {
    System = "system",
    App = "app",
    Snapshot = "snapshot",
    Backup = "backup",
    Temporary = "temporary"
}
export declare class GetServers200ApplicationJSONServersImage extends SpeakeasyBase {
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
    createdFrom: GetServers200ApplicationJSONServersImageCreatedFrom;
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
    osFlavor: GetServers200ApplicationJSONServersImageOsFlavorEnum;
    /**
     * Operating system version
     */
    osVersion: string;
    /**
     * Protection configuration for the Resource
     */
    protection: GetServers200ApplicationJSONServersImageProtection;
    /**
     * Indicates that rapid deploy of the Image is available
     */
    rapidDeploy?: boolean;
    /**
     * Whether the Image can be used or if it's still being created or unavailable
     */
    status: GetServers200ApplicationJSONServersImageStatusEnum;
    /**
     * Type of the Image
     */
    type: GetServers200ApplicationJSONServersImageTypeEnum;
}
/**
 * Type of the ISO
 */
export declare enum GetServers200ApplicationJSONServersIsoTypeEnum {
    Public = "public",
    Private = "private"
}
/**
 * ISO Image that is attached to this Server. Null if no ISO is attached.
 */
export declare class GetServers200ApplicationJSONServersIso extends SpeakeasyBase {
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
    type: GetServers200ApplicationJSONServersIsoTypeEnum;
}
/**
 * Type of the Placement Group
 */
export declare enum GetServers200ApplicationJSONServersPlacementGroupNullableTypeEnum {
    Spread = "spread"
}
export declare class GetServers200ApplicationJSONServersPlacementGroupNullable extends SpeakeasyBase {
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
    type: GetServers200ApplicationJSONServersPlacementGroupNullableTypeEnum;
}
export declare class GetServers200ApplicationJSONServersPrivateNet extends SpeakeasyBase {
    aliasIps?: string[];
    ip?: string;
    macAddress?: string;
    network?: number;
}
/**
 * Protection configuration for the Server
 */
export declare class GetServers200ApplicationJSONServersProtection extends SpeakeasyBase {
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
export declare enum GetServers200ApplicationJSONServersPublicNetServerPublicNetFirewallStatusEnum {
    Applied = "applied",
    Pending = "pending"
}
export declare class GetServers200ApplicationJSONServersPublicNetServerPublicNetFirewall extends SpeakeasyBase {
    /**
     * ID of the Resource
     */
    id?: number;
    /**
     * Status of the Firewall on the Server
     */
    status?: GetServers200ApplicationJSONServersPublicNetServerPublicNetFirewallStatusEnum;
}
/**
 * IP address (v4) and its reverse DNS entry of this Server
 */
export declare class GetServers200ApplicationJSONServersPublicNetIpv4 extends SpeakeasyBase {
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
export declare class GetServers200ApplicationJSONServersPublicNetIpv6DnsPtr extends SpeakeasyBase {
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
export declare class GetServers200ApplicationJSONServersPublicNetIpv6 extends SpeakeasyBase {
    /**
     * If the IP is blocked by our anti abuse dept
     */
    blocked: boolean;
    /**
     * Reverse DNS PTR entries for the IPv6 addresses of this Server, `null` by default
     */
    dnsPtr: GetServers200ApplicationJSONServersPublicNetIpv6DnsPtr[];
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
export declare class GetServers200ApplicationJSONServersPublicNet extends SpeakeasyBase {
    /**
     * Firewalls applied to the public network interface of this Server
     */
    firewalls?: GetServers200ApplicationJSONServersPublicNetServerPublicNetFirewall[];
    /**
     * IDs of Floating IPs assigned to this Server
     */
    floatingIps: number[];
    /**
     * IP address (v4) and its reverse DNS entry of this Server
     */
    ipv4: GetServers200ApplicationJSONServersPublicNetIpv4;
    /**
     * IPv6 network assigned to this Server and its reverse DNS entry
     */
    ipv6: GetServers200ApplicationJSONServersPublicNetIpv6;
}
/**
 * Type of cpu
 */
export declare enum GetServers200ApplicationJSONServersServerTypeCpuTypeEnum {
    Shared = "shared",
    Dedicated = "dedicated"
}
/**
 * Hourly costs for a Server type in this Location
 */
export declare class GetServers200ApplicationJSONServersServerTypePricesPriceHourly extends SpeakeasyBase {
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
export declare class GetServers200ApplicationJSONServersServerTypePricesPriceMonthly extends SpeakeasyBase {
    /**
     * Price with VAT added
     */
    gross: string;
    /**
     * Price without VAT
     */
    net: string;
}
export declare class GetServers200ApplicationJSONServersServerTypePrices extends SpeakeasyBase {
    /**
     * Name of the Location the price is for
     */
    location: string;
    /**
     * Hourly costs for a Server type in this Location
     */
    priceHourly: GetServers200ApplicationJSONServersServerTypePricesPriceHourly;
    /**
     * Monthly costs for a Server type in this Location
     */
    priceMonthly: GetServers200ApplicationJSONServersServerTypePricesPriceMonthly;
}
/**
 * Type of Server boot drive. Local has higher speed. Network has better availability.
 */
export declare enum GetServers200ApplicationJSONServersServerTypeStorageTypeEnum {
    Local = "local",
    Network = "network"
}
/**
 * Type of Server - determines how much ram, disk and cpu a Server has
 */
export declare class GetServers200ApplicationJSONServersServerType extends SpeakeasyBase {
    /**
     * Number of cpu cores a Server of this type will have
     */
    cores: number;
    /**
     * Type of cpu
     */
    cpuType: GetServers200ApplicationJSONServersServerTypeCpuTypeEnum;
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
    prices: GetServers200ApplicationJSONServersServerTypePrices[];
    /**
     * Type of Server boot drive. Local has higher speed. Network has better availability.
     */
    storageType: GetServers200ApplicationJSONServersServerTypeStorageTypeEnum;
}
/**
 * Status of the Server
 */
export declare enum GetServers200ApplicationJSONServersStatusEnum {
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
export declare class GetServers200ApplicationJSONServers extends SpeakeasyBase {
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
    datacenter: GetServers200ApplicationJSONServersDatacenter;
    /**
     * ID of the Resource
     */
    id: number;
    image: GetServers200ApplicationJSONServersImage;
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
    iso: GetServers200ApplicationJSONServersIso;
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
    placementGroup?: GetServers200ApplicationJSONServersPlacementGroupNullable;
    /**
     * Size of the primary Disk
     */
    primaryDiskSize: number;
    /**
     * Private networks information
     */
    privateNet: GetServers200ApplicationJSONServersPrivateNet[];
    /**
     * Protection configuration for the Server
     */
    protection: GetServers200ApplicationJSONServersProtection;
    /**
     * Public network information. The Server's IPv4 address can be found in `public_net->ipv4->ip`
     */
    publicNet: GetServers200ApplicationJSONServersPublicNet;
    /**
     * True if rescue mode is enabled. Server will then boot into rescue system on next reboot
     */
    rescueEnabled: boolean;
    /**
     * Type of Server - determines how much ram, disk and cpu a Server has
     */
    serverType: GetServers200ApplicationJSONServersServerType;
    /**
     * Status of the Server
     */
    status: GetServers200ApplicationJSONServersStatusEnum;
    /**
     * IDs of Volumes assigned to this Server
     */
    volumes?: number[];
}
/**
 * A paged array of servers
 */
export declare class GetServers200ApplicationJSON extends SpeakeasyBase {
    meta?: GetServers200ApplicationJSONMeta;
    servers: GetServers200ApplicationJSONServers[];
}
export declare class GetServersResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * A paged array of servers
     */
    getServers200ApplicationJSONObject?: GetServers200ApplicationJSON;
}
