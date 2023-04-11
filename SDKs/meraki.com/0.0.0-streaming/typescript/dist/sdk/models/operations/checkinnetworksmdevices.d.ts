import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class CheckinNetworkSmDevicesRequestBody extends SpeakeasyBase {
    /**
     * The ids of the devices to be checked-in.
     */
    ids?: string;
    /**
     * The scope (one of all, none, withAny, withAll, withoutAny, or withoutAll) and a set of tags of the devices to be checked-in.
     */
    scope?: string;
    /**
     * The serials of the devices to be checked-in.
     */
    serials?: string;
    /**
     * The wifiMacs of the devices to be checked-in.
     */
    wifiMacs?: string;
}
export declare class CheckinNetworkSmDevicesRequest extends SpeakeasyBase {
    requestBody?: CheckinNetworkSmDevicesRequestBody;
    networkId: string;
}
export declare class CheckinNetworkSmDevicesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    checkinNetworkSmDevices200ApplicationJSONObject?: Record<string, any>;
}
