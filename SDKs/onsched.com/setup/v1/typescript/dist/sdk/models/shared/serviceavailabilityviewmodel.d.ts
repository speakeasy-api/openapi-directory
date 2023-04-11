import { SpeakeasyBase } from "../../../internal/utils";
import { AvailabilityViewModel2 } from "./availabilityviewmodel2";
/**
 * Success
 */
export declare class ServiceAvailabilityViewModel extends SpeakeasyBase {
    ignoreBusinessHours?: boolean;
    serviceId?: number;
    serviceName?: string;
    weekdays?: AvailabilityViewModel2;
}
