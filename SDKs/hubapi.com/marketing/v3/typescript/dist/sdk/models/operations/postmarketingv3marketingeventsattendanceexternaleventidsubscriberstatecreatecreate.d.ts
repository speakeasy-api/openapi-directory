import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PostMarketingV3MarketingEventsAttendanceExternalEventIdSubscriberStateCreateCreateSecurity extends SpeakeasyBase {
    oauth2Legacy?: string;
    privateAppsLegacy?: string;
}
export declare class PostMarketingV3MarketingEventsAttendanceExternalEventIdSubscriberStateCreateCreateRequest extends SpeakeasyBase {
    /**
     * The details of the contacts to subscribe to the event. Parameters of join and left time if state is Attended.
     */
    batchInputMarketingEventSubscriber: shared.BatchInputMarketingEventSubscriber;
    /**
     * The account id associated with the marketing event
     */
    externalAccountId?: string;
    /**
     * The id of the marketing event
     */
    externalEventId: string;
    /**
     * The new subscriber state for the HubSpot contacts and the specified marketing event. For example: 'register', 'attend' or 'cancel'.
     */
    subscriberState: string;
}
export declare class PostMarketingV3MarketingEventsAttendanceExternalEventIdSubscriberStateCreateCreateResponse extends SpeakeasyBase {
    /**
     * successful operation
     */
    batchResponseSubscriberVidResponse?: shared.BatchResponseSubscriberVidResponse;
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
