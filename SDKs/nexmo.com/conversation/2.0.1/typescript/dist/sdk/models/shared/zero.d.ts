import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Connect to an App User
 */
export declare class Zero extends SpeakeasyBase {
    /**
     * The type of connection. Must be `app`
     */
    type: string;
    /**
     * The username to connect to
     */
    user: string;
}
