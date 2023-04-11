import { SpeakeasyBase } from "../../../internal/utils";
export declare class BanRequest extends SpeakeasyBase {
    /**
     * Represents chat user
     */
    bannedBy?: Record<string, any>;
    /**
     * User ID who issued a ban
     */
    bannedById?: string;
    /**
     * Channel ID to ban user in
     */
    id?: string;
    /**
     * Whether to perform IP ban or not
     */
    ipBan?: boolean;
    /**
     * Ban reason
     */
    reason?: string;
    /**
     * Whether to perform shadow ban or not
     */
    shadow?: boolean;
    /**
     * ID of user to ban
     */
    targetUserId: string;
    /**
     * Timeout of ban in minutes. User will be unbanned after this period of time
     */
    timeout?: number;
    /**
     * Channel type to ban user in
     */
    type?: string;
    /**
     * Represents chat user
     */
    user?: Record<string, any>;
    userId?: string;
}
