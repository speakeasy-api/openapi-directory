import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * The type of the account.
 */
export declare enum PostUsersIdAccountsRequestBodyTypeEnum {
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
export declare class PostUsersIdAccountsRequestBody extends SpeakeasyBase {
    /**
     * A currency code for the account.
     */
    currencyCode: string;
    /**
     * The ID of the institution to create this account in.
     */
    institutionId: number;
    /**
     * A title for the account.
     */
    title: string;
    /**
     * The type of the account.
     */
    type: PostUsersIdAccountsRequestBodyTypeEnum;
}
export declare class PostUsersIdAccountsRequest extends SpeakeasyBase {
    requestBody?: PostUsersIdAccountsRequestBody;
    /**
     * The unique identifier of the user.
     */
    id: number;
}
export declare class PostUsersIdAccountsResponse extends SpeakeasyBase {
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
