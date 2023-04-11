import { SpeakeasyBase } from "../../../internal/utils";
import { ErrorValue } from "./errorvalue";
/**
 * The kinds of value that a cell in a spreadsheet can have.
 */
export declare class ExtendedValue extends SpeakeasyBase {
    /**
     * Represents a boolean value.
     */
    boolValue?: boolean;
    /**
     * An error in a cell.
     */
    errorValue?: ErrorValue;
    /**
     * Represents a formula.
     */
    formulaValue?: string;
    /**
     * Represents a double value. Note: Dates, Times and DateTimes are represented as doubles in SERIAL_NUMBER format.
     */
    numberValue?: number;
    /**
     * Represents a string value. Leading single quotes are not included. For example, if the user typed `'123` into the UI, this would be represented as a `stringValue` of `"123"`.
     */
    stringValue?: string;
}
