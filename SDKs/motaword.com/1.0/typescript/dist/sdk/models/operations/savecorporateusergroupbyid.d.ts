import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class SaveCorporateUserGroupByIdPathParams extends SpeakeasyBase {
    corporateId: number;
}
export declare class SaveCorporateUserGroupByIdRequest extends SpeakeasyBase {
    pathParams: SaveCorporateUserGroupByIdPathParams;
    request: shared.UserGroup;
}
export declare class SaveCorporateUserGroupByIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    userGroup?: shared.UserGroup;
}
