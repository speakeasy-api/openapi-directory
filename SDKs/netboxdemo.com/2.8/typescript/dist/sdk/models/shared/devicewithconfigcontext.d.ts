import { SpeakeasyBase } from "../../../internal/utils";
import { NestedCluster } from "./nestedcluster";
import { NestedDevice } from "./nesteddevice";
import { NestedDeviceRole } from "./nesteddevicerole";
import { NestedDeviceType } from "./nesteddevicetype";
import { NestedIPAddress } from "./nestedipaddress";
import { NestedPlatform } from "./nestedplatform";
import { NestedRack } from "./nestedrack";
import { NestedSite } from "./nestedsite";
import { NestedTenant } from "./nestedtenant";
import { NestedVirtualChassis } from "./nestedvirtualchassis";
export declare enum DeviceWithConfigContextFaceLabelEnum {
    Front = "Front",
    Rear = "Rear"
}
export declare enum DeviceWithConfigContextFaceValueEnum {
    Front = "front",
    Rear = "rear"
}
export declare class DeviceWithConfigContextFace extends SpeakeasyBase {
    label: DeviceWithConfigContextFaceLabelEnum;
    value: DeviceWithConfigContextFaceValueEnum;
}
export declare enum DeviceWithConfigContextStatusLabelEnum {
    Offline = "Offline",
    Active = "Active",
    Planned = "Planned",
    Staged = "Staged",
    Failed = "Failed",
    Inventory = "Inventory",
    Decommissioning = "Decommissioning"
}
export declare enum DeviceWithConfigContextStatusValueEnum {
    Offline = "offline",
    Active = "active",
    Planned = "planned",
    Staged = "staged",
    Failed = "failed",
    Inventory = "inventory",
    Decommissioning = "decommissioning"
}
export declare class DeviceWithConfigContextStatus extends SpeakeasyBase {
    label: DeviceWithConfigContextStatusLabelEnum;
    value: DeviceWithConfigContextStatusValueEnum;
}
export declare class DeviceWithConfigContext extends SpeakeasyBase {
    /**
     * A unique tag used to identify this device
     */
    assetTag?: string;
    cluster?: NestedCluster;
    comments?: string;
    configContext?: Record<string, string>;
    created?: Date;
    customFields?: Record<string, any>;
    deviceRole: NestedDeviceRole;
    deviceType: NestedDeviceType;
    displayName?: string;
    face?: DeviceWithConfigContextFace;
    id?: number;
    lastUpdated?: Date;
    localContextData?: string;
    name?: string;
    parentDevice?: NestedDevice;
    platform?: NestedPlatform;
    /**
     * The lowest-numbered unit occupied by the device
     */
    position?: number;
    primaryIp?: NestedIPAddress;
    primaryIp4?: NestedIPAddress;
    primaryIp6?: NestedIPAddress;
    rack?: NestedRack;
    serial?: string;
    site: NestedSite;
    status?: DeviceWithConfigContextStatus;
    tags?: string[];
    tenant?: NestedTenant;
    vcPosition?: number;
    vcPriority?: number;
    virtualChassis?: NestedVirtualChassis;
}
