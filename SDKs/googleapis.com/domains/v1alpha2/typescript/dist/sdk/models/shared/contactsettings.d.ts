import { SpeakeasyBase } from "../../../internal/utils";
import { Contact } from "./contact";
/**
 * Required. Privacy setting for the contacts associated with the `Registration`.
 */
export declare enum ContactSettingsPrivacyEnum {
    ContactPrivacyUnspecified = "CONTACT_PRIVACY_UNSPECIFIED",
    PublicContactData = "PUBLIC_CONTACT_DATA",
    PrivateContactData = "PRIVATE_CONTACT_DATA",
    RedactedContactData = "REDACTED_CONTACT_DATA"
}
/**
 * Defines the contact information associated with a `Registration`. [ICANN](https://icann.org/) requires all domain names to have associated contact information. The `registrant_contact` is considered the domain's legal owner, and often the other contacts are identical.
 */
export declare class ContactSettings extends SpeakeasyBase {
    /**
     * Details required for a contact associated with a `Registration`.
     */
    adminContact?: Contact;
    /**
     * Required. Privacy setting for the contacts associated with the `Registration`.
     */
    privacy?: ContactSettingsPrivacyEnum;
    /**
     * Details required for a contact associated with a `Registration`.
     */
    registrantContact?: Contact;
    /**
     * Details required for a contact associated with a `Registration`.
     */
    technicalContact?: Contact;
}
