import { SpeakeasyBase } from "../../../internal/utils";
import { CustomFieldInputModel } from "./customfieldinputmodel";
import { ServiceHoursViewModel } from "./servicehoursviewmodel";
/**
 * Success
 */
export declare class ServiceViewModel extends SpeakeasyBase {
    availability?: ServiceHoursViewModel;
    bookAheadUnit?: number;
    bookAheadValue?: number;
    bookInAdvance?: number;
    bookingInterval?: number;
    bookingLimit?: number;
    calendarId?: string;
    calendarResourceGroupId?: string;
    cancellationFeeAmount?: number;
    cancellationFeeTaxable?: boolean;
    companyId?: string;
    consumerPadding?: boolean;
    customFields?: CustomFieldInputModel;
    dailyBookingLimitCount?: number;
    dailyBookingLimitMinutes?: number;
    defaultService?: boolean;
    description?: string;
    duration?: number;
    durationInterval?: number;
    durationMax?: number;
    durationMin?: number;
    durationSelect?: boolean;
    feeAmount?: number;
    feeTaxable?: boolean;
    id?: string;
    imageUrl?: string;
    locationId?: string;
    maxBookingLimit?: number;
    maxCapacity?: number;
    maxGroupSize?: number;
    maxResourceBookingLimit?: number;
    mediaPageUrl?: string;
    name?: string;
    nonRefundable?: boolean;
    object?: string;
    padding?: number;
    roundRobin?: number;
    serviceGroupId?: number;
    serviceGroupName?: string;
    showOnline?: boolean;
    type?: string;
}
