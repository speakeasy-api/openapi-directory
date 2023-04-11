import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetGroupRequest extends SpeakeasyBase {
    /**
     * The unique identifier of the group in Noyo
     */
    groupId: string;
}
export declare class GetGroupResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful Response - Returns a single Group
     */
    groupResult?: shared.GroupResult;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
