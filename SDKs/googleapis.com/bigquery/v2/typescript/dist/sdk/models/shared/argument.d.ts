import { SpeakeasyBase } from "../../../internal/utils";
import { StandardSqlDataType } from "./standardsqldatatype";
/**
 * Optional. Defaults to FIXED_TYPE.
 */
export declare enum ArgumentArgumentKindEnum {
    ArgumentKindUnspecified = "ARGUMENT_KIND_UNSPECIFIED",
    FixedType = "FIXED_TYPE",
    AnyType = "ANY_TYPE"
}
/**
 * Optional. Specifies whether the argument is input or output. Can be set for procedures only.
 */
export declare enum ArgumentModeEnum {
    ModeUnspecified = "MODE_UNSPECIFIED",
    In = "IN",
    Out = "OUT",
    Inout = "INOUT"
}
/**
 * Input/output argument of a function or a stored procedure.
 */
export declare class Argument extends SpeakeasyBase {
    /**
     * Optional. Defaults to FIXED_TYPE.
     */
    argumentKind?: ArgumentArgumentKindEnum;
    /**
     * The data type of a variable such as a function argument. Examples include: * INT64: `{"typeKind": "INT64"}` * ARRAY: { "typeKind": "ARRAY", "arrayElementType": {"typeKind": "STRING"} } * STRUCT>: { "typeKind": "STRUCT", "structType": { "fields": [ { "name": "x", "type": {"typeKind": "STRING"} }, { "name": "y", "type": { "typeKind": "ARRAY", "arrayElementType": {"typeKind": "DATE"} } } ] } }
     */
    dataType?: StandardSqlDataType;
    /**
     * Optional. Specifies whether the argument is input or output. Can be set for procedures only.
     */
    mode?: ArgumentModeEnum;
    /**
     * Optional. The name of this argument. Can be absent for function return argument.
     */
    name?: string;
}
