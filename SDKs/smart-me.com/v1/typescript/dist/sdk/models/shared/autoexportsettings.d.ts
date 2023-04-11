import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The export interval of the auto export
 */
export declare enum AutoExportSettingsExportIntervalEnum {
    NoExport = "NoExport",
    Hourly = "Hourly",
    Daily = "Daily",
    Weekly = "Weekly",
    Monthly = "Monthly",
    QuaterYearly = "QuaterYearly",
    HalfYearly = "HalfYearly",
    Yearly = "Yearly"
}
/**
 * Settings for the auto export functionality of a meter
 */
export declare class AutoExportSettings extends SpeakeasyBase {
    /**
     * The export format
     */
    exportFormat?: string;
    /**
     * The export interval of the auto export
     */
    exportInterval?: AutoExportSettingsExportIntervalEnum;
    /**
     * The meter point id set by the user
     */
    meterPointId?: string;
    /**
     * The upload type
     */
    uploadType?: string;
}
