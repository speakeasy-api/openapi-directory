import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetThisUserGroupsPathParams extends SpeakeasyBase {
    userId: number;
}
export declare class GetThisUserGroupsRequest extends SpeakeasyBase {
    pathParams: GetThisUserGroupsPathParams;
}
export declare class GetThisUserGroupsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    userGroupList?: shared.UserGroupList;
}
