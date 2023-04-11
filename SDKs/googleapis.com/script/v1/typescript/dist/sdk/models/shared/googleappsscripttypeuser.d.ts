import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A simple user profile resource.
 */
export declare class GoogleAppsScriptTypeUser extends SpeakeasyBase {
    /**
     * The user's domain.
     */
    domain?: string;
    /**
     * The user's identifying email address.
     */
    email?: string;
    /**
     * The user's display name.
     */
    name?: string;
    /**
     * The user's photo.
     */
    photoUrl?: string;
}
