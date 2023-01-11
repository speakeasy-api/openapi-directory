import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetAvailableCorporatePermissionsResponse extends SpeakeasyBase {
    contentType: string;
    permissionList?: shared.PermissionList;
    statusCode: number;
}
