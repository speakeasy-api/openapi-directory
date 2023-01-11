import { SpeakeasyBase } from "../../../internal/utils";
import { SinkEnumSinkTypeEnum } from "./sinkenumsinktypeenum";
import { SinkEnumStatusEnum } from "./sinkenumstatusenum";
export declare class EventsV1Sink extends SpeakeasyBase {
    dateCreated?: Date;
    dateUpdated?: Date;
    description?: string;
    links?: Record<string, any>;
    sid?: string;
    sinkConfiguration?: any;
    sinkType?: SinkEnumSinkTypeEnum;
    status?: SinkEnumStatusEnum;
    url?: string;
}
