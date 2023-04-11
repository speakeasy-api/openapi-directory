import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class SearchInvoicesSecurity extends SpeakeasyBase {
    oauth2: string;
}
export declare class SearchInvoicesResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    searchInvoicesResponse?: shared.SearchInvoicesResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
