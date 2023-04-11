import { SpeakeasyBase } from "../../../internal/utils";
export declare class DeviceRoleInput extends SpeakeasyBase {
    color?: string;
    description?: string;
    name: string;
    slug: string;
    /**
     * Virtual machines may be assigned to this role
     */
    vmRole?: boolean;
}
export declare class DeviceRole extends SpeakeasyBase {
    color?: string;
    description?: string;
    deviceCount?: number;
    id?: number;
    name: string;
    slug: string;
    virtualmachineCount?: number;
    /**
     * Virtual machines may be assigned to this role
     */
    vmRole?: boolean;
}
