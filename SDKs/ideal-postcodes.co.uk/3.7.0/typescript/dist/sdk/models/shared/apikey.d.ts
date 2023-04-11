import { SpeakeasyBase } from "../../../internal/utils";
import { AvailableContexts } from "./availablecontexts";
export declare class ApiKey extends SpeakeasyBase {
    /**
     * Determines whether the key can be used by the requesting agent.
     *
     * @remarks
     *
     * Returns false if one of the following conditions are met:
     *   - Key has no lookups remaining
     *   - Daily limit has been reached on the key
     *   - Daily individual limit has been reached
     *   - Key is not being used via an authorised URL
     *   - (Sublicensed key only) Key has a valid licensee attached
     *   - (Sublicensed key only) Key is not being used via an authorised URL specified by licensee
     *
     */
    available: boolean;
    /**
     * Returns current context if it is in the list of available contexts for this key.
     *
     * @remarks
     *
     */
    context: any;
    /**
     * A list of available contexts for a key
     */
    contexts: AvailableContexts[];
}
