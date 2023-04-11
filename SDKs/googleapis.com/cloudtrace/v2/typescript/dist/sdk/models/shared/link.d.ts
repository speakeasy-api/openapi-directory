import { SpeakeasyBase } from "../../../internal/utils";
import { Attributes } from "./attributes";
/**
 * The relationship of the current span relative to the linked span.
 */
export declare enum LinkTypeEnum {
    TypeUnspecified = "TYPE_UNSPECIFIED",
    ChildLinkedSpan = "CHILD_LINKED_SPAN",
    ParentLinkedSpan = "PARENT_LINKED_SPAN"
}
/**
 * A pointer from the current span to another span in the same trace or in a different trace. For example, this can be used in batching operations, where a single batch handler processes multiple requests from different traces or when the handler receives a request from a different project.
 */
export declare class Link extends SpeakeasyBase {
    /**
     * A set of attributes as key-value pairs.
     */
    attributes?: Attributes;
    /**
     * The `[SPAN_ID]` for a span within a trace.
     */
    spanId?: string;
    /**
     * The `[TRACE_ID]` for a trace within a project.
     */
    traceId?: string;
    /**
     * The relationship of the current span relative to the linked span.
     */
    type?: LinkTypeEnum;
}
