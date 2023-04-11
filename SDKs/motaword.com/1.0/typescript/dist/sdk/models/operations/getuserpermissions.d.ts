import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetUserPermissionsRequest extends SpeakeasyBase {
    /**
     * User ID
     */
    userId: number;
}
export declare class GetUserPermissionsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * List of permission strings
     */
    permissionList?: shared.PermissionList;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
