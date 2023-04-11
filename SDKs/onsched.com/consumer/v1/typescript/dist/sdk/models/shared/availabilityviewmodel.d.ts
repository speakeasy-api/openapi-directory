import { SpeakeasyBase } from "../../../internal/utils";
import { AvailableDayViewModel } from "./availabledayviewmodel";
import { AvailableTimeViewModel } from "./availabletimeviewmodel";
/**
 * Success
 */
export declare class AvailabilityViewModel extends SpeakeasyBase {
    availableDays?: AvailableDayViewModel[];
    availableTimes?: AvailableTimeViewModel[];
    businessName?: string;
    calendarId?: string;
    calendarResourceGroupId?: string;
    endDate?: string;
    firstAvailableDate?: string;
    locationId?: string;
    object?: string;
    resourceDescription?: string;
    resourceId?: string;
    resourceIds?: string;
    resourceName?: string;
    serviceDescription?: string;
    serviceDuration?: number;
    serviceId?: string;
    serviceName?: string;
    startDate?: string;
    /**
     * Returns the Timezone Name in IANA format if a TimezoneName was passed into an Availability call; otherwise this property is hidden
     */
    timezoneName?: string;
    /**
     * Returns the timezone offset if a tzOffset was supplied into an Availability call; null if a TimezoneName was passed; otherwise the Business timezone offset is returned
     */
    tzRequested?: number;
    url?: string;
}
