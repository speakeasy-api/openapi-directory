import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const CreateMemberServerList: readonly ["https://ip-messaging.twilio.com"];
export declare class CreateMemberSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class CreateMemberCreateMemberRequest extends SpeakeasyBase {
    attributes?: string;
    dateCreated?: Date;
    dateUpdated?: Date;
    identity: string;
    lastConsumedMessageIndex?: number;
    lastConsumptionTimestamp?: Date;
    roleSid?: string;
}
export declare class CreateMemberRequest extends SpeakeasyBase {
    channelSid: string;
    requestBody?: CreateMemberCreateMemberRequest;
    serviceSid: string;
    /**
     * The X-Twilio-Webhook-Enabled HTTP request header
     */
    xTwilioWebhookEnabled?: shared.MemberEnumWebhookEnabledTypeEnum;
}
export declare class CreateMemberResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Created
     */
    ipMessagingV2ServiceChannelMember?: shared.IpMessagingV2ServiceChannelMember;
}
