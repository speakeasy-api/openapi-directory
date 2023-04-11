import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetNetworkSmRestrictionsRequest extends SpeakeasyBase {
    deviceId: string;
    networkId: string;
}
export declare class GetNetworkSmRestrictionsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    getNetworkSmRestrictions200ApplicationJSONObjects?: Record<string, any>[];
}
