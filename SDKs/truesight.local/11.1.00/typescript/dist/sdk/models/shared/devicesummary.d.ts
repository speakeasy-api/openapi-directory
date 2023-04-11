import { SpeakeasyBase } from "../../../internal/utils";
export declare enum DeviceSummaryTypeEnum {
    Default = "DEFAULT",
    EsxHost = "ESX_HOST",
    VirtualMachine = "VIRTUAL_MACHINE",
    VirtualCenter = "VIRTUAL_CENTER",
    XenHost = "XEN_HOST",
    XenMasterServer = "XEN_MASTER_SERVER",
    XenVirtualMachine = "XEN_VIRTUAL_MACHINE",
    XenappController = "XENAPP_CONTROLLER",
    XenappMachine = "XENAPP_MACHINE",
    VblockEsx = "VBLOCK_ESX",
    VblockVirtualMachine = "VBLOCK_VIRTUAL_MACHINE",
    VblockSwitch = "VBLOCK_SWITCH",
    VblockStorage = "VBLOCK_STORAGE",
    VblockChassis = "VBLOCK_CHASSIS",
    VblockBlade = "VBLOCK_BLADE",
    VblockEnv = "VBLOCK_ENV",
    AixBox = "AIX_BOX",
    AixHardPartition = "AIX_HARD_PARTITION",
    AixPool = "AIX_POOL",
    AixLpar = "AIX_LPAR",
    AixWpar = "AIX_WPAR",
    SolSystem = "SOL_SYSTEM",
    SolFrame = "SOL_FRAME",
    SolZone = "SOL_ZONE",
    SolLdom = "SOL_LDOM",
    RedhatKvmHost = "REDHAT_KVM_HOST",
    RedhatKvmGuestInstance = "REDHAT_KVM_GUEST_INSTANCE",
    RedhatXenHost = "REDHAT_XEN_HOST",
    RedhatVm = "REDHAT_VM",
    HpSystem = "HP_SYSTEM",
    HpNpar = "HP_NPAR",
    HpVpar = "HP_VPAR",
    HpIntVm = "HP_INT_VM",
    HpIntHost = "HP_INT_HOST",
    MsHost = "MS_HOST",
    MsVm = "MS_VM",
    AzureVirtualmachine = "AZURE_VIRTUALMACHINE",
    AmazonEc2 = "AMAZON_EC2",
    Os400Host = "OS400_HOST",
    DockerHost = "DOCKER_HOST",
    DockerNode = "DOCKER_NODE",
    DockerContainer = "DOCKER_CONTAINER",
    Router = "ROUTER",
    Hub = "HUB",
    Printer = "PRINTER",
    Repeater = "REPEATER",
    Workstation = "WORKSTATION",
    Ntserver = "NTSERVER",
    Prinetserver = "PRINETSERVER",
    Rmonprobe = "RMONPROBE",
    Webserver = "WEBSERVER",
    Dbserver = "DBSERVER",
    Mailserver = "MAILSERVER",
    Firewall = "FIREWALL",
    Others = "OTHERS",
    Appserver = "APPSERVER",
    Dedicatedagent = "DEDICATEDAGENT",
    Remoteagent = "REMOTEAGENT",
    Layer3Switch = "LAYER_3_SWITCH",
    CentralOfficeSwitch = "CENTRAL_OFFICE_SWITCH",
    AccessServer = "ACCESS_SERVER",
    IO = "I_O",
    WebCaching = "WEB_CACHING",
    Management = "MANAGEMENT",
    BlockServer = "BLOCK_SERVER",
    FileServer = "FILE_SERVER",
    MobileUserDevice = "MOBILE_USER_DEVICE",
    BridgeOrExtender = "BRIDGE_OR_EXTENDER",
    Gateway = "GATEWAY",
    Loadbalancer = "LOADBALANCER",
    Mainframe = "MAINFRAME",
    Sanswitch = "SANSWITCH",
    Sanhub = "SANHUB",
    Sanbridge = "SANBRIDGE",
    Sanrouter = "SANROUTER",
    Sandirector = "SANDIRECTOR",
    Raidstoragedevice = "RAIDSTORAGEDEVICE",
    VirtualTapeLibrary = "VIRTUAL_TAPE_LIBRARY",
    Jbod = "JBOD",
    Storagesubsystem = "STORAGESUBSYSTEM",
    StorageVirtualizer = "STORAGE_VIRTUALIZER",
    MediaLibrary = "MEDIA_LIBRARY",
    Extendernode = "EXTENDERNODE",
    NasHead = "NAS_HEAD",
    SelfcontainedNas = "SELFCONTAINED_NAS",
    Ups = "UPS",
    IpPhone = "IP_PHONE",
    ManagementController = "MANAGEMENT_CONTROLLER",
    ChassisManager = "CHASSIS_MANAGER",
    HostbasedRaidController = "HOSTBASED_RAID_CONTROLLER",
    StorageDeviceEnclosure = "STORAGE_DEVICE_ENCLOSURE",
    Desktop = "DESKTOP",
    Laptop = "LAPTOP",
    VirtualLibrarySystem = "VIRTUAL_LIBRARY_SYSTEM",
    BladeSystem = "BLADE_SYSTEM",
    BladeServer = "BLADE_SERVER",
    VpnConcentrator = "VPN_CONCENTRATOR",
    ProxyServer = "PROXY_SERVER",
    Layer3ProxyServer = "LAYER_3_PROXY_SERVER",
    WanAccelerator = "WAN_ACCELERATOR",
    SanProcessor = "SAN_PROCESSOR",
    VirtualServerRhl = "VIRTUAL_SERVER_RHL",
    VirtualServerWindows = "VIRTUAL_SERVER_WINDOWS",
    ESXi = "ESXi",
    VirtualServer = "VIRTUAL_SERVER",
    Hypervisor = "HYPERVISOR",
    AwsAmi = "AWS_AMI",
    MsAzure = "MS_AZURE",
    Unknown = "UNKNOWN"
}
/**
 * Successful operation
 */
export declare class DeviceSummary extends SpeakeasyBase {
    /**
     * The ID of the PATROL Agent the device is attached to.
     */
    agentId?: number;
    /**
     * The name of the PATROL Agent the device is attached to.
     */
    agentName?: string;
    /**
     * The ambient temperature of the device.
     */
    ambientTemperature?: number;
    /**
     * The collection time of the heating margin (as an Epoch time, in seconds).<br><u>Note</u>:This field will only be present if a value could be found.
     */
    collectTime?: string;
    /**
     * The TSMOKey of the device.
     */
    deviceTSMOKey?: string;
    /**
     * The link to the device details.
     */
    deviceUrl?: string;
    /**
     * The heating margin of the device.<br><u>Note</u>:This field will only be present if a value could be found.
     */
    heatingMargin?: number;
    /**
     * The unit in which the heating margin of the device is being expressed.<br><u>Note</u>:This field will only be present if a value could be found.
     */
    heatingMarginUnit?: string;
    /**
     * The ID of the device.
     */
    id?: number;
    /**
     * The ID of the device.
     */
    name?: string;
    /**
     * The power consumption of the device.
     */
    powerConsumption?: number;
    /**
     * The unit in which the power consumption of the device is being expressed.
     */
    powerConsumptionUnit?: string;
    /**
     * The Hardware Sentry KM version of the device's Monitor.<br><u>Note</u>:This field will only be present if a value could be found.
     */
    productVersion?: string;
    /**
     * The ID of the server the device is attached to.
     */
    serverId?: number;
    /**
     * The name of the server the device is attached to.
     */
    serverName?: string;
    /**
     * The SID of the device.
     */
    sid?: string;
    type?: DeviceSummaryTypeEnum;
    /**
     * The data collection time (as an Epoch time, in seconds).
     */
    updateTimestamp?: number;
}
