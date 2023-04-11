import { SpeakeasyBase } from "../../../internal/utils";
import { Parameter } from "./parameter";
/**
 * A rich message format, including a human readable string, a key for identifying the message, and structured data associated with the message for programmatic consumption.
 */
export declare class StructuredMessage extends SpeakeasyBase {
    /**
     * Identifier for this message type. Used by external systems to internationalize or personalize message.
     */
    messageKey?: string;
    /**
     * Human-readable version of message.
     */
    messageText?: string;
    /**
     * The structured data associated with this message.
     */
    parameters?: Parameter[];
}
