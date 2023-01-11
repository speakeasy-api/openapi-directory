import { SpeakeasyBase } from "../../../internal/utils";
import { ChannelEnumChannelTypeEnum } from "./channelenumchanneltypeenum";
export declare class IpMessagingV2ServiceChannel extends SpeakeasyBase {
    accountSid?: string;
    attributes?: string;
    createdBy?: string;
    dateCreated?: Date;
    dateUpdated?: Date;
    friendlyName?: string;
    links?: Record<string, any>;
    membersCount?: number;
    messagesCount?: number;
    serviceSid?: string;
    sid?: string;
    type?: ChannelEnumChannelTypeEnum;
    uniqueName?: string;
    url?: string;
}
