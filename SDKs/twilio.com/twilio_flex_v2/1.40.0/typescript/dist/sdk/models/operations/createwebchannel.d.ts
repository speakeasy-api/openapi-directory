import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const CreateWebChannelServerList: readonly ["https://flex-api.twilio.com"];
export declare class CreateWebChannelSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class CreateWebChannelCreateWebChannelRequest extends SpeakeasyBase {
    /**
     * The SID of the Conversations Address. See [Address Configuration Resource](https://www.twilio.com/docs/conversations/api/address-configuration-resource) for configuration details. When a conversation is created on the Flex backend, the callback URL will be set to the corresponding Studio Flow SID or webhook URL in your address configuration.
     */
    addressSid: string;
    /**
     * The Conversation's friendly name. See the [Conversation resource](https://www.twilio.com/docs/conversations/api/conversation-resource) for an example.
     */
    chatFriendlyName?: string;
    /**
     * The Conversation participant's friendly name. See the [Conversation Participant Resource](https://www.twilio.com/docs/conversations/api/conversation-participant-resource) for an example.
     */
    customerFriendlyName?: string;
    /**
     * The pre-engagement data.
     */
    preEngagementData?: string;
}
export declare class CreateWebChannelResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Created
     */
    flexV2WebChannel?: shared.FlexV2WebChannel;
}
