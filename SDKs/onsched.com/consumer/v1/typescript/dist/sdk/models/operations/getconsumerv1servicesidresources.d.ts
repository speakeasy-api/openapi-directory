import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetConsumerV1ServicesIdResourcesRequest extends SpeakeasyBase {
    /**
     * id of service object
     */
    id: string;
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
export declare class GetConsumerV1ServicesIdResourcesResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    resourceListViewModel?: shared.ResourceListViewModel;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
