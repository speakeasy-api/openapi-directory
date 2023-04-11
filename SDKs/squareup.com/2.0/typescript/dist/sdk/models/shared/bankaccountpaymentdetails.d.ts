import { SpeakeasyBase } from "../../../internal/utils";
import { ACHDetails } from "./achdetails";
import { ErrorT } from "./error";
/**
 * Additional details about BANK_ACCOUNT type payments.
 */
export declare class BankAccountPaymentDetails extends SpeakeasyBase {
    /**
     * The ownership type of the bank account performing the transfer.
     *
     * @remarks
     * The type can be `INDIVIDUAL`, `COMPANY`, or `UNKNOWN`.
     */
    accountOwnershipType?: string;
    /**
     * ACH-specific details about `BANK_ACCOUNT` type payments with the `transfer_type` of `ACH`.
     */
    achDetails?: ACHDetails;
    /**
     * The name of the bank associated with the bank account.
     */
    bankName?: string;
    /**
     * The two-letter ISO code representing the country the bank account is located in.
     */
    country?: string;
    /**
     * Information about errors encountered during the request.
     */
    errors?: ErrorT[];
    /**
     * Uniquely identifies the bank account for this seller and can be used
     *
     * @remarks
     * to determine if payments are from the same bank account.
     */
    fingerprint?: string;
    /**
     * The statement description as sent to the bank.
     */
    statementDescription?: string;
    /**
     * The type of the bank transfer. The type can be `ACH` or `UNKNOWN`.
     */
    transferType?: string;
}
