import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const CreateMessageServerList: readonly ["https://ip-messaging.twilio.com"];
export declare class CreateMessageSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class CreateMessageCreateMessageRequest extends SpeakeasyBase {
    attributes?: string;
    body: string;
    from?: string;
}
export declare class CreateMessageRequest extends SpeakeasyBase {
    channelSid: string;
    requestBody?: CreateMessageCreateMessageRequest;
    serviceSid: string;
}
export declare class CreateMessageResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Created
     */
    ipMessagingV1ServiceChannelMessage?: shared.IpMessagingV1ServiceChannelMessage;
}
