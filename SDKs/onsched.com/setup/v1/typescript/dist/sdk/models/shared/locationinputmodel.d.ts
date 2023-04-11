import { SpeakeasyBase } from "../../../internal/utils";
import { AddressInputModel } from "./addressinputmodel";
import { AppointmentRemindersInputModel } from "./appointmentremindersinputmodel";
import { BusinessDefaultsInputModel } from "./businessdefaultsinputmodel";
import { BusinessHoursInputModel } from "./businesshoursinputmodel";
import { OnlineSettingsInputModel } from "./onlinesettingsinputmodel";
export declare class LocationInputModel extends SpeakeasyBase {
    address?: AddressInputModel;
    /**
     * Field is required.
     */
    adminEmail?: string;
    /**
     * This field is no longer required and has been deprecated.
     */
    adminName?: string;
    appointmentReminders?: AppointmentRemindersInputModel;
    businessHours?: BusinessHoursInputModel;
    defaults?: BusinessDefaultsInputModel;
    email?: string;
    fax?: string;
    /**
     * Use the friendlyId as an alternative to the assigned locationId
     *
     * @remarks
     * Choose something easy and meaningful. Must be unique within your company.
     * FriendlyId's are limited to maximum of 64 characters.
     */
    friendlyId?: string;
    name?: string;
    /**
     * GroupSize Limits the number of people that can come
     *
     * @remarks
     * along on a single appointment
     */
    phone?: string;
    regionId?: string;
    settings?: OnlineSettingsInputModel;
    /**
     * Field is required. It is in Iana format. e.g. America/New_York. Use moment.js in your client for ease of timezone detection and selection
     */
    timezoneName?: string;
    website?: string;
}
