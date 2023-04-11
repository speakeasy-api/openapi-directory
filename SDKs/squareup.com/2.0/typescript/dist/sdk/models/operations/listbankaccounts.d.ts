import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ListBankAccountsSecurity extends SpeakeasyBase {
    oauth2: string;
}
export declare class ListBankAccountsRequest extends SpeakeasyBase {
    /**
     * The pagination cursor returned by a previous call to this endpoint.
     *
     * @remarks
     * Use it in the next `ListBankAccounts` request to retrieve the next set
     * of results.
     *
     * See the [Pagination](https://developer.squareup.com/docs/working-with-apis/pagination) guide for more information.
     */
    cursor?: string;
    /**
     * Upper limit on the number of bank accounts to return in the response.
     *
     * @remarks
     * Currently, 1000 is the largest supported limit. You can specify a limit
     * of up to 1000 bank accounts. This is also the default limit.
     */
    limit?: number;
    /**
     * Location ID. You can specify this optional filter
     *
     * @remarks
     * to retrieve only the linked bank accounts belonging to a specific location.
     */
    locationId?: string;
}
export declare class ListBankAccountsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    listBankAccountsResponse?: shared.ListBankAccountsResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
