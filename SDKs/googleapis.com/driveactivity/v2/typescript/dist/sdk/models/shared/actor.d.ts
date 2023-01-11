import { SpeakeasyBase } from "../../../internal/utils";
import { Impersonation } from "./impersonation";
import { SystemEvent } from "./systemevent";
import { User } from "./user";
/**
 * The actor of a Drive activity.
**/
export declare class Actor extends SpeakeasyBase {
    administrator?: Record<string, any>;
    anonymous?: Record<string, any>;
    impersonation?: Impersonation;
    system?: SystemEvent;
    user?: User;
}
