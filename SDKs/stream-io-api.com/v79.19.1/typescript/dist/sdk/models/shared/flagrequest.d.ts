import { SpeakeasyBase } from "../../../internal/utils";
export declare class FlagRequest extends SpeakeasyBase {
    /**
     * ID of the message when reporting a message
     */
    targetMessageId?: string;
    /**
     * ID of the user when reporting a user
     */
    targetUserId?: string;
    /**
     * Represents chat user
     */
    user?: Record<string, any>;
    userId?: string;
}
