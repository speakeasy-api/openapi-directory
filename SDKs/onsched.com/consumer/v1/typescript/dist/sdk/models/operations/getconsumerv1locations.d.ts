import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetConsumerV1LocationsRequest extends SpeakeasyBase {
    /**
     * Frienldy Id of location
     */
    friendlyId?: string;
    /**
     * Don't include the Primary Location
     */
    ignorePrimary?: boolean;
    /**
     * Page limit, default 20, max 100
     */
    limit?: number;
    /**
     * Location name (full or partial)
     */
    name?: string;
    /**
     * Search by distance nearest Geocoords, City, Postal/Zip Code
     */
    nearestTo?: string;
    /**
     * Starting row of page, default 0
     */
    offset?: number;
    /**
     * Maximum distance to display
     */
    proximity?: number;
    /**
     * Locations within a specific region
     */
    regionId?: string;
    /**
     * Locations that offer this service
     */
    serviceId?: string;
    /**
     * Distance either imperial(miles), metric(kilometers)
     */
    units?: string;
}
export declare class GetConsumerV1LocationsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    locationListViewModel?: shared.LocationListViewModel;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
