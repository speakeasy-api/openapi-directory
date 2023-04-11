import { SpeakeasyBase } from "../../../internal/utils";
import { ChannelEnumChannelTypeEnum } from "./channelenumchanneltypeenum";
/**
 * Created
 */
export declare class ChatV2ServiceChannel extends SpeakeasyBase {
    /**
     * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Channel resource.
     */
    accountSid?: string;
    /**
     * The JSON string that stores application-specific data. If attributes have not been set, `{}` is returned.
     */
    attributes?: string;
    /**
     * The `identity` of the User that created the channel. If the Channel was created by using the API, the value is `system`.
     */
    createdBy?: string;
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
     * The absolute URLs of the [Members](https://www.twilio.com/docs/chat/rest/member-resource), [Messages](https://www.twilio.com/docs/chat/rest/message-resource), [Invites](https://www.twilio.com/docs/chat/rest/invite-resource), Webhooks and, if it exists, the last [Message](https://www.twilio.com/docs/chat/rest/message-resource) for the Channel.
     */
    links?: Record<string, any>;
    /**
     * The number of Members in the Channel.
     */
    membersCount?: number;
    /**
     * The number of Messages that have been passed in the Channel.
     */
    messagesCount?: number;
    /**
     * The SID of the [Service](https://www.twilio.com/docs/chat/rest/service-resource) the Channel resource is associated with.
     */
    serviceSid?: string;
    /**
     * The unique string that we created to identify the Channel resource.
     */
    sid?: string;
    type?: ChannelEnumChannelTypeEnum;
    /**
     * An application-defined string that uniquely identifies the resource. It can be used to address the resource in place of the resource's `sid` in the URL.
     */
    uniqueName?: string;
    /**
     * The absolute URL of the Channel resource.
     */
    url?: string;
}
