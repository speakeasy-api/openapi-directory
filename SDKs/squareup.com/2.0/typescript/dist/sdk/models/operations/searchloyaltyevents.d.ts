import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class SearchLoyaltyEventsSecurity extends SpeakeasyBase {
    oauth2: string;
}
export declare class SearchLoyaltyEventsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    searchLoyaltyEventsResponse?: shared.SearchLoyaltyEventsResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
