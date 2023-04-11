import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetSetupV1ResourcegroupsRequest extends SpeakeasyBase {
    /**
     * Filter results by deleted status
     */
    deleted?: boolean;
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
}
export declare class GetSetupV1ResourcegroupsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    resourceGroupListViewModel?: shared.ResourceGroupListViewModel;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
