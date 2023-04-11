import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class UpdateDeviceWirelessBluetoothSettingsRequestBody extends SpeakeasyBase {
    /**
     * Desired major value of the beacon. If the value is set to null it will reset to Dashboard's automatically generated value.
     */
    major?: number;
    /**
     * Desired minor value of the beacon. If the value is set to null it will reset to Dashboard's automatically generated value.
     */
    minor?: number;
    /**
     * Desired UUID of the beacon. If the value is set to null it will reset to Dashboard's automatically generated value.
     */
    uuid?: string;
}
export declare class UpdateDeviceWirelessBluetoothSettingsRequest extends SpeakeasyBase {
    requestBody?: UpdateDeviceWirelessBluetoothSettingsRequestBody;
    serial: string;
}
/**
 * Successful operation
 */
export declare class UpdateDeviceWirelessBluetoothSettings200ApplicationJSON extends SpeakeasyBase {
    /**
     * Desired major value of the beacon. If the value is set to null it will reset to Dashboard's automatically generated value.
     */
    major?: number;
    /**
     * Desired minor value of the beacon. If the value is set to null it will reset to Dashboard's automatically generated value.
     */
    minor?: number;
    /**
     * Desired UUID of the beacon. If the value is set to null it will reset to Dashboard's automatically generated value.
     */
    uuid?: string;
}
export declare class UpdateDeviceWirelessBluetoothSettingsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    updateDeviceWirelessBluetoothSettings200ApplicationJSONObject?: UpdateDeviceWirelessBluetoothSettings200ApplicationJSON;
}
