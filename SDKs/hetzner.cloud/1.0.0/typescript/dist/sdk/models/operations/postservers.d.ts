import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PostServersCreateServerRequestFirewalls extends SpeakeasyBase {
    /**
     * ID of the Firewall
     */
    firewall?: number;
}
/**
 * Public Network options
 */
export declare class PostServersCreateServerRequestPublicNet extends SpeakeasyBase {
    /**
     * Attach an IPv4 on the public NIC. If false, no IPv4 address will be attached. Defaults to true.
     */
    enableIpv4?: boolean;
    /**
     * Attach an IPv6 on the public NIC. If false, no IPv6 address will be attached. Defaults to true.
     */
    enableIpv6?: boolean;
    /**
     * ID of the ipv4 Primary IP to use. If omitted and enable_ipv4 is true, a new ipv4 Primary IP will automatically be created.
     */
    ipv4?: number;
    /**
     * ID of the ipv6 Primary IP to use. If omitted and enable_ipv6 is true, a new ipv6 Primary IP will automatically be created.
     */
    ipv6?: number;
}
/**
 * Please note that Server names must be unique per Project and valid hostnames as per RFC 1123 (i.e. may only contain letters, digits, periods, and dashes).
 *
 * @remarks
 *
 * For `server_type` you can either use the ID as listed in `/server_types` or its name.
 *
 * For `image` you can either use the ID as listed in `/images` or its name.
 *
 * If you want to create the Server in a Location, you must set `location` to the ID or name as listed in `/locations`. This is the recommended way. You can be even more specific by setting `datacenter` to the ID or name as listed in `/datacenters`. However we only recommend this if you want to assign a specific Primary IP to the Server which is located in the specified Datacenter.
 *
 * Some properties like `start_after_create` or `automount` will trigger Actions after the Server is created. Those Actions are listed in the `next_actions` field in the response.
 *
 * For accessing your Server we strongly recommend to use SSH keys by passing the respective key IDs in `ssh_keys`. If you do not specify any `ssh_keys` we will generate a root password for you and return it in the response.
 *
 * Please note that provided user-data is stored in our systems. While we take measures to protect it we highly recommend that you don’t use it to store passwords or other sensitive information.
 *
 * #### Call specific error codes
 *
 * | Code                             | Description                                                |
 * |----------------------------------|------------------------------------------------------------|
 * | `placement_error`                | An error during the placement occurred                     |
 * | `primary_ip_assigned`            | The specified Primary IP is already assigned to a server   |
 * | `primary_ip_datacenter_mismatch` | The specified Primary IP is in a different datacenter      |
 * | `primary_ip_version_mismatch`    | The specified Primary IP has the wrong IP Version          |
 *
 */
export declare class PostServersCreateServerRequest extends SpeakeasyBase {
    /**
     * Auto-mount Volumes after attach
     */
    automount?: boolean;
    /**
     * ID or name of Datacenter to create Server in (must not be used together with location)
     */
    datacenter?: string;
    /**
     * Firewalls which should be applied on the Server's public network interface at creation time
     */
    firewalls?: PostServersCreateServerRequestFirewalls[];
    /**
     * ID or name of the Image the Server is created from
     */
    image: string;
    /**
     * User-defined labels (key-value pairs)
     */
    labels?: Record<string, any>;
    /**
     * ID or name of Location to create Server in (must not be used together with datacenter)
     */
    location?: string;
    /**
     * Name of the Server to create (must be unique per Project and a valid hostname as per RFC 1123)
     */
    name: string;
    /**
     * Network IDs which should be attached to the Server private network interface at the creation time
     */
    networks?: number[];
    /**
     * ID of the Placement Group the server should be in
     */
    placementGroup?: number;
    /**
     * Public Network options
     */
    publicNet?: PostServersCreateServerRequestPublicNet;
    /**
     * ID or name of the Server type this Server should be created with
     */
    serverType: string;
    /**
     * SSH key IDs (`integer`) or names (`string`) which should be injected into the Server at creation time
     */
    sshKeys?: string[];
    /**
     * Start Server right after creation. Defaults to true.
     */
    startAfterCreate?: boolean;
    /**
     * Cloud-Init user data to use during Server creation. This field is limited to 32KiB.
     */
    userData?: string;
    /**
     * Volume IDs which should be attached to the Server at the creation time. Volumes must be in the same Location.
     */
    volumes?: number[];
}
/**
 * Error message for the Action if error occurred, otherwise null
 */
export declare class PostServersCreateServerResponseActionError extends SpeakeasyBase {
    /**
     * Fixed machine readable code
     */
    code: string;
    /**
     * Humanized error message
     */
    message: string;
}
export declare class PostServersCreateServerResponseActionResources extends SpeakeasyBase {
    /**
     * ID of the Resource
     */
    id: number;
    /**
     * Type of resource referenced
     */
    type: string;
}
/**
 * Status of the Action
 */
export declare enum PostServersCreateServerResponseActionStatusEnum {
    Success = "success",
    Running = "running",
    Error = "error"
}
export declare class PostServersCreateServerResponseAction extends SpeakeasyBase {
    /**
     * Command executed in the Action
     */
    command: string;
    /**
     * Error message for the Action if error occurred, otherwise null
     */
    error: PostServersCreateServerResponseActionError;
    /**
     * Point in time when the Action was finished (in ISO-8601 format). Only set if the Action is finished otherwise null.
     */
    finished: string;
    /**
     * ID of the Resource
     */
    id: number;
    /**
     * Progress of Action in percent
     */
    progress: number;
    /**
     * Resources the Action relates to
     */
    resources: PostServersCreateServerResponseActionResources[];
    /**
     * Point in time when the Action was started (in ISO-8601 format)
     */
    started: string;
    /**
     * Status of the Action
     */
    status: PostServersCreateServerResponseActionStatusEnum;
}
export declare class PostServersCreateServerResponseServerDatacenterLocation extends SpeakeasyBase {
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
export declare class PostServersCreateServerResponseServerDatacenterServerTypes extends SpeakeasyBase {
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
export declare class PostServersCreateServerResponseServerDatacenter extends SpeakeasyBase {
    /**
     * Description of the Datacenter
     */
    description: string;
    /**
     * ID of the Resource
     */
    id: number;
    location: PostServersCreateServerResponseServerDatacenterLocation;
    /**
     * Unique identifier of the Datacenter
     */
    name: string;
    /**
     * The Server types the Datacenter can handle
     */
    serverTypes: PostServersCreateServerResponseServerDatacenterServerTypes;
}
/**
 * Information about the Server the Image was created from
 */
export declare class PostServersCreateServerResponseServerImageCreatedFrom extends SpeakeasyBase {
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
export declare enum PostServersCreateServerResponseServerImageOsFlavorEnum {
    Ubuntu = "ubuntu",
    Centos = "centos",
    Debian = "debian",
    Fedora = "fedora",
    Unknown = "unknown"
}
/**
 * Protection configuration for the Resource
 */
export declare class PostServersCreateServerResponseServerImageProtection extends SpeakeasyBase {
    /**
     * If true, prevents the Resource from being deleted
     */
    delete: boolean;
}
/**
 * Whether the Image can be used or if it's still being created or unavailable
 */
export declare enum PostServersCreateServerResponseServerImageStatusEnum {
    Available = "available",
    Creating = "creating",
    Unavailable = "unavailable"
}
/**
 * Type of the Image
 */
export declare enum PostServersCreateServerResponseServerImageTypeEnum {
    System = "system",
    App = "app",
    Snapshot = "snapshot",
    Backup = "backup",
    Temporary = "temporary"
}
export declare class PostServersCreateServerResponseServerImage extends SpeakeasyBase {
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
    createdFrom: PostServersCreateServerResponseServerImageCreatedFrom;
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
    osFlavor: PostServersCreateServerResponseServerImageOsFlavorEnum;
    /**
     * Operating system version
     */
    osVersion: string;
    /**
     * Protection configuration for the Resource
     */
    protection: PostServersCreateServerResponseServerImageProtection;
    /**
     * Indicates that rapid deploy of the Image is available
     */
    rapidDeploy?: boolean;
    /**
     * Whether the Image can be used or if it's still being created or unavailable
     */
    status: PostServersCreateServerResponseServerImageStatusEnum;
    /**
     * Type of the Image
     */
    type: PostServersCreateServerResponseServerImageTypeEnum;
}
/**
 * Type of the ISO
 */
export declare enum PostServersCreateServerResponseServerIsoTypeEnum {
    Public = "public",
    Private = "private"
}
/**
 * ISO Image that is attached to this Server. Null if no ISO is attached.
 */
export declare class PostServersCreateServerResponseServerIso extends SpeakeasyBase {
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
    type: PostServersCreateServerResponseServerIsoTypeEnum;
}
/**
 * Type of the Placement Group
 */
export declare enum PostServersCreateServerResponseServerPlacementGroupNullableTypeEnum {
    Spread = "spread"
}
export declare class PostServersCreateServerResponseServerPlacementGroupNullable extends SpeakeasyBase {
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
    type: PostServersCreateServerResponseServerPlacementGroupNullableTypeEnum;
}
export declare class PostServersCreateServerResponseServerPrivateNet extends SpeakeasyBase {
    aliasIps?: string[];
    ip?: string;
    macAddress?: string;
    network?: number;
}
/**
 * Protection configuration for the Server
 */
export declare class PostServersCreateServerResponseServerProtection extends SpeakeasyBase {
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
export declare enum PostServersCreateServerResponseServerPublicNetServerPublicNetFirewallStatusEnum {
    Applied = "applied",
    Pending = "pending"
}
export declare class PostServersCreateServerResponseServerPublicNetServerPublicNetFirewall extends SpeakeasyBase {
    /**
     * ID of the Resource
     */
    id?: number;
    /**
     * Status of the Firewall on the Server
     */
    status?: PostServersCreateServerResponseServerPublicNetServerPublicNetFirewallStatusEnum;
}
/**
 * IP address (v4) and its reverse DNS entry of this Server
 */
export declare class PostServersCreateServerResponseServerPublicNetIpv4 extends SpeakeasyBase {
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
export declare class PostServersCreateServerResponseServerPublicNetIpv6DnsPtr extends SpeakeasyBase {
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
export declare class PostServersCreateServerResponseServerPublicNetIpv6 extends SpeakeasyBase {
    /**
     * If the IP is blocked by our anti abuse dept
     */
    blocked: boolean;
    /**
     * Reverse DNS PTR entries for the IPv6 addresses of this Server, `null` by default
     */
    dnsPtr: PostServersCreateServerResponseServerPublicNetIpv6DnsPtr[];
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
export declare class PostServersCreateServerResponseServerPublicNet extends SpeakeasyBase {
    /**
     * Firewalls applied to the public network interface of this Server
     */
    firewalls?: PostServersCreateServerResponseServerPublicNetServerPublicNetFirewall[];
    /**
     * IDs of Floating IPs assigned to this Server
     */
    floatingIps: number[];
    /**
     * IP address (v4) and its reverse DNS entry of this Server
     */
    ipv4: PostServersCreateServerResponseServerPublicNetIpv4;
    /**
     * IPv6 network assigned to this Server and its reverse DNS entry
     */
    ipv6: PostServersCreateServerResponseServerPublicNetIpv6;
}
/**
 * Type of cpu
 */
export declare enum PostServersCreateServerResponseServerServerTypeCpuTypeEnum {
    Shared = "shared",
    Dedicated = "dedicated"
}
/**
 * Hourly costs for a Server type in this Location
 */
export declare class PostServersCreateServerResponseServerServerTypePricesPriceHourly extends SpeakeasyBase {
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
export declare class PostServersCreateServerResponseServerServerTypePricesPriceMonthly extends SpeakeasyBase {
    /**
     * Price with VAT added
     */
    gross: string;
    /**
     * Price without VAT
     */
    net: string;
}
export declare class PostServersCreateServerResponseServerServerTypePrices extends SpeakeasyBase {
    /**
     * Name of the Location the price is for
     */
    location: string;
    /**
     * Hourly costs for a Server type in this Location
     */
    priceHourly: PostServersCreateServerResponseServerServerTypePricesPriceHourly;
    /**
     * Monthly costs for a Server type in this Location
     */
    priceMonthly: PostServersCreateServerResponseServerServerTypePricesPriceMonthly;
}
/**
 * Type of Server boot drive. Local has higher speed. Network has better availability.
 */
export declare enum PostServersCreateServerResponseServerServerTypeStorageTypeEnum {
    Local = "local",
    Network = "network"
}
/**
 * Type of Server - determines how much ram, disk and cpu a Server has
 */
export declare class PostServersCreateServerResponseServerServerType extends SpeakeasyBase {
    /**
     * Number of cpu cores a Server of this type will have
     */
    cores: number;
    /**
     * Type of cpu
     */
    cpuType: PostServersCreateServerResponseServerServerTypeCpuTypeEnum;
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
    prices: PostServersCreateServerResponseServerServerTypePrices[];
    /**
     * Type of Server boot drive. Local has higher speed. Network has better availability.
     */
    storageType: PostServersCreateServerResponseServerServerTypeStorageTypeEnum;
}
/**
 * Status of the Server
 */
export declare enum PostServersCreateServerResponseServerStatusEnum {
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
export declare class PostServersCreateServerResponseServer extends SpeakeasyBase {
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
    datacenter: PostServersCreateServerResponseServerDatacenter;
    /**
     * ID of the Resource
     */
    id: number;
    image: PostServersCreateServerResponseServerImage;
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
    iso: PostServersCreateServerResponseServerIso;
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
    placementGroup?: PostServersCreateServerResponseServerPlacementGroupNullable;
    /**
     * Size of the primary Disk
     */
    primaryDiskSize: number;
    /**
     * Private networks information
     */
    privateNet: PostServersCreateServerResponseServerPrivateNet[];
    /**
     * Protection configuration for the Server
     */
    protection: PostServersCreateServerResponseServerProtection;
    /**
     * Public network information. The Server's IPv4 address can be found in `public_net->ipv4->ip`
     */
    publicNet: PostServersCreateServerResponseServerPublicNet;
    /**
     * True if rescue mode is enabled. Server will then boot into rescue system on next reboot
     */
    rescueEnabled: boolean;
    /**
     * Type of Server - determines how much ram, disk and cpu a Server has
     */
    serverType: PostServersCreateServerResponseServerServerType;
    /**
     * Status of the Server
     */
    status: PostServersCreateServerResponseServerStatusEnum;
    /**
     * IDs of Volumes assigned to this Server
     */
    volumes?: number[];
}
/**
 * The `server` key in the reply contains a Server object with this structure
 */
export declare class PostServersCreateServerResponse extends SpeakeasyBase {
    action: PostServersCreateServerResponseAction;
    nextActions: PostServersCreateServerResponseAction[];
    /**
     * Root password when no SSH keys have been specified
     */
    rootPassword: string;
    server: PostServersCreateServerResponseServer;
}
export declare class PostServersResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * The `server` key in the reply contains a Server object with this structure
     */
    createServerResponse?: PostServersCreateServerResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
