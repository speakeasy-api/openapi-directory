import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetSetupV1LocationsRequest extends SpeakeasyBase {
    /**
     * Filter locations on deleted status
     */
    deleted?: boolean;
    /**
     * friendlyId of location
     */
    friendlyId?: string;
    /**
     * Page limit default 20, max 100
     */
    limit?: number;
    /**
     * Location name(full or partial) to filter on
     */
    name?: string;
    /**
     * Starting row of page, default 0
     */
    offset?: number;
    /**
     * Find locations that offer this service
     */
    serviceId?: string;
}
export declare class GetSetupV1LocationsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    locationListViewModel?: shared.LocationListViewModel;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
