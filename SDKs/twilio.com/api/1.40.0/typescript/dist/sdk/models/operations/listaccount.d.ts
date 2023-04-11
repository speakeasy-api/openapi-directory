import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const ListAccountServerList: readonly ["https://api.twilio.com"];
export declare class ListAccountSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class ListAccountRequest extends SpeakeasyBase {
    /**
     * Only return the Account resources with friendly names that exactly match this name.
     */
    friendlyName?: string;
    /**
     * The page index. This value is simply for client state.
     */
    page?: number;
    /**
     * How many resources to return in each list page. The default is 50, and the maximum is 1000.
     */
    pageSize?: number;
    /**
     * The page token. This is provided by the API.
     */
    pageToken?: string;
    /**
     * Only return Account resources with the given status. Can be `closed`, `suspended` or `active`.
     */
    status?: shared.AccountEnumStatusEnum;
}
/**
 * OK
 */
export declare class ListAccountListAccountResponse extends SpeakeasyBase {
    accounts?: shared.ApiV2010Account[];
    end?: number;
    firstPageUri?: string;
    nextPageUri?: string;
    page?: number;
    pageSize?: number;
    previousPageUri?: string;
    start?: number;
    uri?: string;
}
export declare class ListAccountResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    listAccountResponse?: ListAccountListAccountResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
