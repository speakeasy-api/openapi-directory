import { SpeakeasyBase } from "../../../internal/utils";
export declare class SupportedCurrencyV2 extends SpeakeasyBase {
    /**
     * Valid ISO 4217 3 letter currency code. See the <a href="https://www.iso.org/iso-4217-currency-codes.html" target="_blank" a>ISO specification</a> for details.
     */
    currency?: string;
    /**
     * The max amount allowed in this currency
     */
    maxPaymentAmount?: number;
}
