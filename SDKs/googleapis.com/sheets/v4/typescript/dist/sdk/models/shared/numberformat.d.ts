import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The type of the number format. When writing, this field must be set.
 */
export declare enum NumberFormatTypeEnum {
    NumberFormatTypeUnspecified = "NUMBER_FORMAT_TYPE_UNSPECIFIED",
    Text = "TEXT",
    Number = "NUMBER",
    Percent = "PERCENT",
    Currency = "CURRENCY",
    Date = "DATE",
    Time = "TIME",
    DateTime = "DATE_TIME",
    Scientific = "SCIENTIFIC"
}
/**
 * The number format of a cell.
 */
export declare class NumberFormat extends SpeakeasyBase {
    /**
     * Pattern string used for formatting. If not set, a default pattern based on the user's locale will be used if necessary for the given type. See the [Date and Number Formats guide](/sheets/api/guides/formats) for more information about the supported patterns.
     */
    pattern?: string;
    /**
     * The type of the number format. When writing, this field must be set.
     */
    type?: NumberFormatTypeEnum;
}
