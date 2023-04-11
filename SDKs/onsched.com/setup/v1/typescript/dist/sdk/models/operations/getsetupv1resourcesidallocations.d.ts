import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetSetupV1ResourcesIdAllocationsRequest extends SpeakeasyBase {
    /**
     * yyyy-mm-dd, filter on/before endDate
     */
    endDate?: Date;
    /**
     * id of resource to list allocations for
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
     * yyyy-mm-dd, filter allocations on/after startDate
     */
    startDate?: Date;
}
export declare class GetSetupV1ResourcesIdAllocationsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * resource allocation objects
     */
    resourceAllocationListViewModel?: shared.ResourceAllocationListViewModel;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
