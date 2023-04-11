import { SpeakeasyBase } from "../../../internal/utils";
import { DeviceFields } from "./devicefields";
export declare class ConnectRequest extends SpeakeasyBase {
    device?: DeviceFields;
    /**
     * Represents chat user
     */
    userDetails: Record<string, any>;
}
