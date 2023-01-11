import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetUserPermissionsPathParams extends SpeakeasyBase {
    userId: number;
}
export declare class GetUserPermissionsRequest extends SpeakeasyBase {
    pathParams: GetUserPermissionsPathParams;
}
export declare class GetUserPermissionsResponse extends SpeakeasyBase {
    contentType: string;
    permissionList?: shared.PermissionList;
    statusCode: number;
}
