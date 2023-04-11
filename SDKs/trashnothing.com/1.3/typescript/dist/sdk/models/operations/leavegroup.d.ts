import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class LeaveGroupRequest extends SpeakeasyBase {
    /**
     * The ID of the group to leave.
     */
    groupId: string;
}
export declare class LeaveGroupResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Updated data about the group and the current users' membership.
     */
    group?: shared.Group;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
