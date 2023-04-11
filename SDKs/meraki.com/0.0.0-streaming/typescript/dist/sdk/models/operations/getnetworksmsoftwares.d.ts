import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetNetworkSmSoftwaresRequest extends SpeakeasyBase {
    deviceId: string;
    networkId: string;
}
export declare class GetNetworkSmSoftwaresResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    getNetworkSmSoftwares200ApplicationJSONObjects?: Record<string, any>[];
}
