import { SpeakeasyBase } from "../../../internal/utils";
export declare class BanResponse extends SpeakeasyBase {
    /**
     * Represents chat user
     */
    bannedBy?: Record<string, any>;
    /**
     * Represents channel in chat
     */
    channel?: Record<string, any>;
    createdAt: Date;
    expires?: Date;
    reason?: string;
    shadow?: boolean;
    /**
     * Represents chat user
     */
    user?: Record<string, any>;
}
