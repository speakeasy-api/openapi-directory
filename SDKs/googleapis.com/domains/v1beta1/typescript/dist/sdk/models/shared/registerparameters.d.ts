import { SpeakeasyBase } from "../../../internal/utils";
import { Money } from "./money";
/**
 * Indicates whether the domain is available for registration. This value is accurate when obtained by calling `RetrieveRegisterParameters`, but is approximate when obtained by calling `SearchDomains`.
 */
export declare enum RegisterParametersAvailabilityEnum {
    AvailabilityUnspecified = "AVAILABILITY_UNSPECIFIED",
    Available = "AVAILABLE",
    Unavailable = "UNAVAILABLE",
    Unsupported = "UNSUPPORTED",
    Unknown = "UNKNOWN"
}
export declare enum RegisterParametersDomainNoticesEnum {
    DomainNoticeUnspecified = "DOMAIN_NOTICE_UNSPECIFIED",
    HstsPreloaded = "HSTS_PRELOADED"
}
export declare enum RegisterParametersSupportedPrivacyEnum {
    ContactPrivacyUnspecified = "CONTACT_PRIVACY_UNSPECIFIED",
    PublicContactData = "PUBLIC_CONTACT_DATA",
    PrivateContactData = "PRIVATE_CONTACT_DATA",
    RedactedContactData = "REDACTED_CONTACT_DATA"
}
/**
 * Parameters required to register a new domain.
 */
export declare class RegisterParameters extends SpeakeasyBase {
    /**
     * Indicates whether the domain is available for registration. This value is accurate when obtained by calling `RetrieveRegisterParameters`, but is approximate when obtained by calling `SearchDomains`.
     */
    availability?: RegisterParametersAvailabilityEnum;
    /**
     * The domain name. Unicode domain names are expressed in Punycode format.
     */
    domainName?: string;
    /**
     * Notices about special properties of the domain.
     */
    domainNotices?: RegisterParametersDomainNoticesEnum[];
    /**
     * Contact privacy options that the domain supports.
     */
    supportedPrivacy?: RegisterParametersSupportedPrivacyEnum[];
    /**
     * Represents an amount of money with its currency type.
     */
    yearlyPrice?: Money;
}
