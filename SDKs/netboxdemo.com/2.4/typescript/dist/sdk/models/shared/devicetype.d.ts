import { SpeakeasyBase } from "../../../internal/utils";
import { NestedManufacturer } from "./nestedmanufacturer";
export declare class DeviceTypeInterfaceOrdering extends SpeakeasyBase {
    label: string;
    value: number;
}
export declare class DeviceTypeSubdeviceRole extends SpeakeasyBase {
    label: string;
    value: boolean;
}
export declare class DeviceType extends SpeakeasyBase {
    comments?: string;
    created?: Date;
    customFields?: Record<string, any>;
    id?: number;
    instanceCount?: number;
    interfaceOrdering?: DeviceTypeInterfaceOrdering;
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
    lastUpdated?: Date;
    manufacturer: NestedManufacturer;
    model: string;
    /**
     * Discrete part number (optional)
     */
    partNumber?: string;
    slug: string;
    subdeviceRole?: DeviceTypeSubdeviceRole;
    tags?: string[];
    uHeight?: number;
}
