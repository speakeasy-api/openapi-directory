import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Data provided with a pipeline or transform to provide descriptive info.
 */
export declare class DisplayData extends SpeakeasyBase {
    /**
     * Contains value if the data is of a boolean type.
     */
    boolValue?: boolean;
    /**
     * Contains value if the data is of duration type.
     */
    durationValue?: string;
    /**
     * Contains value if the data is of float type.
     */
    floatValue?: number;
    /**
     * Contains value if the data is of int64 type.
     */
    int64Value?: string;
    /**
     * Contains value if the data is of java class type.
     */
    javaClassValue?: string;
    /**
     * The key identifying the display data. This is intended to be used as a label for the display data when viewed in a dax monitoring system.
     */
    key?: string;
    /**
     * An optional label to display in a dax UI for the element.
     */
    label?: string;
    /**
     * The namespace for the key. This is usually a class name or programming language namespace (i.e. python module) which defines the display data. This allows a dax monitoring system to specially handle the data and perform custom rendering.
     */
    namespace?: string;
    /**
     * A possible additional shorter value to display. For example a java_class_name_value of com.mypackage.MyDoFn will be stored with MyDoFn as the short_str_value and com.mypackage.MyDoFn as the java_class_name value. short_str_value can be displayed and java_class_name_value will be displayed as a tooltip.
     */
    shortStrValue?: string;
    /**
     * Contains value if the data is of string type.
     */
    strValue?: string;
    /**
     * Contains value if the data is of timestamp type.
     */
    timestampValue?: string;
    /**
     * An optional full URL.
     */
    url?: string;
}
