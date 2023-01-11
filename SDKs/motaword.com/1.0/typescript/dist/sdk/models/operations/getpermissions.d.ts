import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetPermissionsResponse extends SpeakeasyBase {
    contentType: string;
    permissionList?: shared.PermissionList;
    statusCode: number;
}
