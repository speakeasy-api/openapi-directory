import { SpeakeasyBase } from "../../../internal/utils";
import { Span } from "./span";
/**
 * The request message for the `BatchWriteSpans` method.
 */
export declare class BatchWriteSpansRequest extends SpeakeasyBase {
    /**
     * Required. A list of new spans. The span names must not match existing spans, otherwise the results are undefined.
     */
    spans?: Span[];
}
