import { SpeakeasyBase } from "../../../internal/utils";
import { DateRange } from "./daterange";
import { LocalizationSettings } from "./localizationsettings";
/**
 * Groups data helps to treat the generated report. Always sent as a first message in the stream response.
 */
export declare class ReportHeader extends SpeakeasyBase {
    /**
     * Specification of a single date range. Both dates are inclusive.
     */
    dateRange?: DateRange;
    /**
     * Localization settings for reports, such as currency and language. It affects how metrics are calculated.
     */
    localizationSettings?: LocalizationSettings;
    /**
     * The report time zone. The value is a time-zone ID as specified by the CLDR project, for example, "America/Los_Angeles".
     */
    reportingTimeZone?: string;
}
