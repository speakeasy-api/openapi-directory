import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetApiV1AccountsSearchSecurity extends SpeakeasyBase {
    bearerAuth: string;
}
export declare class GetApiV1AccountsSearchRequest extends SpeakeasyBase {
    /**
     * Only who the user is following. Defaults to false.
     */
    following?: boolean;
    /**
     * Maximum number of results. Defaults to 40.
     */
    limit?: number;
    /**
     * What to search for
     */
    q: string;
    /**
     * Attempt WebFinger lookup. Defaults to false. Use this when `q` is an exact address.
     */
    resolve?: string;
}
export declare class GetApiV1AccountsSearchResponse extends SpeakeasyBase {
    /**
     * Accounts matching `q` in username or display name
     */
    accounts?: shared.Account[];
    contentType: string;
    /**
     * resolve=true, but the domain part of the user@domain address is not a currently live website
     */
    error?: shared.ErrorT;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
