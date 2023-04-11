import { SpeakeasyBase } from "../../../internal/utils";
import { Impersonation } from "./impersonation";
import { SystemEvent } from "./systemevent";
import { User } from "./user";
/**
 * The actor of a Drive activity.
 */
export declare class Actor extends SpeakeasyBase {
    /**
     * Empty message representing an administrator.
     */
    administrator?: Record<string, any>;
    /**
     * Empty message representing an anonymous user or indicating the authenticated user should be anonymized.
     */
    anonymous?: Record<string, any>;
    /**
     * Information about an impersonation, where an admin acts on behalf of an end user. Information about the acting admin is not currently available.
     */
    impersonation?: Impersonation;
    /**
     * Event triggered by system operations instead of end users.
     */
    system?: SystemEvent;
    /**
     * Information about an end user.
     */
    user?: User;
}
