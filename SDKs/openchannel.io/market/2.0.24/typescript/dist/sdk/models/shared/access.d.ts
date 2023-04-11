import { SpeakeasyBase } from "../../../internal/utils";
/**
 * OK
 */
export declare class Access extends SpeakeasyBase {
    /**
     * The approved access restrictions for this app
     */
    access: string[];
    /**
     * The id of the app that owns this access key
     */
    appId: string;
    /**
     * The time (in milliseconds) of when the user agreed to the access request
     */
    date: number;
    /**
     * The ip address of the user agreeing to the access request
     */
    ip: string;
    /**
     * True if this access is up to date with the current version of the app
     */
    isValid: boolean;
    /**
     * The id for this user
     */
    userId: string;
}
