import { SpeakeasyBase } from "../../../internal/utils";
import { ChannelEnumChannelTypeEnum } from "./channelenumchanneltypeenum";
/**
 * Created
 */
export declare class ChatV1ServiceChannel extends SpeakeasyBase {
    /**
     * The SID of the [Account](https://www.twilio.com/docs/api/rest/account) that created the Channel resource.
     */
    accountSid?: string;
    /**
     * The JSON string that stores application-specific data. **Note** If this property has been assigned a value, it's only  displayed in a FETCH action that returns a single resource; otherwise, it's null. If the attributes have not been set, `{}` is returned.
     */
    attributes?: string;
    /**
     * The `identity` of the User that created the channel. If the Channel was created by using the API, the value is `system`.
     */
    createdBy?: string;
    /**
     * The date and time in GMT when the resource was created specified in [RFC 2822](http://www.ietf.org/rfc/rfc2822.txt) format.
     */
    dateCreated?: Date;
    /**
     * The date and time in GMT when the resource was last updated specified in [RFC 2822](http://www.ietf.org/rfc/rfc2822.txt) format.
     */
    dateUpdated?: Date;
    /**
     * The string that you assigned to describe the resource.
     */
    friendlyName?: string;
    /**
     * The absolute URLs of the [Members](https://www.twilio.com/docs/chat/api/members), [Messages](https://www.twilio.com/docs/chat/api/messages) , [Invites](https://www.twilio.com/docs/chat/api/invites) and, if it exists, the last [Message](https://www.twilio.com/docs/chat/api/messages) for the Channel.
     */
    links?: Record<string, any>;
    /**
     * The number of Members in the Channel.
     */
    membersCount?: number;
    /**
     * The number of Messages in the Channel.
     */
    messagesCount?: number;
    /**
     * The SID of the [Service](https://www.twilio.com/docs/api/chat/rest/services) the resource is associated with.
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
