import { SpeakeasyBase } from "../../../internal/utils";
import { Money } from "./money";
export declare enum TransferParametersSupportedPrivacyEnum {
    ContactPrivacyUnspecified = "CONTACT_PRIVACY_UNSPECIFIED",
    PublicContactData = "PUBLIC_CONTACT_DATA",
    PrivateContactData = "PRIVATE_CONTACT_DATA",
    RedactedContactData = "REDACTED_CONTACT_DATA"
}
/**
 * Indicates whether the domain is protected by a transfer lock. For a transfer to succeed, this must show `UNLOCKED`. To unlock a domain, go to its current registrar.
 */
export declare enum TransferParametersTransferLockStateEnum {
    TransferLockStateUnspecified = "TRANSFER_LOCK_STATE_UNSPECIFIED",
    Unlocked = "UNLOCKED",
    Locked = "LOCKED"
}
/**
 * Parameters required to transfer a domain from another registrar.
 */
export declare class TransferParameters extends SpeakeasyBase {
    /**
     * The registrar that currently manages the domain.
     */
    currentRegistrar?: string;
    /**
     * The URL of the registrar that currently manages the domain.
     */
    currentRegistrarUri?: string;
    /**
     * The domain name. Unicode domain names are expressed in Punycode format.
     */
    domainName?: string;
    /**
     * The name servers that currently store the configuration of the domain.
     */
    nameServers?: string[];
    /**
     * Contact privacy options that the domain supports.
     */
    supportedPrivacy?: TransferParametersSupportedPrivacyEnum[];
    /**
     * Indicates whether the domain is protected by a transfer lock. For a transfer to succeed, this must show `UNLOCKED`. To unlock a domain, go to its current registrar.
     */
    transferLockState?: TransferParametersTransferLockStateEnum;
    /**
     * Represents an amount of money with its currency type.
     */
    yearlyPrice?: Money;
}
