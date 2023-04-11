import { SpeakeasyBase } from "../../../internal/utils";
import { AddressUpdateModel } from "./addressupdatemodel";
import { ContactUpdateModel } from "./contactupdatemodel";
import { CustomFieldUpdateModel } from "./customfieldupdatemodel";
export declare class CustomerUpdateModel extends SpeakeasyBase {
    address?: AddressUpdateModel;
    contact?: ContactUpdateModel;
    customFields?: CustomFieldUpdateModel;
    email?: string;
    firstname?: string;
    lastname?: string;
    locationId?: string;
    name?: string;
    /**
     * 0 = default(Email), 1 = Email, 2 = SMS, 3 = Email and SMS
     */
    notificationType?: string;
    stripeCustomerId?: string;
    type?: number;
}
