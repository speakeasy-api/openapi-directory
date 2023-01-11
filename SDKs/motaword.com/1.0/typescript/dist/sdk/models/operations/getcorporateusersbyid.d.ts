import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetCorporateUsersByIdPathParams extends SpeakeasyBase {
    corporateId: number;
}
export declare class GetCorporateUsersByIdRequest extends SpeakeasyBase {
    pathParams: GetCorporateUsersByIdPathParams;
}
export declare class GetCorporateUsersByIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    userList?: shared.UserList;
}
