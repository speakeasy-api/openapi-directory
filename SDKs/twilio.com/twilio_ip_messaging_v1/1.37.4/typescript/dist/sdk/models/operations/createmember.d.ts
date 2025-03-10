import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const CreateMemberServerList: readonly ["https://ip-messaging.twilio.com"];
export declare class CreateMemberPathParams extends SpeakeasyBase {
    channelSid: string;
    serviceSid: string;
}
export declare class CreateMemberCreateMemberRequest extends SpeakeasyBase {
    identity: string;
    roleSid?: string;
}
export declare class CreateMemberSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class CreateMemberRequest extends SpeakeasyBase {
    serverURL?: string;
    pathParams: CreateMemberPathParams;
    request?: CreateMemberCreateMemberRequest;
    security: CreateMemberSecurity;
}
export declare class CreateMemberResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    ipMessagingV1ServiceChannelMember?: shared.IpMessagingV1ServiceChannelMember;
}
