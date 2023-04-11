import { SpeakeasyBase } from "../../../internal/utils";
import { AddressCountryEnumEnum } from "./addresscountryenumenum";
/**
 * Creditor account write serializer.
 */
export declare class CreditorAccountWriteRequest1 extends SpeakeasyBase {
    /**
     * Creditor account type identifier
     */
    account: string;
    addressCountry?: AddressCountryEnumEnum;
    /**
     * Creditor account address street
     */
    addressStreet?: string;
    /**
     * Creditor account BICFI Identifier
     */
    agent?: string;
    /**
     * Creditor account agent name
     */
    agentName?: string;
    /**
     * Creditor account currency
     */
    currency: string;
    /**
     * an Institution ID for this CreditorAccount
     */
    institutionId?: string;
    /**
     * Creditor account name
     */
    name: string;
    /**
     * Creditor account address post code
     */
    postCode?: string;
    /**
     * Creditor account type
     */
    type?: any;
}
