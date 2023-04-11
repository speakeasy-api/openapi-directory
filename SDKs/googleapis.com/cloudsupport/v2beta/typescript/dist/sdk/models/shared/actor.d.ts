import { SpeakeasyBase } from "../../../internal/utils";
/**
 * An object containing information about the effective user and authenticated principal responsible for an action.
 */
export declare class ActorInput extends SpeakeasyBase {
    /**
     * The name to display for the actor. If not provided, it is inferred from credentials supplied during case creation. When an email is provided, a display name must also be provided. This will be obfuscated if the user is a Google Support agent.
     */
    displayName?: string;
    /**
     * The email address of the actor. If not provided, it is inferred from credentials supplied during case creation. If the authenticated principal does not have an email address, one must be provided. When a name is provided, an email must also be provided. This will be obfuscated if the user is a Google Support agent.
     */
    email?: string;
}
/**
 * An object containing information about the effective user and authenticated principal responsible for an action.
 */
export declare class Actor extends SpeakeasyBase {
    /**
     * The name to display for the actor. If not provided, it is inferred from credentials supplied during case creation. When an email is provided, a display name must also be provided. This will be obfuscated if the user is a Google Support agent.
     */
    displayName?: string;
    /**
     * The email address of the actor. If not provided, it is inferred from credentials supplied during case creation. If the authenticated principal does not have an email address, one must be provided. When a name is provided, an email must also be provided. This will be obfuscated if the user is a Google Support agent.
     */
    email?: string;
    /**
     * Output only. Whether the actor is a Google support actor.
     */
    googleSupport?: boolean;
}
