import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Represents a Sql Server database on the Cloud SQL instance.
 */
export declare class SqlServerDatabaseDetails extends SpeakeasyBase {
    /**
     * The version of SQL Server with which the database is to be made compatible
     */
    compatibilityLevel?: number;
    /**
     * The recovery model of a SQL Server database
     */
    recoveryModel?: string;
}
