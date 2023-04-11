import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Represents database access information, such as queries. A database may be a sub-resource of an instance (as in the case of CloudSQL instances or Cloud Spanner instances), or the database instance itself. Some database resources may not have the full resource name populated because these resource types are not yet supported by Cloud Asset Inventory (e.g. CloudSQL databases). In these cases only the display name will be provided.
 */
export declare class Database extends SpeakeasyBase {
    /**
     * The human readable name of the database the user connected to.
     */
    displayName?: string;
    /**
     * The target usernames/roles/groups of a SQL privilege grant (not an IAM policy change).
     */
    grantees?: string[];
    /**
     * The full resource name of the database the user connected to, if it is supported by CAI. (https://google.aip.dev/122#full-resource-names)
     */
    name?: string;
    /**
     * The SQL statement associated with the relevant access.
     */
    query?: string;
    /**
     * The username used to connect to the DB. This may not necessarily be an IAM principal, and has no required format.
     */
    userName?: string;
}
