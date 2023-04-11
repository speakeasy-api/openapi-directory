import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The provider (will be one of `messenger, viber_service_msg, whatsapp`).
 */
export declare enum AccountResponseProviderEnum {
    Messenger = "messenger",
    ViberServiceMsg = "viber_service_msg",
    Whatsapp = "whatsapp"
}
/**
 * OK.
 */
export declare class AccountResponse extends SpeakeasyBase {
    /**
     * The provider access token (only for `messenger`)
     */
    accessToken?: string;
    /**
     * The external api key for this account
     */
    apiKey: string;
    /**
     * The array of associated application ids
     */
    applications?: string[];
    /**
     * The external identifier for this account
     */
    externalId: string;
    /**
     * The account name
     */
    name?: string;
    /**
     * The provider (will be one of `messenger, viber_service_msg, whatsapp`).
     */
    provider: AccountResponseProviderEnum;
}
