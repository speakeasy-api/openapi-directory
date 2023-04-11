import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const CreateChannelWebhookServerList: readonly ["https://ip-messaging.twilio.com"];
export declare class CreateChannelWebhookSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class CreateChannelWebhookCreateChannelWebhookRequest extends SpeakeasyBase {
    configurationFilters?: string[];
    configurationFlowSid?: string;
    configurationMethod?: shared.ChannelWebhookEnumMethodEnum;
    configurationRetryCount?: number;
    configurationTriggers?: string[];
    configurationUrl?: string;
    type: shared.ChannelWebhookEnumTypeEnum;
}
export declare class CreateChannelWebhookRequest extends SpeakeasyBase {
    channelSid: string;
    requestBody?: CreateChannelWebhookCreateChannelWebhookRequest;
    serviceSid: string;
}
export declare class CreateChannelWebhookResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Created
     */
    ipMessagingV2ServiceChannelChannelWebhook?: shared.IpMessagingV2ServiceChannelChannelWebhook;
}
