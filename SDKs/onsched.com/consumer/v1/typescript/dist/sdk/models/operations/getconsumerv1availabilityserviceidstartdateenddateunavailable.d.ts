import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetConsumerV1AvailabilityServiceIdStartDateEndDateUnavailableRequest extends SpeakeasyBase {
    /**
     * Duration of the service if different from default
     */
    duration?: number;
    /**
     * Format YYYY-MM-DD: End Date for unavailable time search
     */
    endDate: Date;
    /**
     * Id of business location, defaults to primary business location
     */
    locationId?: string;
    /**
     * Resource Id to filter on
     */
    resourceId?: string;
    /**
     * Service Id for availability search
     */
    serviceId: string;
    /**
     * Set as true to remove Time Past (TP) blocks in the response
     */
    skipTimePastUnavailability?: boolean;
    /**
     * Format YYYY-MM-DD: Start Date for unavailable time search
     */
    startDate: Date;
    /**
     * Request timezone offset to view unavailable times
     */
    tzOffset?: number;
}
export declare class GetConsumerV1AvailabilityServiceIdStartDateEndDateUnavailableResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    unavailableTimeListViewModel?: shared.UnavailableTimeListViewModel;
}
