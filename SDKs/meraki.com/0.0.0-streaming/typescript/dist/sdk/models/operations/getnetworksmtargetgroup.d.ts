import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetNetworkSmTargetGroupRequest extends SpeakeasyBase {
    networkId: string;
    targetGroupId: string;
    /**
     * Boolean indicating if the the ids of the devices or users scoped by the target group should be included in the response
     */
    withDetails?: boolean;
}
export declare class GetNetworkSmTargetGroupResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    getNetworkSmTargetGroup200ApplicationJSONObject?: Record<string, any>;
}
