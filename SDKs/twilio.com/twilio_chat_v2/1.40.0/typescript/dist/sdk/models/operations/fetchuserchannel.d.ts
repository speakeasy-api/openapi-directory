import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const FetchUserChannelServerList: readonly ["https://chat.twilio.com"];
export declare class FetchUserChannelSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class FetchUserChannelRequest extends SpeakeasyBase {
    /**
     * The SID of the [Channel](https://www.twilio.com/docs/chat/channels) that has the User Channel to fetch. This value can be either the `sid` or the `unique_name` of the Channel to fetch.
     */
    channelSid: string;
    /**
     * The SID of the [Service](https://www.twilio.com/docs/chat/rest/service-resource) to fetch the User Channel resource from.
     */
    serviceSid: string;
    /**
     * The SID of the [User](https://www.twilio.com/docs/chat/rest/user-resource) to fetch the User Channel resource from. This value can be either the `sid` or the `identity` of the User resource.
     */
    userSid: string;
}
export declare class FetchUserChannelResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    chatV2ServiceUserUserChannel?: shared.ChatV2ServiceUserUserChannel;
}
