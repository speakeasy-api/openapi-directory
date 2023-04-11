import { SpeakeasyBase } from "../../../internal/utils";
import { DeviceIPAddress } from "./deviceipaddress";
import { DeviceVirtualChassis } from "./devicevirtualchassis";
import { NestedCluster } from "./nestedcluster";
import { NestedDeviceRole } from "./nesteddevicerole";
import { NestedDeviceType } from "./nesteddevicetype";
import { NestedPlatform } from "./nestedplatform";
import { NestedRack } from "./nestedrack";
import { NestedSite } from "./nestedsite";
import { NestedTenant } from "./nestedtenant";
export declare class DeviceWithConfigContextFace extends SpeakeasyBase {
    label: string;
    value: number;
}
export declare class DeviceWithConfigContextStatus extends SpeakeasyBase {
    label: string;
    value: number;
}
export declare class DeviceWithConfigContext extends SpeakeasyBase {
    /**
     * A unique tag used to identify this device
     */
    assetTag?: string;
    cluster?: NestedCluster;
    comments?: string;
    configContext?: string;
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
    parentDevice?: string;
    platform?: NestedPlatform;
    /**
     * The lowest-numbered unit occupied by the device
     */
    position?: number;
    primaryIp?: DeviceIPAddress;
    primaryIp4?: DeviceIPAddress;
    primaryIp6?: DeviceIPAddress;
    rack?: NestedRack;
    serial?: string;
    site: NestedSite;
    status?: DeviceWithConfigContextStatus;
    tags?: string[];
    tenant?: NestedTenant;
    vcPosition?: number;
    vcPriority?: number;
    virtualChassis?: DeviceVirtualChassis;
}
