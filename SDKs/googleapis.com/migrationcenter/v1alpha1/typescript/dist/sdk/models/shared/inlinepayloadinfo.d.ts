import { SpeakeasyBase } from "../../../internal/utils";
import { PayloadFile } from "./payloadfile";
/**
 * The import job format.
 */
export declare enum InlinePayloadInfoFormatEnum {
    ImportJobFormatUnspecified = "IMPORT_JOB_FORMAT_UNSPECIFIED",
    ImportJobFormatCmdb = "IMPORT_JOB_FORMAT_CMDB",
    ImportJobFormatRvtoolsXlsx = "IMPORT_JOB_FORMAT_RVTOOLS_XLSX",
    ImportJobFormatRvtoolsCsv = "IMPORT_JOB_FORMAT_RVTOOLS_CSV",
    ImportJobFormatExportedAwsCsv = "IMPORT_JOB_FORMAT_EXPORTED_AWS_CSV",
    ImportJobFormatExportedAzureCsv = "IMPORT_JOB_FORMAT_EXPORTED_AZURE_CSV",
    ImportJobFormatManualCsv = "IMPORT_JOB_FORMAT_MANUAL_CSV"
}
/**
 * A resource that represents the inline import job payload.
 */
export declare class InlinePayloadInfo extends SpeakeasyBase {
    /**
     * The import job format.
     */
    format?: InlinePayloadInfoFormatEnum;
    /**
     * List of payload files.
     */
    payload?: PayloadFile[];
}
