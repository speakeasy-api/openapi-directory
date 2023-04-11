import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * The new fields of the device. Each field of this object is optional.
 */
export declare class UpdateNetworkSmDeviceFieldsRequestBodyDeviceFields extends SpeakeasyBase {
    /**
     * New name for the device
     */
    name?: string;
    /**
     * New notes for the device
     */
    notes?: string;
}
export declare class UpdateNetworkSmDeviceFieldsRequestBody extends SpeakeasyBase {
    /**
     * The new fields of the device. Each field of this object is optional.
     */
    deviceFields: UpdateNetworkSmDeviceFieldsRequestBodyDeviceFields;
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
export declare class UpdateNetworkSmDeviceFieldsRequest extends SpeakeasyBase {
    requestBody: UpdateNetworkSmDeviceFieldsRequestBody;
    networkId: string;
}
export declare class UpdateNetworkSmDeviceFieldsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    updateNetworkSmDeviceFields200ApplicationJSONObject?: Record<string, any>;
}
