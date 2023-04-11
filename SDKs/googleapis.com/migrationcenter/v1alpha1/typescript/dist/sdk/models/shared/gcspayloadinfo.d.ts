import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The import job format.
 */
export declare enum GCSPayloadInfoFormatEnum {
    ImportJobFormatUnspecified = "IMPORT_JOB_FORMAT_UNSPECIFIED",
    ImportJobFormatCmdb = "IMPORT_JOB_FORMAT_CMDB",
    ImportJobFormatRvtoolsXlsx = "IMPORT_JOB_FORMAT_RVTOOLS_XLSX",
    ImportJobFormatRvtoolsCsv = "IMPORT_JOB_FORMAT_RVTOOLS_CSV",
    ImportJobFormatExportedAwsCsv = "IMPORT_JOB_FORMAT_EXPORTED_AWS_CSV",
    ImportJobFormatExportedAzureCsv = "IMPORT_JOB_FORMAT_EXPORTED_AZURE_CSV",
    ImportJobFormatManualCsv = "IMPORT_JOB_FORMAT_MANUAL_CSV"
}
/**
 * A resource that represents a payload hosted on Google Cloud Storage.
 */
export declare class GCSPayloadInfo extends SpeakeasyBase {
    /**
     * The import job format.
     */
    format?: GCSPayloadInfoFormatEnum;
    /**
     * The payload path in Google Cloud Storage.
     */
    path?: string;
}
