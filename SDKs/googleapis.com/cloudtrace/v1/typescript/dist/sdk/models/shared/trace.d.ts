import { SpeakeasyBase } from "../../../internal/utils";
import { TraceSpan } from "./tracespan";
/**
 * A trace describes how long it takes for an application to perform an operation. It consists of a set of spans, each of which represent a single timed event within the operation.
 */
export declare class Trace extends SpeakeasyBase {
    /**
     * Project ID of the Cloud project where the trace data is stored.
     */
    projectId?: string;
    /**
     * Collection of spans in the trace.
     */
    spans?: TraceSpan[];
    /**
     * Globally unique identifier for the trace. This identifier is a 128-bit numeric value formatted as a 32-byte hex string. For example, `382d4f4c6b7bb2f4a972559d9085001d`. The numeric value should not be zero.
     */
    traceId?: string;
}
