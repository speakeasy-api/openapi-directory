import { SpeakeasyBase } from "../../../internal/utils";
import { AuthorizationCode } from "./authorizationcode";
import { Money } from "./money";
import { RegistrationInput } from "./registration";
export declare enum TransferDomainRequestContactNoticesEnum {
    ContactNoticeUnspecified = "CONTACT_NOTICE_UNSPECIFIED",
    PublicContactDataAcknowledgement = "PUBLIC_CONTACT_DATA_ACKNOWLEDGEMENT"
}
/**
 * Request for the `TransferDomain` method.
 */
export declare class TransferDomainRequestInput extends SpeakeasyBase {
    /**
     * Defines an authorization code.
     */
    authorizationCode?: AuthorizationCode;
    /**
     * The list of contact notices that you acknowledge. The notices needed here depend on the values specified in `registration.contact_settings`.
     */
    contactNotices?: TransferDomainRequestContactNoticesEnum[];
    /**
     * The `Registration` resource facilitates managing and configuring domain name registrations. There are several ways to create a new `Registration` resource: To create a new `Registration` resource, find a suitable domain name by calling the `SearchDomains` method with a query to see available domain name options. After choosing a name, call `RetrieveRegisterParameters` to ensure availability and obtain information like pricing, which is needed to build a call to `RegisterDomain`. Another way to create a new `Registration` is to transfer an existing domain from another registrar. First, go to the current registrar to unlock the domain for transfer and retrieve the domain's transfer authorization code. Then call `RetrieveTransferParameters` to confirm that the domain is unlocked and to get values needed to build a call to `TransferDomain`. Finally, you can create a new `Registration` by importing an existing domain managed with [Google Domains](https://domains.google/). First, call `RetrieveImportableDomains` to list domains to which the calling user has sufficient access. Then call `ImportDomain` on any domain names you want to use with Cloud Domains.
     */
    registration?: RegistrationInput;
    /**
     * Validate the request without actually transferring the domain.
     */
    validateOnly?: boolean;
    /**
     * Represents an amount of money with its currency type.
     */
    yearlyPrice?: Money;
}
