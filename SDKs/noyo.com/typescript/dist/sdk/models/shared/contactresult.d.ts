import { SpeakeasyBase } from "../../../internal/utils";
export declare enum ContactResultTypesEnum {
    Billing = "billing",
    Company = "company",
    Executive = "executive",
    Online = "online"
}
/**
 * Successful Response - Returns the new Contact
 */
export declare class ContactResult extends SpeakeasyBase {
    /**
     * The date the record was created
     */
    created: number;
    /**
     * Work email address of the group contact
     */
    email: string;
    /**
     * Fax number of the group contact in E.164 format
     */
    faxNumber: string;
    /**
     * First name of the group contact
     */
    firstName?: string;
    /**
     * Unique identifier of the group in Noyo
     */
    groupId: string;
    /**
     * Unique identifier of the record in Noyo
     */
    id: string;
    /**
     * Last name of the group contact
     */
    lastName?: string;
    /**
     * The date the record was last updated
     */
    modified: number;
    /**
     * Work phone number of the group contact in E.164 format
     */
    phoneNumber: string;
    /**
     * True if contact is the primary contact for the group
     */
    primaryContact: boolean;
    /**
     * Job title of the group contact
     */
    title: string;
    /**
     * List of contact types for the group contact
     */
    types: ContactResultTypesEnum[];
    /**
     * Current version of the record
     */
    version: string;
}
