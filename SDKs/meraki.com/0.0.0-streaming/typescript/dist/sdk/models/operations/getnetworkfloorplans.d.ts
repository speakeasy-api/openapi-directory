import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetNetworkFloorPlansRequest extends SpeakeasyBase {
    networkId: string;
}
export declare class GetNetworkFloorPlansResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    getNetworkFloorPlans200ApplicationJSONObjects?: Record<string, any>[];
}
