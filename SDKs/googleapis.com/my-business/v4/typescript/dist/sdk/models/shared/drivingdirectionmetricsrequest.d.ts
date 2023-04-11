import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The number of days to aggregate data for. Results returned will be available data over the last number of requested days. Valid values are 7, 30, and 90.
 */
export declare enum DrivingDirectionMetricsRequestNumDaysEnum {
    Seven = "SEVEN",
    Thirty = "THIRTY",
    Ninety = "NINETY"
}
/**
 * A request for driving direction insights.
 */
export declare class DrivingDirectionMetricsRequest extends SpeakeasyBase {
    /**
     * The BCP 47 code for the language. If a language code is not provided, it defaults to English.
     */
    languageCode?: string;
    /**
     * The number of days to aggregate data for. Results returned will be available data over the last number of requested days. Valid values are 7, 30, and 90.
     */
    numDays?: DrivingDirectionMetricsRequestNumDaysEnum;
}
