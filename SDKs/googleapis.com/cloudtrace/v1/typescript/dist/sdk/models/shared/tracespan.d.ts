import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Distinguishes between spans generated in a particular context. For example, two spans with the same name may be distinguished using `RPC_CLIENT` and `RPC_SERVER` to identify queueing latency associated with the span.
 */
export declare enum TraceSpanKindEnum {
    SpanKindUnspecified = "SPAN_KIND_UNSPECIFIED",
    RpcServer = "RPC_SERVER",
    RpcClient = "RPC_CLIENT"
}
/**
 * A span represents a single timed event within a trace. Spans can be nested and form a trace tree. Often, a trace contains a root span that describes the end-to-end latency of an operation and, optionally, one or more subspans for its suboperations. Spans do not need to be contiguous. There may be gaps between spans in a trace.
 */
export declare class TraceSpan extends SpeakeasyBase {
    /**
     * End time of the span in nanoseconds from the UNIX epoch.
     */
    endTime?: string;
    /**
     * Distinguishes between spans generated in a particular context. For example, two spans with the same name may be distinguished using `RPC_CLIENT` and `RPC_SERVER` to identify queueing latency associated with the span.
     */
    kind?: TraceSpanKindEnum;
    /**
     * Collection of labels associated with the span. Label keys must be less than 128 bytes. Label values must be less than 16 kilobytes (10MB for `/stacktrace` values). Some predefined label keys exist, or you may create your own. When creating your own, we recommend the following formats: * `/category/product/key` for agents of well-known products (e.g. `/db/mongodb/read_size`). * `short_host/path/key` for domain-specific keys (e.g. `foo.com/myproduct/bar`) Predefined labels include: * `/agent` * `/component` * `/error/message` * `/error/name` * `/http/client_city` * `/http/client_country` * `/http/client_protocol` * `/http/client_region` * `/http/host` * `/http/method` * `/http/path` * `/http/redirected_url` * `/http/request/size` * `/http/response/size` * `/http/route` * `/http/status_code` * `/http/url` * `/http/user_agent` * `/pid` * `/stacktrace` * `/tid`
     */
    labels?: Record<string, string>;
    /**
     * Name of the span. Must be less than 128 bytes. The span name is sanitized and displayed in the Trace tool in the Google Cloud Platform Console. The name may be a method name or some other per-call site name. For the same executable and the same call point, a best practice is to use a consistent name, which makes it easier to correlate cross-trace spans.
     */
    name?: string;
    /**
     * Optional. ID of the parent span, if any.
     */
    parentSpanId?: string;
    /**
     * Identifier for the span. Must be a 64-bit integer other than 0 and unique within a trace. For example, `2205310701640571284`.
     */
    spanId?: string;
    /**
     * Start time of the span in nanoseconds from the UNIX epoch.
     */
    startTime?: string;
}
