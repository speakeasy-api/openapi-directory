import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class EditGroupRequest extends SpeakeasyBase {
    groupEditRequest: shared.GroupEditRequest;
    /**
     * The unique identifier of the group in Noyo
     */
    groupId: string;
    /**
     * The current version identifier of the group
     */
    version: string;
}
export declare class EditGroupResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful Response - Returns the modified Group
     */
    groupResult?: shared.GroupResult;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
