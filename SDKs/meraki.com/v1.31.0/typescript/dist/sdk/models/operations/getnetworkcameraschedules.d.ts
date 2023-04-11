import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetNetworkCameraSchedulesRequest extends SpeakeasyBase {
    networkId: string;
}
export declare class GetNetworkCameraSchedulesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    getNetworkCameraSchedules200ApplicationJSONObjects?: Record<string, any>[];
}
