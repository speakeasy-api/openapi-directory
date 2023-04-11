import { SpeakeasyBase } from "../../../internal/utils";
import { AddressViewModel } from "./addressviewmodel";
import { ContactViewModel } from "./contactviewmodel";
import { CustomFieldInputModel } from "./customfieldinputmodel";
import { ResourceHoursViewModel } from "./resourcehoursviewmodel";
import { ResourceServiceViewModel } from "./resourceserviceviewmodel";
/**
 * Success
 */
export declare class ResourceViewModel extends SpeakeasyBase {
    address?: AddressViewModel;
    availability?: ResourceHoursViewModel;
    bioLink?: string;
    bookingNotification?: number;
    calendarAvailability?: number;
    contact?: ContactViewModel;
    customFields?: CustomFieldInputModel;
    deletedStatus?: boolean;
    deletedTime?: Date;
    description?: string;
    effectiveDate?: Date;
    email?: string;
    gender?: string;
    googleCalendarId?: string;
    groupId?: string;
    hourly?: number;
    id?: string;
    ignoreBusinessHours?: boolean;
    imageUrl?: string;
    locationId?: string;
    name?: string;
    notificationType?: number;
    object?: string;
    outlookCalendarId?: string;
    recurringAvailability?: boolean;
    services?: ResourceServiceViewModel[];
    skypeName?: string;
    sortKey?: number;
    timezoneIana?: string;
    timezoneId?: string;
    timezoneOffset?: number;
}
