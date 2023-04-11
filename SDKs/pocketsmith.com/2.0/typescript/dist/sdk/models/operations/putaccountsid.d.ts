import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * The type of the account.
 */
export declare enum PutAccountsIdRequestBodyTypeEnum {
    Bank = "bank",
    Credits = "credits",
    Cash = "cash",
    Loans = "loans",
    Mortgage = "mortgage",
    Stocks = "stocks",
    Vehicle = "vehicle",
    Property = "property",
    Insurance = "insurance",
    OtherAsset = "other_asset",
    OtherLiability = "other_liability"
}
export declare class PutAccountsIdRequestBody extends SpeakeasyBase {
    /**
     * A new currency code for the account.
     */
    currencyCode?: string;
    /**
     * Whether the account is a net worth account.
     */
    isNetWorth?: boolean;
    /**
     * A new title for the account.
     */
    title?: string;
    /**
     * The type of the account.
     */
    type?: PutAccountsIdRequestBodyTypeEnum;
}
export declare class PutAccountsIdRequest extends SpeakeasyBase {
    requestBody?: PutAccountsIdRequestBody;
    /**
     * The unique identifier of the account.
     */
    id: number;
}
export declare class PutAccountsIdResponse extends SpeakeasyBase {
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
