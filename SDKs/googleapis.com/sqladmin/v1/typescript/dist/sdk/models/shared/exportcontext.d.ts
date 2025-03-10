import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Options for exporting BAK files (SQL Server-only)
 */
export declare class ExportContextBakExportOptions extends SpeakeasyBase {
    /**
     * Option for specifying how many stripes to use for the export. If blank, and the value of the striped field is true, the number of stripes is automatically chosen.
     */
    stripeCount?: number;
    /**
     * Whether or not the export should be striped.
     */
    striped?: boolean;
}
/**
 * Options for exporting data as CSV. `MySQL` and `PostgreSQL` instances only.
 */
export declare class ExportContextCsvExportOptions extends SpeakeasyBase {
    /**
     * Specifies the character that should appear before a data character that needs to be escaped.
     */
    escapeCharacter?: string;
    /**
     * Specifies the character that separates columns within each row (line) of the file.
     */
    fieldsTerminatedBy?: string;
    /**
     * This is used to separate lines. If a line does not contain all fields, the rest of the columns are set to their default values.
     */
    linesTerminatedBy?: string;
    /**
     * Specifies the quoting character to be used when a data value is quoted.
     */
    quoteCharacter?: string;
    /**
     * The select query used to extract the data.
     */
    selectQuery?: string;
}
/**
 * The file type for the specified uri.
 */
export declare enum ExportContextFileTypeEnum {
    SqlFileTypeUnspecified = "SQL_FILE_TYPE_UNSPECIFIED",
    Sql = "SQL",
    Csv = "CSV",
    Bak = "BAK"
}
/**
 * Options for exporting from MySQL.
 */
export declare class ExportContextSqlExportOptionsMysqlExportOptions extends SpeakeasyBase {
    /**
     * Option to include SQL statement required to set up replication. If set to `1`, the dump file includes a CHANGE MASTER TO statement with the binary log coordinates, and --set-gtid-purged is set to ON. If set to `2`, the CHANGE MASTER TO statement is written as a SQL comment and has no effect. If set to any value other than `1`, --set-gtid-purged is set to OFF.
     */
    masterData?: number;
}
/**
 * Options for exporting data as SQL statements.
 */
export declare class ExportContextSqlExportOptions extends SpeakeasyBase {
    /**
     * Options for exporting from MySQL.
     */
    mysqlExportOptions?: ExportContextSqlExportOptionsMysqlExportOptions;
    /**
     * Export only schemas.
     */
    schemaOnly?: boolean;
    /**
     * Tables to export, or that were exported, from the specified database. If you specify tables, specify one and only one database. For PostgreSQL instances, you can specify only one table.
     */
    tables?: string[];
}
/**
 * Database instance export context.
 */
export declare class ExportContext extends SpeakeasyBase {
    /**
     * Options for exporting BAK files (SQL Server-only)
     */
    bakExportOptions?: ExportContextBakExportOptions;
    /**
     * Options for exporting data as CSV. `MySQL` and `PostgreSQL` instances only.
     */
    csvExportOptions?: ExportContextCsvExportOptions;
    /**
     * Databases to be exported. `MySQL instances:` If `fileType` is `SQL` and no database is specified, all databases are exported, except for the `mysql` system database. If `fileType` is `CSV`, you can specify one database, either by using this property or by using the `csvExportOptions.selectQuery` property, which takes precedence over this property. `PostgreSQL instances:` You must specify one database to be exported. If `fileType` is `CSV`, this database must match the one specified in the `csvExportOptions.selectQuery` property. `SQL Server instances:` You must specify one database to be exported, and the `fileType` must be `BAK`.
     */
    databases?: string[];
    /**
     * The file type for the specified uri.
     */
    fileType?: ExportContextFileTypeEnum;
    /**
     * This is always `sql#exportContext`.
     */
    kind?: string;
    /**
     * Option for export offload.
     */
    offload?: boolean;
    /**
     * Options for exporting data as SQL statements.
     */
    sqlExportOptions?: ExportContextSqlExportOptions;
    /**
     * The path to the file in Google Cloud Storage where the export will be stored. The URI is in the form `gs://bucketName/fileName`. If the file already exists, the request succeeds, but the operation fails. If `fileType` is `SQL` and the filename ends with .gz, the contents are compressed.
     */
    uri?: string;
}
