import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const ListMessageServerList: readonly ["https://chat.twilio.com"];
export declare class ListMessageSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class ListMessageRequest extends SpeakeasyBase {
    /**
     * The SID of the [Channel](https://www.twilio.com/docs/chat/channels) the Message resource to read belongs to. This value can be the Channel resource's `sid` or `unique_name`.
     */
    channelSid: string;
    /**
     * The sort order of the returned messages. Can be: `asc` (ascending) or `desc` (descending) with `asc` as the default.
     */
    order?: shared.MessageEnumOrderTypeEnum;
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
     * The SID of the [Service](https://www.twilio.com/docs/chat/rest/service-resource) to read the Message resources from.
     */
    serviceSid: string;
}
export declare class ListMessageListMessageResponseMeta extends SpeakeasyBase {
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
export declare class ListMessageListMessageResponse extends SpeakeasyBase {
    messages?: shared.ChatV2ServiceChannelMessage[];
    meta?: ListMessageListMessageResponseMeta;
}
export declare class ListMessageResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    listMessageResponse?: ListMessageListMessageResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
