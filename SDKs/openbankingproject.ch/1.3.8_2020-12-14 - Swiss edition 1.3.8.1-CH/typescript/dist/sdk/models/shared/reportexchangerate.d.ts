import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Exchange Rate.
 */
export declare class ReportExchangeRate extends SpeakeasyBase {
    contractIdentification?: string;
    exchangeRate: string;
    quotationDate: Date;
    /**
     * ISO 4217 Alpha 3 currency code.
     *
     * @remarks
     *
     */
    sourceCurrency: string;
    /**
     * ISO 4217 Alpha 3 currency code.
     *
     * @remarks
     *
     */
    targetCurrency: string;
    unitCurrency: string;
}
