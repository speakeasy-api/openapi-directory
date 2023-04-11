import { SpeakeasyBase } from "../../../internal/utils";
/**
 * ^ Only incuded in the response if `Data. ReadRefundAccount` is set to `Yes` in the consent.
 */
export declare class OBCashAccountDebtor4 extends SpeakeasyBase {
    /**
     * ^ Identification assigned by an institution to identify an account. This identification is known by the account owner. | Max256Text
     */
    identification?: string;
    /**
     * ^ Name of the account, as assigned by the account servicing institution.  Usage The account name is the name or names of the account owner(s) represented at an account level. The account name is not the product name or the nickname of the account.
     */
    name?: string;
    /**
     * ^ Name of the identification scheme, in a coded form as published in an external list. | Namespaced Enumeration OBExternalAccountIdentification4Code
     */
    schemeName?: string;
    /**
     * ^ This is secondary identification of the account, as assigned by the account servicing institution.  This can be used by building societies to additionally identify accounts with a roll number (in addition to a sort code and account number combination) | Max34Text
     */
    secondaryIdentification?: string;
}
