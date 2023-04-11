import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetSetupV1BusinessusersPermissionsRequest extends SpeakeasyBase {
    /**
     * Page limit default 20, max 100
     */
    limit?: number;
    /**
     * Starting row of page, default 0
     */
    offset?: number;
    /**
     * Filter permissions by role
     */
    role?: string;
}
export declare class GetSetupV1BusinessusersPermissionsResponse extends SpeakeasyBase {
    /**
     * Success
     */
    businessPermissionListViewModel?: shared.BusinessPermissionListViewModel;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
