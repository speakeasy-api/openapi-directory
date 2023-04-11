import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ModifyNetworkSmDevicesTagsRequestBody extends SpeakeasyBase {
    /**
     * The ids of the devices to be modified.
     */
    ids?: string[];
    /**
     * The scope (one of all, none, withAny, withAll, withoutAny, or withoutAll) and a set of tags of the devices to be modified.
     */
    scope?: string[];
    /**
     * The serials of the devices to be modified.
     */
    serials?: string[];
    /**
     * The tags to be added, deleted, or updated.
     */
    tags: string[];
    /**
     * One of add, delete, or update. Only devices that have been modified will be returned.
     */
    updateAction: string;
    /**
     * The wifiMacs of the devices to be modified.
     */
    wifiMacs?: string[];
}
export declare class ModifyNetworkSmDevicesTagsRequest extends SpeakeasyBase {
    requestBody: ModifyNetworkSmDevicesTagsRequestBody;
    networkId: string;
}
export declare class ModifyNetworkSmDevicesTags200ApplicationJSON extends SpeakeasyBase {
    /**
     * The Meraki Id of the device record.
     */
    id?: string;
    /**
     * The device serial.
     */
    serial?: string;
    /**
     * An array of tags associated with the device.
     */
    tags?: string[];
    /**
     * The MAC of the device.
     */
    wifiMac?: string;
}
export declare class ModifyNetworkSmDevicesTagsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    modifyNetworkSmDevicesTags200ApplicationJSONObjects?: ModifyNetworkSmDevicesTags200ApplicationJSON[];
}
