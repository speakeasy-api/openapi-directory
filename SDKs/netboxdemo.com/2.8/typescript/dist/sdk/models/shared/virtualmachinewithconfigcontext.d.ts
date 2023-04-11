import { SpeakeasyBase } from "../../../internal/utils";
import { NestedCluster } from "./nestedcluster";
import { NestedDeviceRole } from "./nesteddevicerole";
import { NestedIPAddress } from "./nestedipaddress";
import { NestedPlatform } from "./nestedplatform";
import { NestedSite } from "./nestedsite";
import { NestedTenant } from "./nestedtenant";
export declare enum VirtualMachineWithConfigContextStatusLabelEnum {
    Offline = "Offline",
    Active = "Active",
    Planned = "Planned",
    Staged = "Staged",
    Failed = "Failed",
    Decommissioning = "Decommissioning"
}
export declare enum VirtualMachineWithConfigContextStatusValueEnum {
    Offline = "offline",
    Active = "active",
    Planned = "planned",
    Staged = "staged",
    Failed = "failed",
    Decommissioning = "decommissioning"
}
export declare class VirtualMachineWithConfigContextStatus extends SpeakeasyBase {
    label: VirtualMachineWithConfigContextStatusLabelEnum;
    value: VirtualMachineWithConfigContextStatusValueEnum;
}
export declare class VirtualMachineWithConfigContext extends SpeakeasyBase {
    cluster: NestedCluster;
    comments?: string;
    configContext?: Record<string, string>;
    created?: Date;
    customFields?: Record<string, any>;
    disk?: number;
    id?: number;
    lastUpdated?: Date;
    localContextData?: string;
    memory?: number;
    name: string;
    platform?: NestedPlatform;
    primaryIp?: NestedIPAddress;
    primaryIp4?: NestedIPAddress;
    primaryIp6?: NestedIPAddress;
    role?: NestedDeviceRole;
    site?: NestedSite;
    status?: VirtualMachineWithConfigContextStatus;
    tags?: string[];
    tenant?: NestedTenant;
    vcpus?: number;
}
