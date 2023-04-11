import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetBankAccountByV1IdSecurity extends SpeakeasyBase {
    oauth2: string;
}
export declare class GetBankAccountByV1IdRequest extends SpeakeasyBase {
    /**
     * Connect V1 ID of the desired `BankAccount`. For more information, see
     *
     * @remarks
     * [Retrieve a bank account by using an ID issued by V1 Bank Accounts API](https://developer.squareup.com/docs/bank-accounts-api#retrieve-a-bank-account-by-using-an-id-issued-by-v1-bank-accounts-api).
     */
    v1BankAccountId: string;
}
export declare class GetBankAccountByV1IdResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    getBankAccountByV1IdResponse?: shared.GetBankAccountByV1IdResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
