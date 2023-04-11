import { SpeakeasyBase } from "../../../internal/utils";
import { AddressViewModel } from "./addressviewmodel";
import { PhoneViewModel } from "./phoneviewmodel";
import { RepeatViewModel } from "./repeatviewmodel";
/**
 * Success
 */
export declare class ServiceAllocationViewModel extends SpeakeasyBase {
    bookingCount?: number;
    bookingLimit?: number;
    deletedStatus?: boolean;
    deletedTime?: string;
    endDate?: string;
    endTime?: number;
    id?: string;
    locationId?: string;
    object?: string;
    reason?: string;
    repeat?: RepeatViewModel;
    repeats?: boolean;
    resourceAddress?: AddressViewModel;
    resourceDescription?: string;
    resourceId?: string;
    resourceImageUrl?: string;
    resourceName?: string;
    resourcePhone?: PhoneViewModel;
    serviceDescription?: string;
    serviceDuration?: number;
    serviceId?: string;
    serviceImageUrl?: string;
    serviceName?: string;
    startDate?: string;
    startTime?: number;
    timezoneName?: string;
    timezoneOffset?: number;
}
