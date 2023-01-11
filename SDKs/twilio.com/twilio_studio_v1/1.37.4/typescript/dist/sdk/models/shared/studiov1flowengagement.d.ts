import { SpeakeasyBase } from "../../../internal/utils";
import { EngagementEnumStatusEnum } from "./engagementenumstatusenum";
export declare class StudioV1FlowEngagement extends SpeakeasyBase {
    accountSid?: string;
    contactChannelAddress?: string;
    contactSid?: string;
    context?: any;
    dateCreated?: Date;
    dateUpdated?: Date;
    flowSid?: string;
    links?: Record<string, any>;
    sid?: string;
    status?: EngagementEnumStatusEnum;
    url?: string;
}
