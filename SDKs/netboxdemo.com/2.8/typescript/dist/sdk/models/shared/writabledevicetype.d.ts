import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Parent devices house child devices in device bays. Leave blank if this device type is neither a parent nor a child.
 */
export declare enum WritableDeviceTypeParentChildStatusEnum {
    Parent = "parent",
    Child = "child"
}
export declare class WritableDeviceTypeInput extends SpeakeasyBase {
    comments?: string;
    customFields?: Record<string, any>;
    /**
     * Device consumes both front and rear rack faces
     */
    isFullDepth?: boolean;
    manufacturer: number;
    model: string;
    /**
     * Discrete part number (optional)
     */
    partNumber?: string;
    slug: string;
    /**
     * Parent devices house child devices in device bays. Leave blank if this device type is neither a parent nor a child.
     */
    subdeviceRole?: WritableDeviceTypeParentChildStatusEnum;
    tags?: string[];
    uHeight?: number;
}
