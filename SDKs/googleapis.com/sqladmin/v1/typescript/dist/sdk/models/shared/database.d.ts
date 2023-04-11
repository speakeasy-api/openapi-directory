import { SpeakeasyBase } from "../../../internal/utils";
import { SqlServerDatabaseDetails } from "./sqlserverdatabasedetails";
/**
 * Represents a SQL database on the Cloud SQL instance.
 */
export declare class Database extends SpeakeasyBase {
    /**
     * The Cloud SQL charset value.
     */
    charset?: string;
    /**
     * The Cloud SQL collation value.
     */
    collation?: string;
    /**
     * This field is deprecated and will be removed from a future version of the API.
     */
    etag?: string;
    /**
     * The name of the Cloud SQL instance. This does not include the project ID.
     */
    instance?: string;
    /**
     * This is always `sql#database`.
     */
    kind?: string;
    /**
     * The name of the database in the Cloud SQL instance. This does not include the project ID or instance name.
     */
    name?: string;
    /**
     * The project ID of the project containing the Cloud SQL database. The Google apps domain is prefixed if applicable.
     */
    project?: string;
    /**
     * The URI of this resource.
     */
    selfLink?: string;
    /**
     * Represents a Sql Server database on the Cloud SQL instance.
     */
    sqlserverDatabaseDetails?: SqlServerDatabaseDetails;
}
