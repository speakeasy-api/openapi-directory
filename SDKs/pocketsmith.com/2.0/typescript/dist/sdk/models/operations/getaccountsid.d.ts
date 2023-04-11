import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetAccountsIdRequest extends SpeakeasyBase {
    /**
     * The unique identifier of the account.
     */
    id: number;
}
export declare class GetAccountsIdResponse extends SpeakeasyBase {
    /**
     * Success
     */
    account?: shared.Account;
    contentType: string;
    /**
     * Not Allowed
     */
    error?: shared.ErrorT;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
