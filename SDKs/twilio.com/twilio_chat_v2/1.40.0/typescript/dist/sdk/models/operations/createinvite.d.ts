import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const CreateInviteServerList: readonly ["https://chat.twilio.com"];
export declare class CreateInviteSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class CreateInviteCreateInviteRequest extends SpeakeasyBase {
    /**
     * The `identity` value that uniquely identifies the new resource's [User](https://www.twilio.com/docs/chat/rest/user-resource) within the [Service](https://www.twilio.com/docs/chat/rest/service-resource). See [access tokens](https://www.twilio.com/docs/chat/create-tokens) for more info.
     */
    identity: string;
    /**
     * The SID of the [Role](https://www.twilio.com/docs/chat/rest/role-resource) assigned to the new member.
     */
    roleSid?: string;
}
export declare class CreateInviteRequest extends SpeakeasyBase {
    /**
     * The SID of the [Channel](https://www.twilio.com/docs/chat/channels) the new Invite resource belongs to. This value can be the Channel resource's `sid` or `unique_name`.
     */
    channelSid: string;
    requestBody?: CreateInviteCreateInviteRequest;
    /**
     * The SID of the [Service](https://www.twilio.com/docs/chat/rest/service-resource) to create the Invite resource under.
     */
    serviceSid: string;
}
export declare class CreateInviteResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Created
     */
    chatV2ServiceChannelInvite?: shared.ChatV2ServiceChannelInvite;
}
