import { SpeakeasyBase } from "../../../internal/utils";
import { ExecutionEnumStatusEnum } from "./executionenumstatusenum";
export declare class StudioV2FlowExecution extends SpeakeasyBase {
    accountSid?: string;
    contactChannelAddress?: string;
    context?: any;
    dateCreated?: Date;
    dateUpdated?: Date;
    flowSid?: string;
    links?: Record<string, any>;
    sid?: string;
    status?: ExecutionEnumStatusEnum;
    url?: string;
}
