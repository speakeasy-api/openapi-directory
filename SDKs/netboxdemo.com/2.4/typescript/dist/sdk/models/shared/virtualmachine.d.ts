import { SpeakeasyBase } from "../../../internal/utils";
import { NestedCluster } from "./nestedcluster";
import { NestedDeviceRole } from "./nesteddevicerole";
import { NestedPlatform } from "./nestedplatform";
import { NestedSite } from "./nestedsite";
import { NestedTenant } from "./nestedtenant";
import { VirtualMachineIPAddress } from "./virtualmachineipaddress";
export declare class VirtualMachineStatus extends SpeakeasyBase {
    label: string;
    value: number;
}
export declare class VirtualMachine extends SpeakeasyBase {
    cluster: NestedCluster;
    comments?: string;
    created?: Date;
    customFields?: Record<string, any>;
    disk?: number;
    id?: number;
    lastUpdated?: Date;
    localContextData?: string;
    memory?: number;
    name: string;
    platform?: NestedPlatform;
    primaryIp?: VirtualMachineIPAddress;
    primaryIp4?: VirtualMachineIPAddress;
    primaryIp6?: VirtualMachineIPAddress;
    role?: NestedDeviceRole;
    site?: NestedSite;
    status?: VirtualMachineStatus;
    tags?: string[];
    tenant?: NestedTenant;
    vcpus?: number;
}
