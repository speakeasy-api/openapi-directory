import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetSetupV1BusinessusersRequest extends SpeakeasyBase {
    /**
     * Filter by email address
     */
    email?: string;
    /**
     * Page limit default 20, max 100
     */
    limit?: number;
    /**
     * id of business location, defaults to primary business location
     */
    locationId?: string;
    /**
     * Starting row of page, default 0
     */
    offset?: number;
    /**
     * Filter user role
     */
    role?: string;
}
export declare class GetSetupV1BusinessusersResponse extends SpeakeasyBase {
    /**
     * Success
     */
    businessUserListViewModel?: shared.BusinessUserListViewModel;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
