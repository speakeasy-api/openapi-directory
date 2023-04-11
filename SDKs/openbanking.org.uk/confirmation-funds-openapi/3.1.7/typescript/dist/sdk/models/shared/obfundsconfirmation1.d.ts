import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Amount of money to be confirmed as available funds in the debtor account. Contains an Amount and a Currency.
 */
export declare class OBFundsConfirmation1DataInstructedAmount extends SpeakeasyBase {
    /**
     * A number of monetary units specified in an active currency where the unit of currency is explicit and compliant with ISO 4217.
     */
    amount: string;
    /**
     * A code allocated to a currency by a Maintenance Agency under an international identification scheme, as described in the latest edition of the international standard ISO 4217 "Codes for the representation of currencies and funds".
     */
    currency: string;
}
export declare class OBFundsConfirmation1Data extends SpeakeasyBase {
    /**
     * Unique identification as assigned by the ASPSP to uniquely identify the funds confirmation consent resource.
     */
    consentId: string;
    /**
     * Amount of money to be confirmed as available funds in the debtor account. Contains an Amount and a Currency.
     */
    instructedAmount: OBFundsConfirmation1DataInstructedAmount;
    /**
     * Unique reference, as assigned by the CBPII, to unambiguously refer to the request related to the payment transaction.
     */
    reference: string;
}
/**
 * Default
 */
export declare class OBFundsConfirmation1 extends SpeakeasyBase {
    data: OBFundsConfirmation1Data;
}
