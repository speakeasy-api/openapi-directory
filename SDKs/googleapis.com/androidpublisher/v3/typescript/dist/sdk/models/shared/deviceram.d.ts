import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Conditions about a device's RAM capabilities.
 */
export declare class DeviceRam extends SpeakeasyBase {
    /**
     * Maximum RAM in bytes (bound excluded).
     */
    maxBytes?: string;
    /**
     * Minimum RAM in bytes (bound included).
     */
    minBytes?: string;
}
