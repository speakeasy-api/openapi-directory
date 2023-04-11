import { SpeakeasyBase } from "../../../internal/utils";
import { ValueRange } from "./valuerange";
/**
 * Determines how dates, times, and durations in the response should be rendered. This is ignored if response_value_render_option is FORMATTED_VALUE. The default dateTime render option is SERIAL_NUMBER.
 */
export declare enum BatchUpdateValuesRequestResponseDateTimeRenderOptionEnum {
    SerialNumber = "SERIAL_NUMBER",
    FormattedString = "FORMATTED_STRING"
}
/**
 * Determines how values in the response should be rendered. The default render option is FORMATTED_VALUE.
 */
export declare enum BatchUpdateValuesRequestResponseValueRenderOptionEnum {
    FormattedValue = "FORMATTED_VALUE",
    UnformattedValue = "UNFORMATTED_VALUE",
    Formula = "FORMULA"
}
/**
 * How the input data should be interpreted.
 */
export declare enum BatchUpdateValuesRequestValueInputOptionEnum {
    InputValueOptionUnspecified = "INPUT_VALUE_OPTION_UNSPECIFIED",
    Raw = "RAW",
    UserEntered = "USER_ENTERED"
}
/**
 * The request for updating more than one range of values in a spreadsheet.
 */
export declare class BatchUpdateValuesRequest extends SpeakeasyBase {
    /**
     * The new values to apply to the spreadsheet.
     */
    data?: ValueRange[];
    /**
     * Determines if the update response should include the values of the cells that were updated. By default, responses do not include the updated values. The `updatedData` field within each of the BatchUpdateValuesResponse.responses contains the updated values. If the range to write was larger than the range actually written, the response includes all values in the requested range (excluding trailing empty rows and columns).
     */
    includeValuesInResponse?: boolean;
    /**
     * Determines how dates, times, and durations in the response should be rendered. This is ignored if response_value_render_option is FORMATTED_VALUE. The default dateTime render option is SERIAL_NUMBER.
     */
    responseDateTimeRenderOption?: BatchUpdateValuesRequestResponseDateTimeRenderOptionEnum;
    /**
     * Determines how values in the response should be rendered. The default render option is FORMATTED_VALUE.
     */
    responseValueRenderOption?: BatchUpdateValuesRequestResponseValueRenderOptionEnum;
    /**
     * How the input data should be interpreted.
     */
    valueInputOption?: BatchUpdateValuesRequestValueInputOptionEnum;
}
