import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class SearchCustomersSecurity extends SpeakeasyBase {
    oauth2: string;
}
export declare class SearchCustomersResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    searchCustomersResponse?: shared.SearchCustomersResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
