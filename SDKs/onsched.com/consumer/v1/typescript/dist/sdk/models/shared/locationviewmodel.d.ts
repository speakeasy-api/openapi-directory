import { SpeakeasyBase } from "../../../internal/utils";
import { AddressViewModel } from "./addressviewmodel";
import { AppointmentReminderViewModel } from "./appointmentreminderviewmodel";
import { BusinessDefaultsViewModel } from "./businessdefaultsviewmodel";
import { BusinessHolidayViewModel } from "./businessholidayviewmodel";
import { BusinessHoursViewModel } from "./businesshoursviewmodel";
import { BusinessServiceViewModel } from "./businessserviceviewmodel";
import { OnlineSettingsViewModel } from "./onlinesettingsviewmodel";
import { TravelViewModel } from "./travelviewmodel";
/**
 * Success
 */
export declare class LocationViewModel extends SpeakeasyBase {
    address?: AddressViewModel;
    adminEmail?: string;
    adminName?: string;
    appointmentReminders?: AppointmentReminderViewModel;
    businessHolidays?: BusinessHolidayViewModel[];
    businessHours?: BusinessHoursViewModel;
    companyId?: string;
    companyName?: string;
    defaults?: BusinessDefaultsViewModel;
    email?: string;
    fax?: string;
    friendlyId?: string;
    id?: string;
    imageUrl?: string;
    latitude?: number;
    logo?: string;
    longitude?: number;
    name?: string;
    object?: string;
    phone?: string;
    primaryBusiness?: boolean;
    primaryCalendarId?: string;
    regionId?: string;
    services?: BusinessServiceViewModel[];
    settings?: OnlineSettingsViewModel;
    timezoneIana?: string;
    timezoneId?: string;
    timezoneOffset?: number;
    travel?: TravelViewModel;
    website?: string;
}
