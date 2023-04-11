import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class UpdateUserGroupSecurity extends SpeakeasyBase {
    mwoAuth: string;
}
export declare class UpdateUserGroupRequest extends SpeakeasyBase {
    activeWidget?: shared.ActiveWidget;
    /**
     * User ID
     */
    userId: number;
}
export declare class UpdateUserGroupResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InvalidParameter
     */
    error?: shared.ErrorT;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * List of user groups
     */
    userGroupList?: shared.UserGroupList;
}
