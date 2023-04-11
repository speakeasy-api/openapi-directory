import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Active Directory configuration, relevant only for Cloud SQL for SQL Server.
 */
export declare class SqlActiveDirectoryConfig extends SpeakeasyBase {
    /**
     * The name of the domain (e.g., mydomain.com).
     */
    domain?: string;
    /**
     * This is always sql#activeDirectoryConfig.
     */
    kind?: string;
}
