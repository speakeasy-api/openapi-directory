import { SpeakeasyBase } from "../../../internal/utils";
import { AddressInputModel } from "./addressinputmodel";
import { ContactInputModel } from "./contactinputmodel";
import { CustomFieldInputModel } from "./customfieldinputmodel";
export declare class CustomerInputModel extends SpeakeasyBase {
    address?: AddressInputModel;
    contact?: ContactInputModel;
    customFields?: CustomFieldInputModel;
    email?: string;
    firstname?: string;
    lastname?: string;
    locationId?: string;
    name?: string;
    /**
     * 0 = default(Email), 1 = Email, 2 = SMS, 3 = Email and SMS
     */
    notificationType?: string;
    sendLeadNotification?: boolean;
    stripeCustomerId?: string;
    type?: number;
}
