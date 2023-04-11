import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Contains all information needed to update a message
 */
export declare class UpdateMessageRequest extends SpeakeasyBase {
    /**
     * Represents any chat message
     */
    message: Record<string, any>;
    pendingMessageMetadata?: Record<string, string>;
    /**
     * Do not try to enrich the links within message
     */
    skipEnrichUrl?: boolean;
}
