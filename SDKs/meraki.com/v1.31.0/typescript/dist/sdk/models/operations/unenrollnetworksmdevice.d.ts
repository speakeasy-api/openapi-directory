import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class UnenrollNetworkSmDeviceRequest extends SpeakeasyBase {
    deviceId: string;
    networkId: string;
}
export declare class UnenrollNetworkSmDeviceResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    unenrollNetworkSmDevice200ApplicationJSONObject?: Record<string, any>;
}
