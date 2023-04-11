import { SpeakeasyBase } from "../../../internal/utils";
import { DeviceCode } from "./devicecode";
import { ErrorT } from "./error";
/**
 * Success
 */
export declare class GetDeviceCodeResponse extends SpeakeasyBase {
    deviceCode?: DeviceCode;
    /**
     * Any errors that occurred during the request.
     */
    errors?: ErrorT[];
}
