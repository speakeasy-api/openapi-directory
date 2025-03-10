import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const CreateInviteServerList: readonly ["https://chat.twilio.com"];
export declare class CreateInvitePathParams extends SpeakeasyBase {
    channelSid: string;
    serviceSid: string;
}
export declare class CreateInviteCreateInviteRequest extends SpeakeasyBase {
    identity: string;
    roleSid?: string;
}
export declare class CreateInviteSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class CreateInviteRequest extends SpeakeasyBase {
    serverURL?: string;
    pathParams: CreateInvitePathParams;
    request?: CreateInviteCreateInviteRequest;
    security: CreateInviteSecurity;
}
export declare class CreateInviteResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    chatV2ServiceChannelInvite?: shared.ChatV2ServiceChannelInvite;
}
