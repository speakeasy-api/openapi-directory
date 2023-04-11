import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The file format for exported messages.
 */
export declare enum MailExportOptionsExportFormatEnum {
    ExportFormatUnspecified = "EXPORT_FORMAT_UNSPECIFIED",
    Mbox = "MBOX",
    Pst = "PST"
}
/**
 * Options for Gmail exports.
 */
export declare class MailExportOptions extends SpeakeasyBase {
    /**
     * The file format for exported messages.
     */
    exportFormat?: MailExportOptionsExportFormatEnum;
    /**
     * To export confidential mode content, set to **true**.
     */
    showConfidentialModeContent?: boolean;
    /**
     * To use the new export system, set to **true**.
     */
    useNewExport?: boolean;
}
