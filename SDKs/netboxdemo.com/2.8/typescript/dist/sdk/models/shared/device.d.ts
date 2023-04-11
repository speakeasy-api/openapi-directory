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
export declare enum DeviceFaceLabelEnum {
    Front = "Front",
    Rear = "Rear"
}
export declare enum DeviceFaceValueEnum {
    Front = "front",
    Rear = "rear"
}
export declare class DeviceFace extends SpeakeasyBase {
    label: DeviceFaceLabelEnum;
    value: DeviceFaceValueEnum;
}
export declare enum DeviceStatusLabelEnum {
    Offline = "Offline",
    Active = "Active",
    Planned = "Planned",
    Staged = "Staged",
    Failed = "Failed",
    Inventory = "Inventory",
    Decommissioning = "Decommissioning"
}
export declare enum DeviceStatusValueEnum {
    Offline = "offline",
    Active = "active",
    Planned = "planned",
    Staged = "staged",
    Failed = "failed",
    Inventory = "inventory",
    Decommissioning = "decommissioning"
}
export declare class DeviceStatus extends SpeakeasyBase {
    label: DeviceStatusLabelEnum;
    value: DeviceStatusValueEnum;
}
export declare class Device extends SpeakeasyBase {
    /**
     * A unique tag used to identify this device
     */
    assetTag?: string;
    cluster?: NestedCluster;
    comments?: string;
    created?: Date;
    customFields?: Record<string, any>;
    deviceRole: NestedDeviceRole;
    deviceType: NestedDeviceType;
    displayName?: string;
    face?: DeviceFace;
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
    status?: DeviceStatus;
    tags?: string[];
    tenant?: NestedTenant;
    vcPosition?: number;
    vcPriority?: number;
    virtualChassis?: NestedVirtualChassis;
}
