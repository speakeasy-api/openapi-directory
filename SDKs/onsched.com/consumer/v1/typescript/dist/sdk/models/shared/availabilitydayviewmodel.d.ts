import { SpeakeasyBase } from "../../../internal/utils";
import { AvailableDayViewModel } from "./availabledayviewmodel";
/**
 * Success
 */
export declare class AvailabilityDayViewModel extends SpeakeasyBase {
    availableDays?: AvailableDayViewModel[];
    object?: string;
    resourceDescription?: string;
    resourceId?: string;
    resourceName?: string;
    serviceDescription?: string;
    serviceId?: string;
    serviceName?: string;
    tzRequested?: number;
    url?: string;
}
