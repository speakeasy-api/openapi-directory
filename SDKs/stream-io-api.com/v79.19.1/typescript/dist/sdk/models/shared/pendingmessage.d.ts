import { SpeakeasyBase } from "../../../internal/utils";
export declare class PendingMessage extends SpeakeasyBase {
    channel?: Record<string, any>;
    /**
     * Represents any chat message
     */
    message?: Record<string, any>;
    /**
     * Additional data attached to the pending message. This data is discarded once the pending message is committed.
     */
    metadata?: Record<string, string>;
    /**
     * Represents chat user
     */
    user?: Record<string, any>;
}
