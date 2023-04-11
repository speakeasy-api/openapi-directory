import { SpeakeasyBase } from "../../../internal/utils";
import { Contact } from "./contact";
export declare class BillTo extends SpeakeasyBase {
    contact: Contact;
    /**
     * Tax id used for calculating the tax the customer is required to pay
     */
    taxId?: string;
}
