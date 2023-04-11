import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Created
 */
export declare class FlexV2WebChannel extends SpeakeasyBase {
    /**
     * The unique string representing the [Conversation resource](https://www.twilio.com/docs/conversations/api/conversation-resource) created.
     */
    conversationSid?: string;
    /**
     * The unique string representing the User created and should be authorized to participate in the Conversation. For more details, see [User Identity & Access Tokens](https://www.twilio.com/docs/conversations/identity).
     */
    identity?: string;
}
