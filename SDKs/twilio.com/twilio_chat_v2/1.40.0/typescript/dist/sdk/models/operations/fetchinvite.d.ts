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
     * The SID of the [Channel](https://www.twilio.com/docs/chat/channels) the Invite resource to fetch belongs to. This value can be the Channel resource's `sid` or `unique_name`.
     */
    channelSid: string;
    /**
     * The SID of the [Service](https://www.twilio.com/docs/chat/rest/service-resource) to fetch the Invite resource from.
     */
    serviceSid: string;
    /**
     * The SID of the Invite resource to fetch.
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
    chatV2ServiceChannelInvite?: shared.ChatV2ServiceChannelInvite;
}
