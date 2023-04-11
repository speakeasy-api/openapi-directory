import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const ListSubscribedEventServerList: readonly ["https://events.twilio.com"];
export declare class ListSubscribedEventSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class ListSubscribedEventRequest extends SpeakeasyBase {
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
     * The unique SID identifier of the Subscription.
     */
    subscriptionSid: string;
}
export declare class ListSubscribedEventListSubscribedEventResponseMeta extends SpeakeasyBase {
    firstPageUrl?: string;
    key?: string;
    nextPageUrl?: string;
    page?: number;
    pageSize?: number;
    previousPageUrl?: string;
    url?: string;
}
/**
 * OK
 */
export declare class ListSubscribedEventListSubscribedEventResponse extends SpeakeasyBase {
    meta?: ListSubscribedEventListSubscribedEventResponseMeta;
    types?: shared.EventsV1SubscriptionSubscribedEvent[];
}
export declare class ListSubscribedEventResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    listSubscribedEventResponse?: ListSubscribedEventListSubscribedEventResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
