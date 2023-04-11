import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetBankAccountRequest extends SpeakeasyBase {
    /**
     * The unique identifier of the application in Noyo
     */
    applicationId: string;
    /**
     * The unique identifier of the bank account in Noyo
     */
    bankAccountId: string;
}
export declare class GetBankAccountResponse extends SpeakeasyBase {
    /**
     * Successful Response - Returns a single Bank Account
     */
    bankAccountResult?: shared.BankAccountResult;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
