import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetCorporateUserGroupsByIdPathParams extends SpeakeasyBase {
    corporateId: number;
}
export declare class GetCorporateUserGroupsByIdRequest extends SpeakeasyBase {
    pathParams: GetCorporateUserGroupsByIdPathParams;
}
export declare class GetCorporateUserGroupsByIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    userGroupList?: shared.UserGroupList;
}
