import { SpeakeasyBase } from "../../../internal/utils";
/**
 * SQL Server specific audit configuration.
 */
export declare class SqlServerAuditConfig extends SpeakeasyBase {
    /**
     * The name of the destination bucket (e.g., gs://mybucket).
     */
    bucket?: string;
    /**
     * This is always sql#sqlServerAuditConfig
     */
    kind?: string;
    /**
     * How long to keep generated audit files.
     */
    retentionInterval?: string;
    /**
     * How often to upload generated audit files.
     */
    uploadInterval?: string;
}
