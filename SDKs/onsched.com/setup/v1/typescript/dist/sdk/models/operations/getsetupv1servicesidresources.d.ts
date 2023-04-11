import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetSetupV1ServicesIdResourcesRequest extends SpeakeasyBase {
    /**
     * Google calendar authorization return url
     */
    googleAuthReturnUrl?: string;
    /**
     * id of service object
     */
    id: string;
    /**
     * Page limit default 20, max 100
     */
    limit?: number;
    /**
     * Starting row of page, default 0
     */
    offset?: number;
    /**
     * Outlook calendar authorization return url
     */
    outlookAuthReturnUrl?: string;
}
export declare class GetSetupV1ServicesIdResourcesResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    resourceListViewModel?: shared.ResourceListViewModel;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
