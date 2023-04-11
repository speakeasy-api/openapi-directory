import { SpeakeasyBase } from "../../../internal/utils";
import { Address } from "./address";
import { Customer } from "./customer";
/**
 * Intended use for the token.
 */
export declare enum CustomerTokenCreationRequestIntendedUseEnum {
    Subscription = "SUBSCRIPTION"
}
export declare class CustomerTokenCreationRequest extends SpeakeasyBase {
    billingAddress?: Address;
    customer?: Customer;
    /**
     * Description of the purpose of the token.
     */
    description: string;
    /**
     * Intended use for the token.
     */
    intendedUse: CustomerTokenCreationRequestIntendedUseEnum;
    /**
     * RFC 1766 customer's locale.
     */
    locale: string;
    /**
     * ISO 3166 alpha-2 purchase country.
     */
    purchaseCountry: string;
    /**
     * ISO 4217 purchase currency.
     */
    purchaseCurrency: string;
}
