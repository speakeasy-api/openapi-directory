import { SpeakeasyBase } from "../../../internal/utils";
import { UserChannelEnumChannelStatusEnum } from "./userchannelenumchannelstatusenum";
import { UserChannelEnumNotificationLevelEnum } from "./userchannelenumnotificationlevelenum";
/**
 * OK
 */
export declare class ChatV2ServiceUserUserChannel extends SpeakeasyBase {
    /**
     * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the User Channel resource.
     */
    accountSid?: string;
    /**
     * The SID of the [Channel](https://www.twilio.com/docs/chat/channels) the User Channel resource belongs to.
     */
    channelSid?: string;
    /**
     * The index of the last [Message](https://www.twilio.com/docs/chat/rest/message-resource) in the [Channel](https://www.twilio.com/docs/chat/channels) that the Member has read.
     */
    lastConsumedMessageIndex?: number;
    /**
     * The absolute URLs of the [Members](https://www.twilio.com/docs/chat/rest/member-resource), [Messages](https://www.twilio.com/docs/chat/rest/message-resource) , [Invites](https://www.twilio.com/docs/chat/rest/invite-resource) and, if it exists, the last [Message](https://www.twilio.com/docs/chat/rest/message-resource) for the Channel.
     */
    links?: Record<string, any>;
    /**
     * The SID of a [Member](https://www.twilio.com/docs/chat/rest/member-resource) that represents the User on the Channel.
     */
    memberSid?: string;
    notificationLevel?: UserChannelEnumNotificationLevelEnum;
    /**
     * The SID of the [Service](https://www.twilio.com/docs/chat/rest/service-resource) the User Channel resource is associated with.
     */
    serviceSid?: string;
    status?: UserChannelEnumChannelStatusEnum;
    /**
     * The number of unread Messages in the Channel for the User. Note that retrieving messages on a client endpoint does not mean that messages are consumed or read. See [Consumption Horizon feature](https://www.twilio.com/docs/chat/consumption-horizon) to learn how to mark messages as consumed.
     */
    unreadMessagesCount?: number;
    /**
     * The absolute URL of the User Channel resource.
     */
    url?: string;
    /**
     * The SID of the [User](https://www.twilio.com/docs/chat/rest/user-resource) the User Channel belongs to.
     */
    userSid?: string;
}
