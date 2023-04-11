import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const FetchMessageServerList: readonly ["https://chat.twilio.com"];
export declare class FetchMessageSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class FetchMessageRequest extends SpeakeasyBase {
    /**
     * The SID of the [Channel](https://www.twilio.com/docs/chat/channels) the Message resource to fetch belongs to. This value can be the Channel resource's `sid` or `unique_name`.
     */
    channelSid: string;
    /**
     * The SID of the [Service](https://www.twilio.com/docs/chat/rest/service-resource) to fetch the Message resource from.
     */
    serviceSid: string;
    /**
     * The SID of the Message resource to fetch.
     */
    sid: string;
}
export declare class FetchMessageResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    chatV2ServiceChannelMessage?: shared.ChatV2ServiceChannelMessage;
}
