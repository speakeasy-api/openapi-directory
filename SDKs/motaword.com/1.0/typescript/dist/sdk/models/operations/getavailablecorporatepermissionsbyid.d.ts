import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetAvailableCorporatePermissionsByIdPathParams extends SpeakeasyBase {
    corporateId: number;
}
export declare class GetAvailableCorporatePermissionsByIdRequest extends SpeakeasyBase {
    pathParams: GetAvailableCorporatePermissionsByIdPathParams;
}
export declare class GetAvailableCorporatePermissionsByIdResponse extends SpeakeasyBase {
    contentType: string;
    permissionList?: shared.PermissionList;
    statusCode: number;
}
