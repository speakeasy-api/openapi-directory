import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetConsumerV1ResourcesRequest extends SpeakeasyBase {
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
     * Search by name, supports Partial name search
     */
    name?: string;
    /**
     * Starting row of page, default 0
     */
    offset?: number;
    /**
     * Filter by groupId
     */
    resourceGroupId?: number;
    /**
     * Specify sort order of response
     */
    sortOrder?: string;
}
export declare class GetConsumerV1ResourcesResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * resource object
     */
    resourceListViewModel?: shared.ResourceListViewModel;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
