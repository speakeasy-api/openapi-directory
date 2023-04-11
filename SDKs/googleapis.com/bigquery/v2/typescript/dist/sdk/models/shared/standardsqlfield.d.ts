import { SpeakeasyBase } from "../../../internal/utils";
import { StandardSqlDataType } from "./standardsqldatatype";
/**
 * A field or a column.
 */
export declare class StandardSqlField extends SpeakeasyBase {
    /**
     * Optional. The name of this field. Can be absent for struct fields.
     */
    name?: string;
    /**
     * The data type of a variable such as a function argument. Examples include: * INT64: `{"typeKind": "INT64"}` * ARRAY: { "typeKind": "ARRAY", "arrayElementType": {"typeKind": "STRING"} } * STRUCT>: { "typeKind": "STRUCT", "structType": { "fields": [ { "name": "x", "type": {"typeKind": "STRING"} }, { "name": "y", "type": { "typeKind": "ARRAY", "arrayElementType": {"typeKind": "DATE"} } } ] } }
     */
    type?: StandardSqlDataType;
}
