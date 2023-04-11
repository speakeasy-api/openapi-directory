import { SpeakeasyBase } from "../../../internal/utils";
import { BankAccount } from "./bankaccount";
import { ErrorT } from "./error";
/**
 * Response object returned by ListBankAccounts.
 */
export declare class ListBankAccountsResponse extends SpeakeasyBase {
    /**
     * List of BankAccounts associated with this account.
     */
    bankAccounts?: BankAccount[];
    /**
     * When a response is truncated, it includes a cursor that you can
     *
     * @remarks
     * use in a subsequent request to fetch next set of bank accounts.
     * If empty, this is the final response.
     *
     * For more information, see [Pagination](https://developer.squareup.com/docs/working-with-apis/pagination).
     */
    cursor?: string;
    /**
     * Information on errors encountered during the request.
     */
    errors?: ErrorT[];
}
