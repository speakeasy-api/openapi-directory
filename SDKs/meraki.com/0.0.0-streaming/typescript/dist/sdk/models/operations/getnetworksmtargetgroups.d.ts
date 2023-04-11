import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetNetworkSmTargetGroupsRequest extends SpeakeasyBase {
    networkId: string;
    /**
     * Boolean indicating if the the ids of the devices or users scoped by the target group should be included in the response
     */
    withDetails?: boolean;
}
export declare class GetNetworkSmTargetGroupsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    getNetworkSmTargetGroups200ApplicationJSONObjects?: Record<string, any>[];
}
