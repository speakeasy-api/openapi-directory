import { SpeakeasyBase } from "../../../internal/utils";
import { UserChannelEnumChannelStatusEnum } from "./userchannelenumchannelstatusenum";
import { UserChannelEnumNotificationLevelEnum } from "./userchannelenumnotificationlevelenum";
/**
 * OK
 */
export declare class IpMessagingV2ServiceUserUserChannel extends SpeakeasyBase {
    accountSid?: string;
    channelSid?: string;
    lastConsumedMessageIndex?: number;
    links?: Record<string, any>;
    memberSid?: string;
    notificationLevel?: UserChannelEnumNotificationLevelEnum;
    serviceSid?: string;
    status?: UserChannelEnumChannelStatusEnum;
    unreadMessagesCount?: number;
    url?: string;
    userSid?: string;
}
