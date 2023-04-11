import { SpeakeasyBase } from "../../../internal/utils";
import { Attributes } from "./attributes";
import { Status } from "./status";
import { TruncatableString } from "./truncatablestring";
/**
 * Distinguishes between spans generated in a particular context. For example, two spans with the same name may be distinguished using `CLIENT` (caller) and `SERVER` (callee) to identify an RPC call.
 */
export declare enum TraceSpanSpanKindEnum {
    SpanKindUnspecified = "SPAN_KIND_UNSPECIFIED",
    Internal = "INTERNAL",
    Server = "SERVER",
    Client = "CLIENT",
    Producer = "PRODUCER",
    Consumer = "CONSUMER"
}
/**
 * A span represents a single operation within a trace. Spans can be nested to form a trace tree. Often, a trace contains a root span that describes the end-to-end latency, and one or more subspans for its sub-operations. A trace can also contain multiple root spans, or none at all. Spans do not need to be contiguous—there may be gaps or overlaps between spans in a trace.
 */
export declare class TraceSpan extends SpeakeasyBase {
    /**
     * A set of attributes, each in the format `[KEY]:[VALUE]`.
     */
    attributes?: Attributes;
    /**
     * An optional number of child spans that were generated while this span was active. If set, allows implementation to detect missing child spans.
     */
    childSpanCount?: number;
    /**
     * Represents a string that might be shortened to a specified length.
     */
    displayName?: TruncatableString;
    /**
     * The end time of the span. On the client side, this is the time kept by the local machine where the span execution ends. On the server side, this is the time when the server application handler stops running.
     */
    endTime?: string;
    /**
     * The resource name of the span in the following format: projects/[PROJECT_ID]/traces/[TRACE_ID]/spans/SPAN_ID is a unique identifier for a trace within a project; it is a 32-character hexadecimal encoding of a 16-byte array. [SPAN_ID] is a unique identifier for a span within a trace; it is a 16-character hexadecimal encoding of an 8-byte array.
     */
    name?: string;
    /**
     * The [SPAN_ID] of this span's parent span. If this is a root span, then this field must be empty.
     */
    parentSpanId?: string;
    /**
     * (Optional) Set this parameter to indicate whether this span is in the same process as its parent. If you do not set this parameter, Stackdriver Trace is unable to take advantage of this helpful information.
     */
    sameProcessAsParentSpan?: boolean;
    /**
     * The [SPAN_ID] portion of the span's resource name.
     */
    spanId?: string;
    /**
     * Distinguishes between spans generated in a particular context. For example, two spans with the same name may be distinguished using `CLIENT` (caller) and `SERVER` (callee) to identify an RPC call.
     */
    spanKind?: TraceSpanSpanKindEnum;
    /**
     * The start time of the span. On the client side, this is the time kept by the local machine where the span execution starts. On the server side, this is the time when the server's application handler starts running.
     */
    startTime?: string;
    /**
     * The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors).
     */
    status?: Status;
}
