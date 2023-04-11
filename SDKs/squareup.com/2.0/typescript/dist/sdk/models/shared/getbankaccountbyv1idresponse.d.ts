import { SpeakeasyBase } from "../../../internal/utils";
import { BankAccount } from "./bankaccount";
import { ErrorT } from "./error";
/**
 * Response object returned by GetBankAccountByV1Id.
 */
export declare class GetBankAccountByV1IdResponse extends SpeakeasyBase {
    /**
     * Represents a bank account. For more information about
     *
     * @remarks
     * linking a bank account to a Square account, see
     * [Bank Accounts API](https://developer.squareup.com/docs/bank-accounts-api).
     */
    bankAccount?: BankAccount;
    /**
     * Information on errors encountered during the request.
     */
    errors?: ErrorT[];
}
