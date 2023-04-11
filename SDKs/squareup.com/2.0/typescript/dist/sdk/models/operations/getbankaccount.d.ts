import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetBankAccountSecurity extends SpeakeasyBase {
    oauth2: string;
}
export declare class GetBankAccountRequest extends SpeakeasyBase {
    /**
     * Square-issued ID of the desired `BankAccount`.
     */
    bankAccountId: string;
}
export declare class GetBankAccountResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    getBankAccountResponse?: shared.GetBankAccountResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
