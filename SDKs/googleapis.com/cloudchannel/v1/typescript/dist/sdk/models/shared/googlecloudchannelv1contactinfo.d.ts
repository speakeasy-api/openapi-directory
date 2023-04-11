import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Contact information for a customer account.
 */
export declare class GoogleCloudChannelV1ContactInfo extends SpeakeasyBase {
    /**
     * Output only. The customer account contact's display name, formatted as a combination of the customer's first and last name.
     */
    displayName?: string;
    /**
     * The customer account's contact email. Required for entitlements that create admin.google.com accounts, and serves as the customer's username for those accounts. Use this email to invite Team customers.
     */
    email?: string;
    /**
     * The customer account contact's first name. Optional for Team customers.
     */
    firstName?: string;
    /**
     * The customer account contact's last name. Optional for Team customers.
     */
    lastName?: string;
    /**
     * The customer account's contact phone number.
     */
    phone?: string;
    /**
     * Optional. The customer account contact's job title.
     */
    title?: string;
}
/**
 * Contact information for a customer account.
 */
export declare class GoogleCloudChannelV1ContactInfoInput extends SpeakeasyBase {
    /**
     * The customer account's contact email. Required for entitlements that create admin.google.com accounts, and serves as the customer's username for those accounts. Use this email to invite Team customers.
     */
    email?: string;
    /**
     * The customer account contact's first name. Optional for Team customers.
     */
    firstName?: string;
    /**
     * The customer account contact's last name. Optional for Team customers.
     */
    lastName?: string;
    /**
     * The customer account's contact phone number.
     */
    phone?: string;
    /**
     * Optional. The customer account contact's job title.
     */
    title?: string;
}
