import { SpeakeasyBase } from "../../../internal/utils";
import { UserMute } from "./usermute";
/**
 * Successful response
 */
export declare class MuteUserResponse extends SpeakeasyBase {
    duration: string;
    mute?: UserMute;
    /**
     * Object with mutes (if multiple users were muted)
     */
    mutes?: UserMute[];
    ownUser?: Record<string, any>;
}
