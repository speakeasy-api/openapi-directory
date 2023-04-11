import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Represents a Sql Server user on the Cloud SQL instance.
 */
export declare class SqlServerUserDetails extends SpeakeasyBase {
    /**
     * If the user has been disabled
     */
    disabled?: boolean;
    /**
     * The server roles for this user
     */
    serverRoles?: string[];
}
