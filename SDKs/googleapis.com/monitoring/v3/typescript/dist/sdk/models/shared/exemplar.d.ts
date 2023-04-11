import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Exemplars are example points that may be used to annotate aggregated distribution values. They are metadata that gives information about a particular value added to a Distribution bucket, such as a trace ID that was active when a value was added. They may contain further information, such as a example values and timestamps, origin, etc.
 */
export declare class Exemplar extends SpeakeasyBase {
    /**
     * Contextual information about the example value. Examples are:Trace: type.googleapis.com/google.monitoring.v3.SpanContextLiteral string: type.googleapis.com/google.protobuf.StringValueLabels dropped during aggregation: type.googleapis.com/google.monitoring.v3.DroppedLabelsThere may be only a single attachment of any given message type in a single exemplar, and this is enforced by the system.
     */
    attachments?: Record<string, any>[];
    /**
     * The observation (sampling) time of the above value.
     */
    timestamp?: string;
    /**
     * Value of the exemplar point. This value determines to which bucket the exemplar belongs.
     */
    value?: number;
}
