import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetNetworkFloorPlanRequest extends SpeakeasyBase {
    floorPlanId: string;
    networkId: string;
}
export declare class GetNetworkFloorPlanResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    getNetworkFloorPlan200ApplicationJSONObject?: Record<string, any>;
}
