import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const UpdateMemberServerList: readonly ["https://ip-messaging.twilio.com"];
export declare class UpdateMemberSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class UpdateMemberUpdateMemberRequest extends SpeakeasyBase {
    attributes?: string;
    dateCreated?: Date;
    dateUpdated?: Date;
    lastConsumedMessageIndex?: number;
    lastConsumptionTimestamp?: Date;
    roleSid?: string;
}
export declare class UpdateMemberRequest extends SpeakeasyBase {
    channelSid: string;
    requestBody?: UpdateMemberUpdateMemberRequest;
    serviceSid: string;
    sid: string;
    /**
     * The X-Twilio-Webhook-Enabled HTTP request header
     */
    xTwilioWebhookEnabled?: shared.MemberEnumWebhookEnabledTypeEnum;
}
export declare class UpdateMemberResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    ipMessagingV2ServiceChannelMember?: shared.IpMessagingV2ServiceChannelMember;
}
