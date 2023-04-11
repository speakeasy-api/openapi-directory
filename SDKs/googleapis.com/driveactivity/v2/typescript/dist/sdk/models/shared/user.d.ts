import { SpeakeasyBase } from "../../../internal/utils";
import { KnownUser } from "./knownuser";
/**
 * Information about an end user.
 */
export declare class User extends SpeakeasyBase {
    /**
     * A user whose account has since been deleted.
     */
    deletedUser?: Record<string, any>;
    /**
     * A known user.
     */
    knownUser?: KnownUser;
    /**
     * A user about whom nothing is currently known.
     */
    unknownUser?: Record<string, any>;
}
