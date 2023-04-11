import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CreateBankAccountRequest extends SpeakeasyBase {
    bankAccountCreateRequest: shared.BankAccountCreateRequest;
    /**
     * The unique identifier of the application in Noyo
     */
    applicationId: string;
}
export declare class CreateBankAccountResponse extends SpeakeasyBase {
    /**
     * Successful Response - Returns a single Bank Account
     */
    bankAccountResult?: shared.BankAccountResult;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
