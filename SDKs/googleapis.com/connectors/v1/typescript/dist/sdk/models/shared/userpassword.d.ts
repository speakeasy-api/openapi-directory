import { SpeakeasyBase } from "../../../internal/utils";
import { Secret } from "./secret";
/**
 * Parameters to support Username and Password Authentication.
 */
export declare class UserPassword extends SpeakeasyBase {
    /**
     * Secret provides a reference to entries in Secret Manager.
     */
    password?: Secret;
    /**
     * Username.
     */
    username?: string;
}
