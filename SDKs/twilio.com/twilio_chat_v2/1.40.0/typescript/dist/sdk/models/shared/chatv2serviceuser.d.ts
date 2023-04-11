import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Created
 */
export declare class ChatV2ServiceUser extends SpeakeasyBase {
    /**
     * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the User resource.
     */
    accountSid?: string;
    /**
     * The JSON string that stores application-specific data. If attributes have not been set, `{}` is returned.
     */
    attributes?: string;
    /**
     * The date and time in GMT when the resource was created specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
     */
    dateCreated?: Date;
    /**
     * The date and time in GMT when the resource was last updated specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
     */
    dateUpdated?: Date;
    /**
     * The string that you assigned to describe the resource.
     */
    friendlyName?: string;
    /**
     * The application-defined string that uniquely identifies the resource's User within the [Service](https://www.twilio.com/docs/chat/rest/service-resource). This value is often a username or an email address, and is case-sensitive. See [access tokens](https://www.twilio.com/docs/chat/create-tokens) for more info.
     */
    identity?: string;
    /**
     * Whether the User has a potentially valid Push Notification registration (APN or GCM) for the Service instance. If at least one registration exists, `true`; otherwise `false`. This value is only returned by Fetch actions that return a single resource and `null` is always returned by a Read action. This value is `null` if the Service's `reachability_enabled` is `false`, and if the User has never had a notification registration, even if the Service's `reachability_enabled` is `true`.
     */
    isNotifiable?: boolean;
    /**
     * Whether the User is actively connected to the Service instance and online. This value is only returned by Fetch actions that return a single resource and `null` is always returned by a Read action. This value is `null` if the Service's `reachability_enabled` is `false`, if the User has never been online for the Service instance, even if the Service's `reachability_enabled` is `true`.
     */
    isOnline?: boolean;
    /**
     * The number of Channels the User is a Member of.
     */
    joinedChannelsCount?: number;
    /**
     * The absolute URLs of the [Channel](https://www.twilio.com/docs/chat/channels) and [Binding](https://www.twilio.com/docs/chat/rest/binding-resource) resources related to the user.
     */
    links?: Record<string, any>;
    /**
     * The SID of the [Role](https://www.twilio.com/docs/chat/rest/role-resource) assigned to the user.
     */
    roleSid?: string;
    /**
     * The SID of the [Service](https://www.twilio.com/docs/chat/rest/service-resource) the User resource is associated with.
     */
    serviceSid?: string;
    /**
     * The unique string that we created to identify the User resource.
     */
    sid?: string;
    /**
     * The absolute URL of the User resource.
     */
    url?: string;
}
