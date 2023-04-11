import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const UpdateMessageServerList: readonly ["https://chat.twilio.com"];
export declare class UpdateMessageSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class UpdateMessageUpdateMessageRequest extends SpeakeasyBase {
    /**
     * A valid JSON string that contains application-specific data.
     */
    attributes?: string;
    /**
     * The message to send to the channel. Can also be an empty string or `null`, which sets the value as an empty string. You can send structured data in the body by serializing it as a string.
     */
    body?: string;
}
export declare class UpdateMessageRequest extends SpeakeasyBase {
    /**
     * The unique ID of the [Channel](https://www.twilio.com/docs/api/chat/rest/channels) the message belongs to. Can be the Channel's `sid` or `unique_name`.
     */
    channelSid: string;
    requestBody?: UpdateMessageUpdateMessageRequest;
    /**
     * The SID of the [Service](https://www.twilio.com/docs/api/chat/rest/services) to update the resource from.
     */
    serviceSid: string;
    /**
     * The Twilio-provided string that uniquely identifies the Message resource to update.
     */
    sid: string;
}
export declare class UpdateMessageResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    chatV1ServiceChannelMessage?: shared.ChatV1ServiceChannelMessage;
}
