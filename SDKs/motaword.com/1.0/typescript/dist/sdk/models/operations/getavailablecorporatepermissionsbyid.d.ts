import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetAvailableCorporatePermissionsByIdRequest extends SpeakeasyBase {
    /**
     * Corporate ID
     */
    corporateId: number;
}
export declare class GetAvailableCorporatePermissionsByIdResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * List of permission strings
     */
    permissionList?: shared.PermissionList;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
