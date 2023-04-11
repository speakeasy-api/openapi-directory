import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetSetupV1ServicesIdAllocationsRequest extends SpeakeasyBase {
    /**
     * Format YYYY-MM-DD. Filter appointments on/before endDate
     */
    endDate?: Date;
    /**
     * id of  service to list allocations for, 0 for all
     */
    id: string;
    /**
     * Page limit default 20, max 100
     */
    limit?: number;
    /**
     * The id of the location. Defaults to the primary location
     */
    locationId?: string;
    /**
     * Starting row of page, default 0
     */
    offset?: number;
    /**
     * The id of the resource to filter on
     */
    resourceId?: string;
    /**
     * Format YYYY-MM-DD. Filter appointments by on/after startDate
     */
    startDate?: Date;
}
export declare class GetSetupV1ServicesIdAllocationsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * service alloaction object
     */
    serviceAllocationListViewModel?: shared.ServiceAllocationListViewModel;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
