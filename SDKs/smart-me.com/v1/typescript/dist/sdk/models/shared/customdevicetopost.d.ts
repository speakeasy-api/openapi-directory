import { SpeakeasyBase } from "../../../internal/utils";
import { CustomDeviceValues } from "./customdevicevalues";
/**
 * Container Class for the Web API
 */
export declare class CustomDeviceToPost extends SpeakeasyBase {
    /**
     * The ID of the device
     */
    id?: string;
    /**
     * The Name of the Device
     */
    name?: string;
    /**
     * The Serial number
     */
    serial?: number;
    /**
     * The Date of the Value (in UTC). If this is null the Server Time is used.
     */
    valueDate?: Date;
    /**
     * The Values of the custom Device
     */
    values?: CustomDeviceValues[];
}
