import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const DeleteMemberServerList: readonly ["https://ip-messaging.twilio.com"];
export declare class DeleteMemberSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class DeleteMemberRequest extends SpeakeasyBase {
    channelSid: string;
    serviceSid: string;
    sid: string;
    /**
     * The X-Twilio-Webhook-Enabled HTTP request header
     */
    xTwilioWebhookEnabled?: shared.MemberEnumWebhookEnabledTypeEnum;
}
export declare class DeleteMemberResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
