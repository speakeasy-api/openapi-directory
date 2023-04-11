import { SpeakeasyBase } from "../../../internal/utils";
import { DeviceState } from "./devicestate";
/**
 * Response for `ListDeviceStates`.
 */
export declare class ListDeviceStatesResponse extends SpeakeasyBase {
    /**
     * The last few device states. States are listed in descending order of server update time, starting from the most recent one.
     */
    deviceStates?: DeviceState[];
}
