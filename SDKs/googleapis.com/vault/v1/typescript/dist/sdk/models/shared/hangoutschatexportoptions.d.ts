import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The file format for exported messages.
 */
export declare enum HangoutsChatExportOptionsExportFormatEnum {
    ExportFormatUnspecified = "EXPORT_FORMAT_UNSPECIFIED",
    Mbox = "MBOX",
    Pst = "PST"
}
/**
 * Options for Chat exports.
 */
export declare class HangoutsChatExportOptions extends SpeakeasyBase {
    /**
     * The file format for exported messages.
     */
    exportFormat?: HangoutsChatExportOptionsExportFormatEnum;
}
