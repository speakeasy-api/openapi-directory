import { SpeakeasyBase } from "../../../internal/utils";
import { ServiceBindingEnumBindingTypeEnum } from "./servicebindingenumbindingtypeenum";
/**
 * OK
 */
export declare class ConversationsV1ServiceServiceBinding extends SpeakeasyBase {
    /**
     * The unique ID of the [Account](https://www.twilio.com/docs/iam/api/account) responsible for this binding.
     */
    accountSid?: string;
    bindingType?: ServiceBindingEnumBindingTypeEnum;
    /**
     * The SID of the [Conversation Service](https://www.twilio.com/docs/conversations/api/service-resource) the Binding resource is associated with.
     */
    chatServiceSid?: string;
    /**
     * The SID of the [Credential](https://www.twilio.com/docs/conversations/api/credential-resource) for the binding. See [push notification configuration](https://www.twilio.com/docs/chat/push-notification-configuration) for more info.
     */
    credentialSid?: string;
    /**
     * The date that this resource was created.
     */
    dateCreated?: Date;
    /**
     * The date that this resource was last updated.
     */
    dateUpdated?: Date;
    /**
     * The unique endpoint identifier for the Binding. The format of this value depends on the `binding_type`.
     */
    endpoint?: string;
    /**
     * The application-defined string that uniquely identifies the [Conversation User](https://www.twilio.com/docs/conversations/api/user-resource) within the [Conversation Service](https://www.twilio.com/docs/conversations/api/service-resource). See [access tokens](https://www.twilio.com/docs/conversations/create-tokens) for more info.
     */
    identity?: string;
    /**
     * The [Conversation message types](https://www.twilio.com/docs/chat/push-notification-configuration#push-types) the binding is subscribed to.
     */
    messageTypes?: string[];
    /**
     * A 34 character string that uniquely identifies this resource.
     */
    sid?: string;
    /**
     * An absolute API resource URL for this binding.
     */
    url?: string;
}
