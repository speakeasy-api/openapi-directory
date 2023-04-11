import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * The new fields of the device. Each field of this object is optional.
 */
export declare class UpdateNetworkSmDevicesFieldsRequestBodyDeviceFields extends SpeakeasyBase {
    /**
     * New name for the device
     */
    name?: string;
    /**
     * New notes for the device
     */
    notes?: string;
}
export declare class UpdateNetworkSmDevicesFieldsRequestBody extends SpeakeasyBase {
    /**
     * The new fields of the device. Each field of this object is optional.
     */
    deviceFields: UpdateNetworkSmDevicesFieldsRequestBodyDeviceFields;
    /**
     * The id of the device to be modified.
     */
    id?: string;
    /**
     * The serial of the device to be modified.
     */
    serial?: string;
    /**
     * The wifiMac of the device to be modified.
     */
    wifiMac?: string;
}
export declare class UpdateNetworkSmDevicesFieldsRequest extends SpeakeasyBase {
    requestBody: UpdateNetworkSmDevicesFieldsRequestBody;
    networkId: string;
}
export declare class UpdateNetworkSmDevicesFields200ApplicationJSON extends SpeakeasyBase {
    /**
     * The Meraki Id of the device record.
     */
    id?: string;
    /**
     * The name of the device.
     */
    name?: string;
    /**
     * Notes associated with the device.
     */
    notes?: string;
    /**
     * The device serial.
     */
    serial?: string;
    /**
     * The MAC of the device.
     */
    wifiMac?: string;
}
export declare class UpdateNetworkSmDevicesFieldsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    updateNetworkSmDevicesFields200ApplicationJSONObjects?: UpdateNetworkSmDevicesFields200ApplicationJSON[];
}
