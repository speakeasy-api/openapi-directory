import { SpeakeasyBase } from "../../../internal/utils";
export declare enum ContactCreateRequestTypesEnum {
    Billing = "billing",
    Company = "company",
    Executive = "executive",
    Online = "online"
}
export declare class ContactCreateRequest extends SpeakeasyBase {
    /**
     * Work email address of the group contact
     */
    email: string;
    /**
     * Fax number of the group contact in E.164 format
     */
    faxNumber?: string;
    /**
     * First name of the group contact
     */
    firstName: string;
    /**
     * Last name of the group contact
     */
    lastName: string;
    /**
     * Work phone number of the group contact in E.164 format
     */
    phoneNumber?: string;
    /**
     * True if contact is the primary contact for the group
     */
    primaryContact?: boolean;
    /**
     * Job title of the group contact
     */
    title?: string;
    /**
     * List of contact types for the group contact
     */
    types: ContactCreateRequestTypesEnum[];
}
