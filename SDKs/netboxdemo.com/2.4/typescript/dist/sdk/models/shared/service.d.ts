import { SpeakeasyBase } from "../../../internal/utils";
import { NestedDevice } from "./nesteddevice";
import { NestedIPAddress } from "./nestedipaddress";
import { NestedVirtualMachine } from "./nestedvirtualmachine";
export declare class ServiceProtocol extends SpeakeasyBase {
    label: string;
    value: number;
}
export declare class Service extends SpeakeasyBase {
    created?: Date;
    customFields?: Record<string, any>;
    description?: string;
    device?: NestedDevice;
    id?: number;
    ipaddresses?: NestedIPAddress[];
    lastUpdated?: Date;
    name: string;
    port: number;
    protocol: ServiceProtocol;
    virtualMachine?: NestedVirtualMachine;
}
