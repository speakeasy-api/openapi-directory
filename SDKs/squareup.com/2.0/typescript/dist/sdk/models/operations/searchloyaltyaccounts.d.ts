import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class SearchLoyaltyAccountsSecurity extends SpeakeasyBase {
    oauth2: string;
}
export declare class SearchLoyaltyAccountsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    searchLoyaltyAccountsResponse?: shared.SearchLoyaltyAccountsResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
