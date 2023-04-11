import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DevicelistSecurity extends SpeakeasyBase {
    codeOauth?: string;
    passwordOauth?: string;
}
/**
 * Defines which device type will be returned by devicelist. It could be app_thermostat or app_station (by default if not provided)
 */
export declare enum DevicelistAppTypeEnum {
    AppThermostat = "app_thermostat",
    AppStation = "app_station"
}
export declare class DevicelistRequest extends SpeakeasyBase {
    /**
     * Defines which device type will be returned by devicelist. It could be app_thermostat or app_station (by default if not provided)
     */
    appType?: DevicelistAppTypeEnum;
    /**
     * Specify a device_id if you want to retrieve only this device informations.
     */
    deviceId?: string;
    /**
     * When set to "true", the favorite devices of the user are returned. This flag is available only if the devices requested are Weather Stations.
     */
    getFavorites?: boolean;
}
export declare class DevicelistResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful response
     */
    naDeviceListResponse?: shared.NADeviceListResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
