import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetConsumerV1AvailabilityServiceIdStartDateEndDateDaysRequest extends SpeakeasyBase {
    /**
     * Format YYYY-MM-DD: End Date for availability search
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
     * Service Id for day availability search
     */
    serviceId: string;
    /**
     * Format YYYY-MM-DD: Start Date for availability search
     */
    startDate: Date;
    /**
     * Timezone offset to view availability for
     */
    tzOffset?: number;
}
export declare class GetConsumerV1AvailabilityServiceIdStartDateEndDateDaysResponse extends SpeakeasyBase {
    /**
     * Success
     */
    availabilityDayViewModel?: shared.AvailabilityDayViewModel;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
