import { SpeakeasyBase } from "../../../internal/utils";
import { SinkEnumSinkTypeEnum } from "./sinkenumsinktypeenum";
import { SinkEnumStatusEnum } from "./sinkenumstatusenum";
/**
 * Created
 */
export declare class EventsV1Sink extends SpeakeasyBase {
    /**
     * The date that this Sink was created, given in ISO 8601 format.
     */
    dateCreated?: Date;
    /**
     * The date that this Sink was updated, given in ISO 8601 format.
     */
    dateUpdated?: Date;
    /**
     * A human readable description for the Sink
     */
    description?: string;
    /**
     * Contains a dictionary of URL links to nested resources of this Sink.
     */
    links?: Record<string, any>;
    /**
     * A 34 character string that uniquely identifies this Sink.
     */
    sid?: string;
    /**
     * The information required for Twilio to connect to the provided Sink encoded as JSON.
     */
    sinkConfiguration?: any;
    sinkType?: SinkEnumSinkTypeEnum;
    status?: SinkEnumStatusEnum;
    /**
     * The URL of this resource.
     */
    url?: string;
}
