import { SpeakeasyBase } from "../../../internal/utils";
import { GamesNumberAffixConfiguration } from "./gamesnumberaffixconfiguration";
/**
 * The formatting for the number.
 */
export declare enum GamesNumberFormatConfigurationNumberFormatTypeEnum {
    NumberFormatTypeUnspecified = "NUMBER_FORMAT_TYPE_UNSPECIFIED",
    Numeric = "NUMERIC",
    TimeDuration = "TIME_DURATION",
    Currency = "CURRENCY"
}
/**
 * A number format resource.
 */
export declare class GamesNumberFormatConfiguration extends SpeakeasyBase {
    /**
     * The curreny code string. Only used for CURRENCY format type.
     */
    currencyCode?: string;
    /**
     * The number of decimal places for number. Only used for NUMERIC format type.
     */
    numDecimalPlaces?: number;
    /**
     * The formatting for the number.
     */
    numberFormatType?: GamesNumberFormatConfigurationNumberFormatTypeEnum;
    /**
     * A number affix resource.
     */
    suffix?: GamesNumberAffixConfiguration;
}
