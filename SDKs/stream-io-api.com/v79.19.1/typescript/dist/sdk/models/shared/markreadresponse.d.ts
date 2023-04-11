import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Successful response
 */
export declare class MarkReadResponse extends SpeakeasyBase {
    duration: string;
    /**
     * Represents an BaseEvent that happened in Stream Chat
     */
    event?: Record<string, any>;
}
