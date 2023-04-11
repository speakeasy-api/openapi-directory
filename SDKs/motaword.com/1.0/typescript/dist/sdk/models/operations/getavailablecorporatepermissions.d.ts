import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetAvailableCorporatePermissionsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * List of permission strings
     */
    permissionList?: shared.PermissionList;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
