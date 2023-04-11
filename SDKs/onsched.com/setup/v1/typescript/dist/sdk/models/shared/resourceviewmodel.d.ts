import { SpeakeasyBase } from "../../../internal/utils";
import { AddressViewModel } from "./addressviewmodel";
import { ContactViewModel } from "./contactviewmodel";
import { CustomFieldInputModel } from "./customfieldinputmodel";
import { PhoneViewModel } from "./phoneviewmodel";
import { ResourceHoursViewModel } from "./resourcehoursviewmodel";
import { ResourceOptionsInputModel } from "./resourceoptionsinputmodel";
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
    googleCalendarAuthUrl?: string;
    googleCalendarAuthorized?: boolean;
    googleCalendarId?: string;
    groupId?: number;
    hourly?: number;
    id?: string;
    ignoreBusinessHours?: boolean;
    imageUrl?: string;
    locationId?: string;
    name?: string;
    notificationType?: number;
    object?: string;
    /**
     * Options for the new resource
     */
    options?: ResourceOptionsInputModel;
    outlookCalendarAuthUrl?: string;
    outlookCalendarAuthorized?: boolean;
    outlookCalendarId?: string;
    phone?: PhoneViewModel;
    recurringAvailability?: boolean;
    services?: ResourceServiceViewModel[];
    skypeName?: string;
    sortKey?: number;
    timezoneIana?: string;
    timezoneId?: string;
    timezoneOffset?: number;
}
