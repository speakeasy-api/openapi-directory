import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetNetworkSwitchPortSchedulesRequest extends SpeakeasyBase {
    networkId: string;
}
export declare class GetNetworkSwitchPortSchedulesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    getNetworkSwitchPortSchedules200ApplicationJSONObjects?: Record<string, any>[];
}
