import { SpeakeasyBase } from "../../../internal/utils";
import { Device } from "./device";
/**
 * Successful response
 */
export declare class DevicesListResponse extends SpeakeasyBase {
    /**
     * A managed device.
     */
    device?: Device[];
}
