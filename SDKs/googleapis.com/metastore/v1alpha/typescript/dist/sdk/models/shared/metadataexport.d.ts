import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Output only. The type of the database dump.
 */
export declare enum MetadataExportDatabaseDumpTypeEnum {
    TypeUnspecified = "TYPE_UNSPECIFIED",
    Mysql = "MYSQL",
    Avro = "AVRO"
}
/**
 * Output only. The current state of the export.
 */
export declare enum MetadataExportStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Running = "RUNNING",
    Succeeded = "SUCCEEDED",
    Failed = "FAILED",
    Cancelled = "CANCELLED"
}
/**
 * The details of a metadata export operation.
 */
export declare class MetadataExport extends SpeakeasyBase {
    /**
     * Output only. The type of the database dump.
     */
    databaseDumpType?: MetadataExportDatabaseDumpTypeEnum;
    /**
     * Output only. A Cloud Storage URI of a folder that metadata are exported to, in the form of gs:////, where is automatically generated.
     */
    destinationGcsUri?: string;
    /**
     * Output only. The time when the export ended.
     */
    endTime?: string;
    /**
     * Output only. The time when the export started.
     */
    startTime?: string;
    /**
     * Output only. The current state of the export.
     */
    state?: MetadataExportStateEnum;
}
