import { SpeakeasyBase } from "../../../internal/utils";
export declare class UserMute extends SpeakeasyBase {
    /**
     * Date/time of creation
     */
    createdAt: Date;
    /**
     * Date/time of mute expiration
     */
    expires?: Date;
    /**
     * Represents chat user
     */
    target?: Record<string, any>;
    /**
     * Date/time of the last update
     */
    updatedAt: Date;
    /**
     * Represents chat user
     */
    user?: Record<string, any>;
}
