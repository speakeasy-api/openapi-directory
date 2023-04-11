import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class UpdateNetworkSmTargetGroupRequestBody extends SpeakeasyBase {
    /**
     * The name of this target group
     */
    name?: string;
    /**
     * The scope and tag options of the target group. Comma separated values beginning with one of withAny, withAll, withoutAny, withoutAll, all, none, followed by tags. Default to none if empty.
     */
    scope?: string;
}
export declare class UpdateNetworkSmTargetGroupRequest extends SpeakeasyBase {
    requestBody?: UpdateNetworkSmTargetGroupRequestBody;
    networkId: string;
    targetGroupId: string;
}
export declare class UpdateNetworkSmTargetGroupResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    updateNetworkSmTargetGroup200ApplicationJSONObject?: Record<string, any>;
}
