import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const FetchInviteServerList: readonly ["https://chat.twilio.com"];
export declare class FetchInviteSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class FetchInviteRequest extends SpeakeasyBase {
    /**
     * The SID of the [Channel](https://www.twilio.com/docs/api/chat/rest/channels) the resource to fetch belongs to.
     */
    channelSid: string;
    /**
     * The SID of the [Service](https://www.twilio.com/docs/api/chat/rest/services) to fetch the resource from.
     */
    serviceSid: string;
    /**
     * The Twilio-provided string that uniquely identifies the Invite resource to fetch.
     */
    sid: string;
}
export declare class FetchInviteResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    chatV1ServiceChannelInvite?: shared.ChatV1ServiceChannelInvite;
}
