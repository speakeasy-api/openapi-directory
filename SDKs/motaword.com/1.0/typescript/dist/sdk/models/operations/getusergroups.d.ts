import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetUserGroupsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    userGroupList?: shared.UserGroupList;
}
