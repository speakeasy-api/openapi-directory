import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const CreateMessageServerList: readonly ["https://chat.twilio.com"];
export declare class CreateMessageSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class CreateMessageCreateMessageRequest extends SpeakeasyBase {
    /**
     * A valid JSON string that contains application-specific data.
     */
    attributes?: string;
    /**
     * The message to send to the channel. Can also be an empty string or `null`, which sets the value as an empty string. You can send structured data in the body by serializing it as a string.
     */
    body: string;
    /**
     * The [identity](https://www.twilio.com/docs/api/chat/guides/identity) of the new message's author. The default value is `system`.
     */
    from?: string;
}
export declare class CreateMessageRequest extends SpeakeasyBase {
    /**
     * The unique ID of the [Channel](https://www.twilio.com/docs/api/chat/rest/channels) the new resource belongs to. Can be the Channel resource's `sid` or `unique_name`.
     */
    channelSid: string;
    requestBody?: CreateMessageCreateMessageRequest;
    /**
     * The SID of the [Service](https://www.twilio.com/docs/api/chat/rest/services) to create the resource under.
     */
    serviceSid: string;
}
export declare class CreateMessageResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Created
     */
    chatV1ServiceChannelMessage?: shared.ChatV1ServiceChannelMessage;
}
