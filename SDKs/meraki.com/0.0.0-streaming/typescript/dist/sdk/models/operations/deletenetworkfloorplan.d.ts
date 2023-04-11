import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DeleteNetworkFloorPlanRequest extends SpeakeasyBase {
    floorPlanId: string;
    networkId: string;
}
export declare class DeleteNetworkFloorPlanResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
