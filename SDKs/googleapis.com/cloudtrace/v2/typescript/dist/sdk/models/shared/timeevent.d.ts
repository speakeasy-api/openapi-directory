import { SpeakeasyBase } from "../../../internal/utils";
import { Annotation } from "./annotation";
import { MessageEvent } from "./messageevent";
/**
 * A time-stamped annotation or message event in the Span.
 */
export declare class TimeEvent extends SpeakeasyBase {
    /**
     * Text annotation with a set of attributes.
     */
    annotation?: Annotation;
    /**
     * An event describing a message sent/received between Spans.
     */
    messageEvent?: MessageEvent;
    /**
     * The timestamp indicating the time the event occurred.
     */
    time?: string;
}
