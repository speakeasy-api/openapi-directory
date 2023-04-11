import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Type of MessageEvent. Indicates whether the message was sent or received.
 */
export declare enum MessageEventTypeEnum {
    TypeUnspecified = "TYPE_UNSPECIFIED",
    Sent = "SENT",
    Received = "RECEIVED"
}
/**
 * An event describing a message sent/received between Spans.
 */
export declare class MessageEvent extends SpeakeasyBase {
    /**
     * The number of compressed bytes sent or received. If missing, the compressed size is assumed to be the same size as the uncompressed size.
     */
    compressedSizeBytes?: string;
    /**
     * An identifier for the MessageEvent's message that can be used to match `SENT` and `RECEIVED` MessageEvents.
     */
    id?: string;
    /**
     * Type of MessageEvent. Indicates whether the message was sent or received.
     */
    type?: MessageEventTypeEnum;
    /**
     * The number of uncompressed bytes sent or received.
     */
    uncompressedSizeBytes?: string;
}
