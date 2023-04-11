import { SpeakeasyBase } from "../../../internal/utils";
export declare class CreatePaymentChannelV4 extends SpeakeasyBase {
    accountName: string;
    /**
     * Either routing number and account number or only iban must be set
     */
    accountNumber?: string;
    /**
     * Valid ISO 3166 2 character country code. See the <a href="https://www.iso.org/iso-3166-country-codes.html" target="_blank" a>ISO specification</a> for details.
     */
    countryCode: string;
    /**
     * Valid ISO 4217 3 letter currency code. See the <a href="https://www.iso.org/iso-4217-currency-codes.html" target="_blank" a>ISO specification</a> for details.
     */
    currency: string;
    /**
     * Must match the regular expression ```^[A-Za-z0-9]+$```.
     */
    iban?: string;
    paymentChannelName?: string;
    /**
     * Either routing number and account number or only iban must be set
     */
    routingNumber?: string;
}
