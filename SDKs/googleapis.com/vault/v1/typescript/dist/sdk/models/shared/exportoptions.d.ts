import { SpeakeasyBase } from "../../../internal/utils";
import { DriveExportOptions } from "./driveexportoptions";
import { GroupsExportOptions } from "./groupsexportoptions";
import { HangoutsChatExportOptions } from "./hangoutschatexportoptions";
import { MailExportOptions } from "./mailexportoptions";
import { VoiceExportOptions } from "./voiceexportoptions";
/**
 * The requested data region for the export.
 */
export declare enum ExportOptionsRegionEnum {
    ExportRegionUnspecified = "EXPORT_REGION_UNSPECIFIED",
    Any = "ANY",
    Us = "US",
    Europe = "EUROPE"
}
/**
 * Additional options for exports
 */
export declare class ExportOptions extends SpeakeasyBase {
    /**
     * Options for Drive exports.
     */
    driveOptions?: DriveExportOptions;
    /**
     * Options for Groups exports.
     */
    groupsOptions?: GroupsExportOptions;
    /**
     * Options for Chat exports.
     */
    hangoutsChatOptions?: HangoutsChatExportOptions;
    /**
     * Options for Gmail exports.
     */
    mailOptions?: MailExportOptions;
    /**
     * The requested data region for the export.
     */
    region?: ExportOptionsRegionEnum;
    /**
     * The options for Voice exports.
     */
    voiceOptions?: VoiceExportOptions;
}
