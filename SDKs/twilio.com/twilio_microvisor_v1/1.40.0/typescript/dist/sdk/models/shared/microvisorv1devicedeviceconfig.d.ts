import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Created
 */
export declare class MicrovisorV1DeviceDeviceConfig extends SpeakeasyBase {
    dateUpdated?: Date;
    /**
     * A 34-character string that uniquely identifies the parent Device.
     */
    deviceSid?: string;
    /**
     * The config key; up to 100 characters.
     */
    key?: string;
    /**
     * The absolute URL of the Config.
     */
    url?: string;
    /**
     * The config value; up to 4096 characters.
     */
    value?: string;
}
