import { SpeakeasyBase } from "../../../internal/utils";
import { UserChannelEnumChannelStatusEnum } from "./userchannelenumchannelstatusenum";
export declare class IpMessagingV1ServiceUserUserChannel extends SpeakeasyBase {
    accountSid?: string;
    channelSid?: string;
    lastConsumedMessageIndex?: number;
    links?: Record<string, any>;
    memberSid?: string;
    serviceSid?: string;
    status?: UserChannelEnumChannelStatusEnum;
    unreadMessagesCount?: number;
}
