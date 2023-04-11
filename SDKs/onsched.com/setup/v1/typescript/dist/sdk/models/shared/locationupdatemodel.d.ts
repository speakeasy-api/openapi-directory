import { SpeakeasyBase } from "../../../internal/utils";
import { AddressUpdateModel } from "./addressupdatemodel";
import { AppointmentRemindersInputModel } from "./appointmentremindersinputmodel";
import { BusinessDefaultsUpdateModel } from "./businessdefaultsupdatemodel";
import { BusinessHoursUpdateModel } from "./businesshoursupdatemodel";
import { OnlineSettingsUpdateModel } from "./onlinesettingsupdatemodel";
export declare class LocationUpdateModel extends SpeakeasyBase {
    address?: AddressUpdateModel;
    adminEmail?: string;
    adminName?: string;
    appointmentReminders?: AppointmentRemindersInputModel;
    businessHours?: BusinessHoursUpdateModel;
    defaults?: BusinessDefaultsUpdateModel;
    email?: string;
    fax?: string;
    friendlyId?: string;
    name?: string;
    phone?: string;
    regionId?: string;
    settings?: OnlineSettingsUpdateModel;
    timezoneName?: string;
    website?: string;
}
