import { SpeakeasyBase } from "../../../internal/utils";
import { UploadFileInfo } from "./uploadfileinfo";
/**
 * The payload format.
 */
export declare enum ImportDataFileFormatEnum {
    ImportJobFormatUnspecified = "IMPORT_JOB_FORMAT_UNSPECIFIED",
    ImportJobFormatCmdb = "IMPORT_JOB_FORMAT_CMDB",
    ImportJobFormatRvtoolsXlsx = "IMPORT_JOB_FORMAT_RVTOOLS_XLSX",
    ImportJobFormatRvtoolsCsv = "IMPORT_JOB_FORMAT_RVTOOLS_CSV",
    ImportJobFormatExportedAwsCsv = "IMPORT_JOB_FORMAT_EXPORTED_AWS_CSV",
    ImportJobFormatExportedAzureCsv = "IMPORT_JOB_FORMAT_EXPORTED_AZURE_CSV",
    ImportJobFormatManualCsv = "IMPORT_JOB_FORMAT_MANUAL_CSV"
}
/**
 * Output only. The state of the import data file.
 */
export declare enum ImportDataFileStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Creating = "CREATING",
    Active = "ACTIVE"
}
/**
 * A resource that represents a payload file in an import job.
 */
export declare class ImportDataFile extends SpeakeasyBase {
    /**
     * Output only. The timestamp when the file was created.
     */
    createTime?: string;
    /**
     * User-friendly display name. Maximum length is 63 characters.
     */
    displayName?: string;
    /**
     * The payload format.
     */
    format?: ImportDataFileFormatEnum;
    /**
     * Output only. The name of the file.
     */
    name?: string;
    /**
     * Output only. The state of the import data file.
     */
    state?: ImportDataFileStateEnum;
    /**
     * A resource that contains a URI to which a data file can be uploaded.
     */
    uploadFileInfo?: UploadFileInfo;
}
/**
 * A resource that represents a payload file in an import job.
 */
export declare class ImportDataFileInput extends SpeakeasyBase {
    /**
     * User-friendly display name. Maximum length is 63 characters.
     */
    displayName?: string;
    /**
     * The payload format.
     */
    format?: ImportDataFileFormatEnum;
}
