import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetSetupV1ResourcesRequest extends SpeakeasyBase {
    /**
     * Show by deleted status, default is false
     */
    deleted?: boolean;
    /**
     * Filter by email address
     */
    email?: string;
    /**
     * Google calendar authorization return url
     */
    googleAuthReturnUrl?: string;
    /**
     * Page limit default 20, max is 100
     */
    limit?: number;
    /**
     * id of business location, defaults to primary business location
     */
    locationId?: string;
    /**
     * Search by name
     */
    name?: string;
    /**
     * Starting row of page, default 0
     */
    offset?: number;
    /**
     * Outlook calendar authorization return url
     */
    outlookAuthReturnUrl?: string;
    /**
     * Filter by group Id
     */
    resourceGroupId?: string;
}
export declare class GetSetupV1ResourcesResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * resource object
     */
    resourceListViewModel?: shared.ResourceListViewModel;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
