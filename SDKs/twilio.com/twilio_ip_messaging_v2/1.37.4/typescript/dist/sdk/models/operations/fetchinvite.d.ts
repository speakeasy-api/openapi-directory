import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const FetchInviteServerList: readonly ["https://ip-messaging.twilio.com"];
export declare class FetchInvitePathParams extends SpeakeasyBase {
    channelSid: string;
    serviceSid: string;
    sid: string;
}
export declare class FetchInviteSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class FetchInviteRequest extends SpeakeasyBase {
    serverURL?: string;
    pathParams: FetchInvitePathParams;
    security: FetchInviteSecurity;
}
export declare class FetchInviteResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    ipMessagingV2ServiceChannelInvite?: shared.IpMessagingV2ServiceChannelInvite;
}
