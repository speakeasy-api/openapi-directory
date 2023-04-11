import { SpeakeasyBase } from "../../../internal/utils";
import { AddressViewModel } from "./addressviewmodel";
import { ContactViewModel } from "./contactviewmodel";
import { CustomFieldViewModel } from "./customfieldviewmodel";
/**
 * Success
 */
export declare class CustomerViewModel extends SpeakeasyBase {
    address?: AddressViewModel;
    birthdate?: string;
    businessName?: string;
    companyName?: string;
    contact?: ContactViewModel;
    createdBy?: string;
    createdOn?: string;
    customFields?: Record<string, CustomFieldViewModel>;
    deletedStatus?: boolean;
    deletedTime?: string;
    disabled?: boolean;
    email?: string;
    emailInfo?: boolean;
    emailPromotion?: boolean;
    firstname?: string;
    gender?: string;
    groupId?: string;
    id?: string;
    inviteEmailSent?: string;
    lastVisitDate?: string;
    lastname?: string;
    latitude?: string;
    locationId?: string;
    longitude?: string;
    modifiedBy?: string;
    modifiedOn?: string;
    name?: string;
    notificationType?: string;
    object?: string;
    registeredBy?: string;
    registrationDate?: string;
    resourceId?: string;
    stripeCustomerId?: string;
    subscriptionId?: string;
    verificationDate?: string;
    verifiedBy?: string;
    welcomeEmailSent?: string;
}
