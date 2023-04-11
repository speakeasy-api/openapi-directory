import { SpeakeasyBase } from "../../../internal/utils";
import { ContactSettings } from "./contactsettings";
import { DnsSettings, DnsSettingsInput } from "./dnssettings";
import { ManagementSettings, ManagementSettingsInput } from "./managementsettings";
/**
 * The `Registration` resource facilitates managing and configuring domain name registrations. There are several ways to create a new `Registration` resource: To create a new `Registration` resource, find a suitable domain name by calling the `SearchDomains` method with a query to see available domain name options. After choosing a name, call `RetrieveRegisterParameters` to ensure availability and obtain information like pricing, which is needed to build a call to `RegisterDomain`. Another way to create a new `Registration` is to transfer an existing domain from another registrar. First, go to the current registrar to unlock the domain for transfer and retrieve the domain's transfer authorization code. Then call `RetrieveTransferParameters` to confirm that the domain is unlocked and to get values needed to build a call to `TransferDomain`. Finally, you can create a new `Registration` by importing an existing domain managed with [Google Domains](https://domains.google/). First, call `RetrieveImportableDomains` to list domains to which the calling user has sufficient access. Then call `ImportDomain` on any domain names you want to use with Cloud Domains.
 */
export declare class RegistrationInput extends SpeakeasyBase {
    /**
     * Defines the contact information associated with a `Registration`. [ICANN](https://icann.org/) requires all domain names to have associated contact information. The `registrant_contact` is considered the domain's legal owner, and often the other contacts are identical.
     */
    contactSettings?: ContactSettings;
    /**
     * Defines the DNS configuration of a `Registration`, including name servers, DNSSEC, and glue records.
     */
    dnsSettings?: DnsSettingsInput;
    /**
     * Required. Immutable. The domain name. Unicode domain names must be expressed in Punycode format.
     */
    domainName?: string;
    /**
     * Set of labels associated with the `Registration`.
     */
    labels?: Record<string, string>;
    /**
     * Defines renewal, billing, and transfer settings for a `Registration`.
     */
    managementSettings?: ManagementSettingsInput;
    /**
     * Defines the contact information associated with a `Registration`. [ICANN](https://icann.org/) requires all domain names to have associated contact information. The `registrant_contact` is considered the domain's legal owner, and often the other contacts are identical.
     */
    pendingContactSettings?: ContactSettings;
}
export declare enum RegistrationIssuesEnum {
    IssueUnspecified = "ISSUE_UNSPECIFIED",
    ContactSupport = "CONTACT_SUPPORT",
    UnverifiedEmail = "UNVERIFIED_EMAIL"
}
/**
 * Output only. The reason the domain registration failed. Only set for domains in REGISTRATION_FAILED state.
 */
export declare enum RegistrationRegisterFailureReasonEnum {
    RegisterFailureReasonUnspecified = "REGISTER_FAILURE_REASON_UNSPECIFIED",
    RegisterFailureReasonUnknown = "REGISTER_FAILURE_REASON_UNKNOWN",
    DomainNotAvailable = "DOMAIN_NOT_AVAILABLE",
    InvalidContacts = "INVALID_CONTACTS"
}
/**
 * Output only. The state of the `Registration`
 */
export declare enum RegistrationStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    RegistrationPending = "REGISTRATION_PENDING",
    RegistrationFailed = "REGISTRATION_FAILED",
    TransferPending = "TRANSFER_PENDING",
    TransferFailed = "TRANSFER_FAILED",
    ImportPending = "IMPORT_PENDING",
    Active = "ACTIVE",
    Suspended = "SUSPENDED",
    Exported = "EXPORTED"
}
export declare enum RegistrationSupportedPrivacyEnum {
    ContactPrivacyUnspecified = "CONTACT_PRIVACY_UNSPECIFIED",
    PublicContactData = "PUBLIC_CONTACT_DATA",
    PrivateContactData = "PRIVATE_CONTACT_DATA",
    RedactedContactData = "REDACTED_CONTACT_DATA"
}
/**
 * Output only. The reason the domain transfer failed. Only set for domains in TRANSFER_FAILED state.
 */
export declare enum RegistrationTransferFailureReasonEnum {
    TransferFailureReasonUnspecified = "TRANSFER_FAILURE_REASON_UNSPECIFIED",
    TransferFailureReasonUnknown = "TRANSFER_FAILURE_REASON_UNKNOWN",
    EmailConfirmationFailure = "EMAIL_CONFIRMATION_FAILURE",
    DomainNotRegistered = "DOMAIN_NOT_REGISTERED",
    DomainHasTransferLock = "DOMAIN_HAS_TRANSFER_LOCK",
    InvalidAuthorizationCode = "INVALID_AUTHORIZATION_CODE",
    TransferCancelled = "TRANSFER_CANCELLED",
    TransferRejected = "TRANSFER_REJECTED",
    InvalidRegistrantEmailAddress = "INVALID_REGISTRANT_EMAIL_ADDRESS",
    DomainNotEligibleForTransfer = "DOMAIN_NOT_ELIGIBLE_FOR_TRANSFER",
    TransferAlreadyPending = "TRANSFER_ALREADY_PENDING"
}
/**
 * The `Registration` resource facilitates managing and configuring domain name registrations. There are several ways to create a new `Registration` resource: To create a new `Registration` resource, find a suitable domain name by calling the `SearchDomains` method with a query to see available domain name options. After choosing a name, call `RetrieveRegisterParameters` to ensure availability and obtain information like pricing, which is needed to build a call to `RegisterDomain`. Another way to create a new `Registration` is to transfer an existing domain from another registrar. First, go to the current registrar to unlock the domain for transfer and retrieve the domain's transfer authorization code. Then call `RetrieveTransferParameters` to confirm that the domain is unlocked and to get values needed to build a call to `TransferDomain`. Finally, you can create a new `Registration` by importing an existing domain managed with [Google Domains](https://domains.google/). First, call `RetrieveImportableDomains` to list domains to which the calling user has sufficient access. Then call `ImportDomain` on any domain names you want to use with Cloud Domains.
 */
export declare class Registration extends SpeakeasyBase {
    /**
     * Defines the contact information associated with a `Registration`. [ICANN](https://icann.org/) requires all domain names to have associated contact information. The `registrant_contact` is considered the domain's legal owner, and often the other contacts are identical.
     */
    contactSettings?: ContactSettings;
    /**
     * Output only. The creation timestamp of the `Registration` resource.
     */
    createTime?: string;
    /**
     * Defines the DNS configuration of a `Registration`, including name servers, DNSSEC, and glue records.
     */
    dnsSettings?: DnsSettings;
    /**
     * Required. Immutable. The domain name. Unicode domain names must be expressed in Punycode format.
     */
    domainName?: string;
    /**
     * Output only. The expiration timestamp of the `Registration`.
     */
    expireTime?: string;
    /**
     * Output only. The set of issues with the `Registration` that require attention.
     */
    issues?: RegistrationIssuesEnum[];
    /**
     * Set of labels associated with the `Registration`.
     */
    labels?: Record<string, string>;
    /**
     * Defines renewal, billing, and transfer settings for a `Registration`.
     */
    managementSettings?: ManagementSettings;
    /**
     * Output only. Name of the `Registration` resource, in the format `projects/* /locations/* /registrations/`.
     */
    name?: string;
    /**
     * Defines the contact information associated with a `Registration`. [ICANN](https://icann.org/) requires all domain names to have associated contact information. The `registrant_contact` is considered the domain's legal owner, and often the other contacts are identical.
     */
    pendingContactSettings?: ContactSettings;
    /**
     * Output only. The reason the domain registration failed. Only set for domains in REGISTRATION_FAILED state.
     */
    registerFailureReason?: RegistrationRegisterFailureReasonEnum;
    /**
     * Output only. The state of the `Registration`
     */
    state?: RegistrationStateEnum;
    /**
     * Output only. Set of options for the `contact_settings.privacy` field that this `Registration` supports.
     */
    supportedPrivacy?: RegistrationSupportedPrivacyEnum[];
    /**
     * Output only. The reason the domain transfer failed. Only set for domains in TRANSFER_FAILED state.
     */
    transferFailureReason?: RegistrationTransferFailureReasonEnum;
}
