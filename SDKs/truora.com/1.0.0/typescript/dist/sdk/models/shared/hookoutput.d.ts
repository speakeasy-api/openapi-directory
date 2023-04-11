import { SpeakeasyBase } from "../../../internal/utils";
import { Hook } from "./hook";
/**
 * Represents the output of lists hooks request.
 */
export declare class HookOutput extends SpeakeasyBase {
    /**
     * List of hooks in current page.
     */
    hooks?: Hook[];
    /**
     * Next page URL
     */
    next?: string;
    /**
     * Current page URL
     */
    self?: string;
    /**
     * HMAC key needed to decode the JWTs you will receive. All events are sent in JWT format, this key is needed in order to ensure that only authorized users can decode the information.
     */
    signingKey?: string;
}
