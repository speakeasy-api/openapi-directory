import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PaymentsCreditorsListRequest extends SpeakeasyBase {
    account?: string;
    addressCountry?: string;
    agent?: string;
    currency?: string;
    /**
     * Number of results to return per page.
     */
    limit?: number;
    name?: string;
    /**
     * The initial index from which to return the results.
     */
    offset?: number;
    type?: string;
}
export declare class PaymentsCreditorsListResponse extends SpeakeasyBase {
    contentType: string;
    paginatedCreditorAccountList?: shared.PaginatedCreditorAccountList;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
