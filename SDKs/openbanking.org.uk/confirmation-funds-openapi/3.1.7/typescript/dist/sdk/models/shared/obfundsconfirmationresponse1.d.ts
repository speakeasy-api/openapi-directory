import { SpeakeasyBase } from "../../../internal/utils";
import { Links } from "./links";
import { Meta } from "./meta";
/**
 * Amount of money to be confirmed as available funds in the debtor account. Contains an Amount and a Currency.
 */
export declare class OBFundsConfirmationResponse1DataInstructedAmount extends SpeakeasyBase {
    /**
     * A number of monetary units specified in an active currency where the unit of currency is explicit and compliant with ISO 4217.
     */
    amount: string;
    /**
     * A code allocated to a currency by a Maintenance Agency under an international identification scheme, as described in the latest edition of the international standard ISO 4217 "Codes for the representation of currencies and funds".
     */
    currency: string;
}
export declare class OBFundsConfirmationResponse1Data extends SpeakeasyBase {
    /**
     * Unique identification as assigned by the ASPSP to uniquely identify the funds confirmation consent resource.
     */
    consentId: string;
    /**
     * Date and time at which the resource was created.All dates in the JSON payloads are represented in ISO 8601 date-time format.
     *
     * @remarks
     * All date-time fields in responses must include the timezone. An example is below:
     * 2017-04-05T10:43:07+00:00
     */
    creationDateTime: Date;
    /**
     * Flag to indicate the result of a confirmation of funds check.
     */
    fundsAvailable: boolean;
    /**
     * Unique identification as assigned by the ASPSP to uniquely identify the funds confirmation resource.
     */
    fundsConfirmationId: string;
    /**
     * Amount of money to be confirmed as available funds in the debtor account. Contains an Amount and a Currency.
     */
    instructedAmount: OBFundsConfirmationResponse1DataInstructedAmount;
    /**
     * Unique reference, as assigned by the CBPII, to unambiguously refer to the request related to the payment transaction.
     */
    reference: string;
}
/**
 * Funds Confirmation Created
 */
export declare class OBFundsConfirmationResponse1 extends SpeakeasyBase {
    data: OBFundsConfirmationResponse1Data;
    /**
     * Links relevant to the payload
     */
    links?: Links;
    /**
     * Meta Data relevant to the payload
     */
    meta?: Meta;
}
