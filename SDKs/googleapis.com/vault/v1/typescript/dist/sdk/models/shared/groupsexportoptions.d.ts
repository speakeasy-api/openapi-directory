import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The file format for exported messages.
 */
export declare enum GroupsExportOptionsExportFormatEnum {
    ExportFormatUnspecified = "EXPORT_FORMAT_UNSPECIFIED",
    Mbox = "MBOX",
    Pst = "PST"
}
/**
 * Options for Groups exports.
 */
export declare class GroupsExportOptions extends SpeakeasyBase {
    /**
     * The file format for exported messages.
     */
    exportFormat?: GroupsExportOptionsExportFormatEnum;
}
