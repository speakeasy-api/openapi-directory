import { SpeakeasyBase } from "../../../internal/utils";
export declare enum WritableDeviceTypeInterfaceOrderingEnum {
    One = "1",
    Two = "2"
}
/**
 * Parent devices house child devices in device bays. Select "None" if this device type is neither a parent nor a child.
 */
export declare enum WritableDeviceTypeParentChildStatusEnum {
    Null = "null",
    True = "true",
    False = "false"
}
export declare class WritableDeviceTypeInput extends SpeakeasyBase {
    comments?: string;
    customFields?: Record<string, any>;
    interfaceOrdering?: WritableDeviceTypeInterfaceOrderingEnum;
    /**
     * This type of device has console server ports
     */
    isConsoleServer?: boolean;
    /**
     * Device consumes both front and rear rack faces
     */
    isFullDepth?: boolean;
    /**
     * This type of device has network interfaces
     */
    isNetworkDevice?: boolean;
    /**
     * This type of device has power outlets
     */
    isPdu?: boolean;
    manufacturer: number;
    model: string;
    /**
     * Discrete part number (optional)
     */
    partNumber?: string;
    slug: string;
    /**
     * Parent devices house child devices in device bays. Select "None" if this device type is neither a parent nor a child.
     */
    subdeviceRole?: WritableDeviceTypeParentChildStatusEnum;
    tags?: string[];
    uHeight?: number;
}
