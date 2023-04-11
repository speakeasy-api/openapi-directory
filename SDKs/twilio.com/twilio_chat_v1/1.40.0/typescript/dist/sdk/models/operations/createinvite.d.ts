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
     * The `identity` value that uniquely identifies the new resource's [User](https://www.twilio.com/docs/api/chat/rest/v1/user) within the [Service](https://www.twilio.com/docs/api/chat/rest/v1/service). See [access tokens](https://www.twilio.com/docs/api/chat/guides/create-tokens) for more info.
     */
    identity: string;
    /**
     * The SID of the [Role](https://www.twilio.com/docs/api/chat/rest/roles) assigned to the new member.
     */
    roleSid?: string;
}
export declare class CreateInviteRequest extends SpeakeasyBase {
    /**
     * The SID of the [Channel](https://www.twilio.com/docs/api/chat/rest/channels) the new resource belongs to.
     */
    channelSid: string;
    requestBody?: CreateInviteCreateInviteRequest;
    /**
     * The SID of the [Service](https://www.twilio.com/docs/api/chat/rest/services) to create the resource under.
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
    chatV1ServiceChannelInvite?: shared.ChatV1ServiceChannelInvite;
}
