import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const UPDATEMEMBER_SERVERS: string[];
export declare class UpdateMemberPathParams extends SpeakeasyBase {
    channelSid: string;
    serviceSid: string;
    sid: string;
}
export declare class UpdateMemberHeaders extends SpeakeasyBase {
    xTwilioWebhookEnabled?: shared.MemberEnumWebhookEnabledTypeEnum;
}
export declare class UpdateMemberUpdateMemberRequest extends SpeakeasyBase {
    attributes?: string;
    dateCreated?: Date;
    dateUpdated?: Date;
    lastConsumedMessageIndex?: number;
    lastConsumptionTimestamp?: Date;
    roleSid?: string;
}
export declare class UpdateMemberSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class UpdateMemberRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: UpdateMemberPathParams;
    headers: UpdateMemberHeaders;
    request?: UpdateMemberUpdateMemberRequest;
    security: UpdateMemberSecurity;
}
export declare class UpdateMemberResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    chatV2ServiceChannelMember?: shared.ChatV2ServiceChannelMember;
}
