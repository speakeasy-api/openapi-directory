import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetNetworkSmUserSoftwaresRequest extends SpeakeasyBase {
    networkId: string;
    userId: string;
}
export declare class GetNetworkSmUserSoftwaresResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    getNetworkSmUserSoftwares200ApplicationJSONObjects?: Record<string, any>[];
}
