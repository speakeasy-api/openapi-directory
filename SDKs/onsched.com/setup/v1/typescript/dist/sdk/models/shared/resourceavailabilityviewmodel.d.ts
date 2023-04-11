import { SpeakeasyBase } from "../../../internal/utils";
import { AvailabilityViewModel2 } from "./availabilityviewmodel2";
/**
 * Success
 */
export declare class ResourceAvailabilityViewModel extends SpeakeasyBase {
    businessId?: number;
    ignoreBusinessHours?: boolean;
    resourceId?: number;
    resourceName?: string;
    resourceTzo?: number;
    weekdays?: AvailabilityViewModel2;
}
