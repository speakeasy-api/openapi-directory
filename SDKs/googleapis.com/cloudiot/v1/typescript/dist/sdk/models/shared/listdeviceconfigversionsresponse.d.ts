import { SpeakeasyBase } from "../../../internal/utils";
import { DeviceConfig } from "./deviceconfig";
/**
 * Response for `ListDeviceConfigVersions`.
 */
export declare class ListDeviceConfigVersionsResponse extends SpeakeasyBase {
    /**
     * The device configuration for the last few versions. Versions are listed in decreasing order, starting from the most recent one.
     */
    deviceConfigs?: DeviceConfig[];
}
