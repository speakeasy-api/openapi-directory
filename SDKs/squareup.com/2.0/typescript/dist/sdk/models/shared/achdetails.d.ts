import { SpeakeasyBase } from "../../../internal/utils";
/**
 * ACH-specific details about `BANK_ACCOUNT` type payments with the `transfer_type` of `ACH`.
 */
export declare class ACHDetails extends SpeakeasyBase {
    /**
     * The last few digits of the bank account number.
     */
    accountNumberSuffix?: string;
    /**
     * The type of the bank account performing the transfer. The account type can be `CHECKING`,
     *
     * @remarks
     * `SAVINGS`, or `UNKNOWN`.
     */
    accountType?: string;
    /**
     * The routing number for the bank account.
     */
    routingNumber?: string;
}
