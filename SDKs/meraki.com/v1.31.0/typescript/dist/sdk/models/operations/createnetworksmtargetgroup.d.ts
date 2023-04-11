import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class CreateNetworkSmTargetGroupRequestBody extends SpeakeasyBase {
    /**
     * The name of this target group
     */
    name?: string;
    /**
     * The scope and tag options of the target group. Comma separated values beginning with one of withAny, withAll, withoutAny, withoutAll, all, none, followed by tags. Default to none if empty.
     */
    scope?: string;
}
export declare class CreateNetworkSmTargetGroupRequest extends SpeakeasyBase {
    requestBody?: CreateNetworkSmTargetGroupRequestBody;
    networkId: string;
}
export declare class CreateNetworkSmTargetGroupResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    createNetworkSmTargetGroup201ApplicationJSONObject?: Record<string, any>;
}
