import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class SaveCorporateUserGroupRequest extends SpeakeasyBase {
    request: shared.UserGroup;
}
export declare class SaveCorporateUserGroupResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    userGroup?: shared.UserGroup;
}
