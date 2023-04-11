import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Additional Information For a device
 */
export declare class AdditionalDeviceInformation extends SpeakeasyBase {
    /**
     * An additional Meter serial number. e.g. the number of a meter a smart-me device is connected to.
     */
    additionalMeterSerialNumber?: string;
    /**
     * The Firmware Version of a Meter
     */
    firmwareVersion?: number;
    /**
     * The Hardware Version of a Meter.
     */
    hardwareVersion?: number;
    /**
     * The ID of the device
     */
    id?: string;
    /**
     * The mode how the device is connected to the network. Valid values are:
     *
     * @remarks
     *             wifi, gprs, ltecatm1, ltenbiot, meshmobile, meshwifi
     */
    networkConnection?: string;
    /**
     * The connection RSSI value (0 is bad, 100 is best)
     */
    networkConnectionRSSI?: number;
}
