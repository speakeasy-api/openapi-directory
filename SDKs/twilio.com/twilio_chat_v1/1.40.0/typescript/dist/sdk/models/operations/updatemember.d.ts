import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const UpdateMemberServerList: readonly ["https://chat.twilio.com"];
export declare class UpdateMemberSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class UpdateMemberUpdateMemberRequest extends SpeakeasyBase {
    /**
     * The index of the last [Message](https://www.twilio.com/docs/api/chat/rest/messages) that the Member has read within the [Channel](https://www.twilio.com/docs/api/chat/rest/channels).
     */
    lastConsumedMessageIndex?: number;
    /**
     * The SID of the [Role](https://www.twilio.com/docs/api/chat/rest/roles) to assign to the member. The default roles are those specified on the [Service](https://www.twilio.com/docs/chat/api/services).
     */
    roleSid?: string;
}
export declare class UpdateMemberRequest extends SpeakeasyBase {
    /**
     * The unique ID of the [Channel](https://www.twilio.com/docs/api/chat/rest/channels) the member to update belongs to. Can be the Channel resource's `sid` or `unique_name`.
     */
    channelSid: string;
    requestBody?: UpdateMemberUpdateMemberRequest;
    /**
     * The SID of the [Service](https://www.twilio.com/docs/api/chat/rest/services) to update the resource from.
     */
    serviceSid: string;
    /**
     * The Twilio-provided string that uniquely identifies the Member resource to update.
     */
    sid: string;
}
export declare class UpdateMemberResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    chatV1ServiceChannelMember?: shared.ChatV1ServiceChannelMember;
}
