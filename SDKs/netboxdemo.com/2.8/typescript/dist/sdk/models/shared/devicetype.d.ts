import { SpeakeasyBase } from "../../../internal/utils";
import { NestedManufacturer } from "./nestedmanufacturer";
export declare enum DeviceTypeSubdeviceRoleLabelEnum {
    Parent = "Parent",
    Child = "Child"
}
export declare enum DeviceTypeSubdeviceRoleValueEnum {
    Parent = "parent",
    Child = "child"
}
export declare class DeviceTypeSubdeviceRole extends SpeakeasyBase {
    label: DeviceTypeSubdeviceRoleLabelEnum;
    value: DeviceTypeSubdeviceRoleValueEnum;
}
export declare class DeviceType extends SpeakeasyBase {
    comments?: string;
    created?: Date;
    customFields?: Record<string, any>;
    deviceCount?: number;
    displayName?: string;
    frontImage?: string;
    id?: number;
    /**
     * Device consumes both front and rear rack faces
     */
    isFullDepth?: boolean;
    lastUpdated?: Date;
    manufacturer: NestedManufacturer;
    model: string;
    /**
     * Discrete part number (optional)
     */
    partNumber?: string;
    rearImage?: string;
    slug: string;
    subdeviceRole?: DeviceTypeSubdeviceRole;
    tags?: string[];
    uHeight?: number;
}
