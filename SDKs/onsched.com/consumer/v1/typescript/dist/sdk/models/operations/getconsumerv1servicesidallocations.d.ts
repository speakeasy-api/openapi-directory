import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetConsumerV1ServicesIdAllocationsRequest extends SpeakeasyBase {
    /**
     * Format YYYY-MM-DD. Filter allocations on/before endDate
     */
    endDate?: Date;
    /**
     * id of service to list allocations for, 0 for all
     */
    id: string;
    /**
     * Page limit default 20, max 100
     */
    limit?: number;
    /**
     * id of the location, defaults to the primary location
     */
    locationId?: string;
    /**
     * Starting row of page, default 0
     */
    offset?: number;
    /**
     * id of the resource to filter on
     */
    resourceId?: string;
    /**
     * Format YYYY-MM-DD: Filter allocations on/after startDate
     */
    startDate?: Date;
}
export declare class GetConsumerV1ServicesIdAllocationsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * service alloaction object
     */
    serviceAllocationListViewModel?: shared.ServiceAllocationListViewModel;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
