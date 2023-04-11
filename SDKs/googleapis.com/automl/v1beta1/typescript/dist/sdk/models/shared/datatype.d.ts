import { SpeakeasyBase } from "../../../internal/utils";
import { StructType } from "./structtype";
/**
 * Required. The TypeCode for this type.
 */
export declare enum DataTypeTypeCodeEnum {
    TypeCodeUnspecified = "TYPE_CODE_UNSPECIFIED",
    Float64 = "FLOAT64",
    Timestamp = "TIMESTAMP",
    String = "STRING",
    Array = "ARRAY",
    Struct = "STRUCT",
    Category = "CATEGORY"
}
/**
 * Indicated the type of data that can be stored in a structured data entity (e.g. a table).
 */
export declare class DataType extends SpeakeasyBase {
    /**
     * Indicated the type of data that can be stored in a structured data entity (e.g. a table).
     */
    listElementType?: DataType;
    /**
     * If true, this DataType can also be `NULL`. In .CSV files `NULL` value is expressed as an empty string.
     */
    nullable?: boolean;
    /**
     * `StructType` defines the DataType-s of a STRUCT type.
     */
    structType?: StructType;
    /**
     * If type_code == TIMESTAMP then `time_format` provides the format in which that time field is expressed. The time_format must either be one of: * `UNIX_SECONDS` * `UNIX_MILLISECONDS` * `UNIX_MICROSECONDS` * `UNIX_NANOSECONDS` (for respectively number of seconds, milliseconds, microseconds and nanoseconds since start of the Unix epoch); or be written in `strftime` syntax. If time_format is not set, then the default format as described on the type_code is used.
     */
    timeFormat?: string;
    /**
     * Required. The TypeCode for this type.
     */
    typeCode?: DataTypeTypeCodeEnum;
}
