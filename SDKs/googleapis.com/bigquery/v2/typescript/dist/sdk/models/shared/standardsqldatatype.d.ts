import { SpeakeasyBase } from "../../../internal/utils";
import { StandardSqlStructType } from "./standardsqlstructtype";
/**
 * Required. The top level type of this field. Can be any GoogleSQL data type (e.g., "INT64", "DATE", "ARRAY").
 */
export declare enum StandardSqlDataTypeTypeKindEnum {
    TypeKindUnspecified = "TYPE_KIND_UNSPECIFIED",
    Int64 = "INT64",
    Bool = "BOOL",
    Float64 = "FLOAT64",
    String = "STRING",
    Bytes = "BYTES",
    Timestamp = "TIMESTAMP",
    Date = "DATE",
    Time = "TIME",
    Datetime = "DATETIME",
    Interval = "INTERVAL",
    Geography = "GEOGRAPHY",
    Numeric = "NUMERIC",
    Bignumeric = "BIGNUMERIC",
    Json = "JSON",
    Array = "ARRAY",
    Struct = "STRUCT"
}
/**
 * The data type of a variable such as a function argument. Examples include: * INT64: `{"typeKind": "INT64"}` * ARRAY: { "typeKind": "ARRAY", "arrayElementType": {"typeKind": "STRING"} } * STRUCT>: { "typeKind": "STRUCT", "structType": { "fields": [ { "name": "x", "type": {"typeKind": "STRING"} }, { "name": "y", "type": { "typeKind": "ARRAY", "arrayElementType": {"typeKind": "DATE"} } } ] } }
 */
export declare class StandardSqlDataType extends SpeakeasyBase {
    /**
     * The data type of a variable such as a function argument. Examples include: * INT64: `{"typeKind": "INT64"}` * ARRAY: { "typeKind": "ARRAY", "arrayElementType": {"typeKind": "STRING"} } * STRUCT>: { "typeKind": "STRUCT", "structType": { "fields": [ { "name": "x", "type": {"typeKind": "STRING"} }, { "name": "y", "type": { "typeKind": "ARRAY", "arrayElementType": {"typeKind": "DATE"} } } ] } }
     */
    arrayElementType?: StandardSqlDataType;
    structType?: StandardSqlStructType;
    /**
     * Required. The top level type of this field. Can be any GoogleSQL data type (e.g., "INT64", "DATE", "ARRAY").
     */
    typeKind?: StandardSqlDataTypeTypeKindEnum;
}
