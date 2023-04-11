import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The file format for exported text messages.
 */
export declare enum VoiceExportOptionsExportFormatEnum {
    ExportFormatUnspecified = "EXPORT_FORMAT_UNSPECIFIED",
    Mbox = "MBOX",
    Pst = "PST"
}
/**
 * The options for Voice exports.
 */
export declare class VoiceExportOptions extends SpeakeasyBase {
    /**
     * The file format for exported text messages.
     */
    exportFormat?: VoiceExportOptionsExportFormatEnum;
}
