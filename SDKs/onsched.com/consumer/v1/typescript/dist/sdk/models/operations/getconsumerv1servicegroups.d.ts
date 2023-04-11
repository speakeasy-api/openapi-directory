import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetConsumerV1ServicegroupsRequest extends SpeakeasyBase {
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
export declare class GetConsumerV1ServicegroupsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    serviceGroupListViewModel?: shared.ServiceGroupListViewModel;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
