import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class SearchSubscriptionsSecurity extends SpeakeasyBase {
    oauth2: string;
}
export declare class SearchSubscriptionsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    searchSubscriptionsResponse?: shared.SearchSubscriptionsResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
