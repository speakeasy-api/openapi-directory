import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The device state, as reported by the device.
 */
export declare class DeviceState extends SpeakeasyBase {
    /**
     * The device state data.
     */
    binaryData?: string;
    /**
     * [Output only] The time at which this state version was updated in Cloud IoT Core.
     */
    updateTime?: string;
}
