import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const UpdateChannelWebhookServerList: readonly ["https://ip-messaging.twilio.com"];
export declare class UpdateChannelWebhookSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class UpdateChannelWebhookUpdateChannelWebhookRequest extends SpeakeasyBase {
    configurationFilters?: string[];
    configurationFlowSid?: string;
    configurationMethod?: shared.ChannelWebhookEnumMethodEnum;
    configurationRetryCount?: number;
    configurationTriggers?: string[];
    configurationUrl?: string;
}
export declare class UpdateChannelWebhookRequest extends SpeakeasyBase {
    channelSid: string;
    requestBody?: UpdateChannelWebhookUpdateChannelWebhookRequest;
    serviceSid: string;
    sid: string;
}
export declare class UpdateChannelWebhookResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    ipMessagingV2ServiceChannelChannelWebhook?: shared.IpMessagingV2ServiceChannelChannelWebhook;
}
