import { SpeakeasyBase } from "../../../internal/utils";
import { BindingEnumBindingTypeEnum } from "./bindingenumbindingtypeenum";
/**
 * OK
 */
export declare class ChatV2ServiceBinding extends SpeakeasyBase {
    /**
     * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Binding resource.
     */
    accountSid?: string;
    bindingType?: BindingEnumBindingTypeEnum;
    /**
     * The SID of the [Credential](https://www.twilio.com/docs/chat/rest/credential-resource) for the binding. See [push notification configuration](https://www.twilio.com/docs/chat/push-notification-configuration) for more info.
     */
    credentialSid?: string;
    /**
     * The date and time in GMT when the resource was created specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
     */
    dateCreated?: Date;
    /**
     * The date and time in GMT when the resource was last updated specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
     */
    dateUpdated?: Date;
    /**
     * The unique endpoint identifier for the Binding. The format of this value depends on the `binding_type`.
     */
    endpoint?: string;
    /**
     * The application-defined string that uniquely identifies the resource's [User](https://www.twilio.com/docs/chat/rest/user-resource) within the [Service](https://www.twilio.com/docs/chat/rest/service-resource). See [access tokens](https://www.twilio.com/docs/chat/create-tokens) for more info.
     */
    identity?: string;
    /**
     * The absolute URLs of the Binding's [User](https://www.twilio.com/docs/chat/rest/user-resource).
     */
    links?: Record<string, any>;
    /**
     * The [Programmable Chat message types](https://www.twilio.com/docs/chat/push-notification-configuration#push-types) the binding is subscribed to.
     */
    messageTypes?: string[];
    /**
     * The SID of the [Service](https://www.twilio.com/docs/chat/rest/service-resource) the Binding resource is associated with.
     */
    serviceSid?: string;
    /**
     * The unique string that we created to identify the Binding resource.
     */
    sid?: string;
    /**
     * The absolute URL of the Binding resource.
     */
    url?: string;
}
