import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetAllBankAccountsRequest extends SpeakeasyBase {
    /**
     * The unique identifier of the application in Noyo
     */
    applicationId: string;
}
export declare class GetAllBankAccountsResponse extends SpeakeasyBase {
    /**
     * Successful Response - Returns a list of Bank Accounts
     */
    bankAccountPaginatedResult?: shared.BankAccountPaginatedResult;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
