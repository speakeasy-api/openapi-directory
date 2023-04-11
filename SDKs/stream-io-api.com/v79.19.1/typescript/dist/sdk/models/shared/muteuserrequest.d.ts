import { SpeakeasyBase } from "../../../internal/utils";
export declare class MuteUserRequest extends SpeakeasyBase {
    /**
     * User IDs to mute (if multiple users)
     */
    targetIds: string[];
    /**
     * Duration of mute in minutes
     */
    timeout?: number;
    /**
     * Represents chat user
     */
    user?: Record<string, any>;
    userId?: string;
}
