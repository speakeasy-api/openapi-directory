import { SpeakeasyBase } from "../../../internal/utils";
export declare enum WritableVirtualMachineStatusEnum {
    One = "1",
    Zero = "0",
    Three = "3"
}
export declare class WritableVirtualMachineInput extends SpeakeasyBase {
    cluster: number;
    comments?: string;
    customFields?: Record<string, any>;
    disk?: number;
    localContextData?: string;
    memory?: number;
    name: string;
    platform?: number;
    primaryIp4?: number;
    primaryIp6?: number;
    role?: number;
    status?: WritableVirtualMachineStatusEnum;
    tags?: string[];
    tenant?: number;
    vcpus?: number;
}
