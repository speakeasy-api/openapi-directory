import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Created
 */
export declare class MicrovisorV1DeviceDeviceSecret extends SpeakeasyBase {
    dateRotated?: Date;
    /**
     * A 34-character string that uniquely identifies the parent Device.
     */
    deviceSid?: string;
    /**
     * The secret key; up to 100 characters.
     */
    key?: string;
    /**
     * The absolute URL of the Secret.
     */
    url?: string;
}
