import { SpeakeasyBase } from "../../../internal/utils";
export declare class ImportContextBakImportOptionsEncryptionOptions extends SpeakeasyBase {
    /**
     * Path to the Certificate (.cer) in Cloud Storage, in the form `gs://bucketName/fileName`. The instance must have write permissions to the bucket and read access to the file.
     */
    certPath?: string;
    /**
     * Password that encrypts the private key
     */
    pvkPassword?: string;
    /**
     * Path to the Certificate Private Key (.pvk) in Cloud Storage, in the form `gs://bucketName/fileName`. The instance must have write permissions to the bucket and read access to the file.
     */
    pvkPath?: string;
}
/**
 * Import parameters specific to SQL Server .BAK files
 */
export declare class ImportContextBakImportOptions extends SpeakeasyBase {
    encryptionOptions?: ImportContextBakImportOptionsEncryptionOptions;
    /**
     * Whether or not the backup set being restored is striped. Applies only to Cloud SQL for SQL Server.
     */
    striped?: boolean;
}
/**
 * Options for importing data as CSV.
 */
export declare class ImportContextCsvImportOptions extends SpeakeasyBase {
    /**
     * The columns to which CSV data is imported. If not specified, all columns of the database table are loaded with CSV data.
     */
    columns?: string[];
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
     * The table to which CSV data is imported.
     */
    table?: string;
}
/**
 * The file type for the specified uri.\`SQL`: The file contains SQL statements. \`CSV`: The file contains CSV data.
 */
export declare enum ImportContextFileTypeEnum {
    SqlFileTypeUnspecified = "SQL_FILE_TYPE_UNSPECIFIED",
    Sql = "SQL",
    Csv = "CSV",
    Bak = "BAK"
}
/**
 * Database instance import context.
 */
export declare class ImportContext extends SpeakeasyBase {
    /**
     * Import parameters specific to SQL Server .BAK files
     */
    bakImportOptions?: ImportContextBakImportOptions;
    /**
     * Options for importing data as CSV.
     */
    csvImportOptions?: ImportContextCsvImportOptions;
    /**
     * The target database for the import. If `fileType` is `SQL`, this field is required only if the import file does not specify a database, and is overridden by any database specification in the import file. If `fileType` is `CSV`, one database must be specified.
     */
    database?: string;
    /**
     * The file type for the specified uri.\`SQL`: The file contains SQL statements. \`CSV`: The file contains CSV data.
     */
    fileType?: ImportContextFileTypeEnum;
    /**
     * The PostgreSQL user for this import operation. PostgreSQL instances only.
     */
    importUser?: string;
    /**
     * This is always `sql#importContext`.
     */
    kind?: string;
    /**
     * Path to the import file in Cloud Storage, in the form `gs://bucketName/fileName`. Compressed gzip files (.gz) are supported when `fileType` is `SQL`. The instance must have write permissions to the bucket and read access to the file.
     */
    uri?: string;
}
