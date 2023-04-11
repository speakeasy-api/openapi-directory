import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Response Message for ListSubscribers.
 */
export declare class GoogleCloudChannelV1ListSubscribersResponse extends SpeakeasyBase {
    /**
     * A token that can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.
     */
    nextPageToken?: string;
    /**
     * List of service accounts which have subscriber access to the topic.
     */
    serviceAccounts?: string[];
    /**
     * Name of the topic registered with the reseller.
     */
    topic?: string;
}
