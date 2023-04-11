import { SpeakeasyBase } from "../../../internal/utils";
import { NotificationChannelDescriptor } from "./notificationchanneldescriptor";
/**
 * The ListNotificationChannelDescriptors response.
 */
export declare class ListNotificationChannelDescriptorsResponse extends SpeakeasyBase {
    /**
     * The monitored resource descriptors supported for the specified project, optionally filtered.
     */
    channelDescriptors?: NotificationChannelDescriptor[];
    /**
     * If not empty, indicates that there may be more results that match the request. Use the value in the page_token field in a subsequent request to fetch the next set of results. If empty, all results have been returned.
     */
    nextPageToken?: string;
}
