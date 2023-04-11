import { SpeakeasyBase } from "../../../internal/utils";
import { CellFormat } from "./cellformat";
import { IterativeCalculationSettings } from "./iterativecalculationsettings";
import { SpreadsheetTheme } from "./spreadsheettheme";
/**
 * The amount of time to wait before volatile functions are recalculated.
 */
export declare enum SpreadsheetPropertiesAutoRecalcEnum {
    RecalculationIntervalUnspecified = "RECALCULATION_INTERVAL_UNSPECIFIED",
    OnChange = "ON_CHANGE",
    Minute = "MINUTE",
    Hour = "HOUR"
}
/**
 * Properties of a spreadsheet.
 */
export declare class SpreadsheetProperties extends SpeakeasyBase {
    /**
     * The amount of time to wait before volatile functions are recalculated.
     */
    autoRecalc?: SpreadsheetPropertiesAutoRecalcEnum;
    /**
     * The format of a cell.
     */
    defaultFormat?: CellFormat;
    /**
     * Settings to control how circular dependencies are resolved with iterative calculation.
     */
    iterativeCalculationSettings?: IterativeCalculationSettings;
    /**
     * The locale of the spreadsheet in one of the following formats: * an ISO 639-1 language code such as `en` * an ISO 639-2 language code such as `fil`, if no 639-1 code exists * a combination of the ISO language code and country code, such as `en_US` Note: when updating this field, not all locales/languages are supported.
     */
    locale?: string;
    /**
     * Represents spreadsheet theme
     */
    spreadsheetTheme?: SpreadsheetTheme;
    /**
     * The time zone of the spreadsheet, in CLDR format such as `America/New_York`. If the time zone isn't recognized, this may be a custom time zone such as `GMT-07:00`.
     */
    timeZone?: string;
    /**
     * The title of the spreadsheet.
     */
    title?: string;
}
