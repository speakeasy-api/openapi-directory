import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DeleteNetworkSmTargetGroupRequest extends SpeakeasyBase {
    networkId: string;
    targetGroupId: string;
}
export declare class DeleteNetworkSmTargetGroupResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
