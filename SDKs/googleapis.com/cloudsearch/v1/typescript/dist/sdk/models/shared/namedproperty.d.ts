import { SpeakeasyBase } from "../../../internal/utils";
import { DateValues } from "./datevalues";
import { DoubleValues } from "./doublevalues";
import { EnumValues } from "./enumvalues";
import { HtmlValues } from "./htmlvalues";
import { IntegerValues } from "./integervalues";
import { ObjectValues } from "./objectvalues";
import { TextValues } from "./textvalues";
import { TimestampValues } from "./timestampvalues";
/**
 * A typed name-value pair for structured data. The type of the value should be the same as the registered type for the `name` property in the object definition of `objectType`.
 */
export declare class NamedProperty extends SpeakeasyBase {
    booleanValue?: boolean;
    /**
     * List of date values.
     */
    dateValues?: DateValues;
    /**
     * List of double values.
     */
    doubleValues?: DoubleValues;
    /**
     * List of enum values.
     */
    enumValues?: EnumValues;
    /**
     * List of html values.
     */
    htmlValues?: HtmlValues;
    /**
     * List of integer values.
     */
    integerValues?: IntegerValues;
    /**
     * The name of the property. This name should correspond to the name of the property that was registered for object definition in the schema. The maximum allowable length for this property is 256 characters.
     */
    name?: string;
    /**
     * List of object values.
     */
    objectValues?: ObjectValues;
    /**
     * List of text values.
     */
    textValues?: TextValues;
    /**
     * List of timestamp values.
     */
    timestampValues?: TimestampValues;
}
