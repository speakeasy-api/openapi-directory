import { SpeakeasyBase } from "../../../internal/utils";
import { InMemoryUser } from "./inmemoryuser";
/**
 * Settings to authenticate users using the in memory user store
 */
export declare class InMemoryAuthModuleConfig extends SpeakeasyBase {
    /**
     * Description of the config
     */
    desc: string;
    /**
     * Unique id of the config
     */
    id: string;
    /**
     * Name of the config
     */
    name: string;
    /**
     * Max age of the session
     */
    sessionMaxAge: string;
    /**
     * Type of settings. value is basic
     */
    type: string;
    /**
     * List of users
     */
    users: InMemoryUser[];
}
