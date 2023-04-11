import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const FetchMemberServerList: readonly ["https://chat.twilio.com"];
export declare class FetchMemberSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class FetchMemberRequest extends SpeakeasyBase {
    /**
     * The SID of the [Channel](https://www.twilio.com/docs/chat/channels) the Member resource to fetch belongs to. This value can be the Channel resource's `sid` or `unique_name`.
     */
    channelSid: string;
    /**
     * The SID of the [Service](https://www.twilio.com/docs/chat/rest/service-resource) to fetch the Member resource from.
     */
    serviceSid: string;
    /**
     * The SID of the Member resource to fetch. This value can be either the Member's `sid` or its `identity` value.
     */
    sid: string;
}
export declare class FetchMemberResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    chatV2ServiceChannelMember?: shared.ChatV2ServiceChannelMember;
}
