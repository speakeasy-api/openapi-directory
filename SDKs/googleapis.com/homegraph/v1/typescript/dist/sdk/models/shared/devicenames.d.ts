import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Identifiers used to describe the device.
 */
export declare class DeviceNames extends SpeakeasyBase {
    /**
     * List of names provided by the manufacturer rather than the user, such as serial numbers, SKUs, etc.
     */
    defaultNames?: string[];
    /**
     * Primary name of the device, generally provided by the user.
     */
    name?: string;
    /**
     * Additional names provided by the user for the device.
     */
    nicknames?: string[];
}
