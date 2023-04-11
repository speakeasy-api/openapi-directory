import { SpeakeasyBase } from "../../../internal/utils";
import { Device } from "./device";
/**
 * Successful response
 */
export declare class ListDevicesResponse extends SpeakeasyBase {
    /**
     * List of devices
     */
    devices: Device[];
    duration: string;
}
