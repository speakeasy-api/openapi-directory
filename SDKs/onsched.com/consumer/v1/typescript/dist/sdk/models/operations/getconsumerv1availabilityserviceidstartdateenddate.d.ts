import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetConsumerV1AvailabilityServiceIdStartDateEndDateRequest extends SpeakeasyBase {
    /**
     * Number of days of day availability to return
     */
    dayAvailability?: number;
    /**
     * Format YYYY-DD-YY: Start date for day availability, defaults to startDate
     */
    dayAvailabilityStartDate?: Date;
    /**
     * For calculating travel based availability, requires distance scope
     */
    destination?: string;
    /**
     * Duration of the service if different from default
     */
    duration?: number;
    /**
     * Format YYYY-MM-DD: End Date for availability search
     */
    endDate: Date;
    /**
     * Format Military Time. End Time for availability search. Defaults to Business Hours End
     */
    endTime?: number;
    /**
     * Return available times for the first available day
     */
    firstDayAvailable?: boolean;
    /**
     * Booking Interval if different than the default
     */
    interval?: number;
    /**
     * Id of business location, defaults to primary business location
     */
    locationId?: string;
    /**
     * Resource Group Id for availability search
     */
    resourceGroupId?: string;
    /**
     * Resource Id for availability search
     */
    resourceId?: string;
    /**
     * Comma separated Resource Id's for availability search
     */
    resourceIds?: string;
    /**
     * Round robin choice 0=none, 1=random, 2=balanced
     */
    roundRobin?: string;
    /**
     * Service Id for availability search
     */
    serviceId: string;
    /**
     * Format YYYY-MM-DD: Start Date for availability search
     */
    startDate: Date;
    /**
     * Format Military Time Start Time for availability search. Defaults to Business Hours Start
     */
    startTime?: number;
    /**
     * Requested IANA timezone Id to view availability
     */
    timezoneName?: string;
    /**
     * Request timezone offset to view availability
     */
    tzOffset?: number;
}
export declare class GetConsumerV1AvailabilityServiceIdStartDateEndDateResponse extends SpeakeasyBase {
    /**
     * Success
     */
    availabilityViewModel?: shared.AvailabilityViewModel;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
