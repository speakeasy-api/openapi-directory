import { SpeakeasyBase } from "../../../internal/utils";
import { Argument } from "./argument";
import { RemoteFunctionOptions } from "./remotefunctionoptions";
import { RoutineReference } from "./routinereference";
import { SparkOptions } from "./sparkoptions";
import { StandardSqlDataType } from "./standardsqldatatype";
import { StandardSqlTableType } from "./standardsqltabletype";
/**
 * Optional. The determinism level of the JavaScript UDF, if defined.
 */
export declare enum RoutineDeterminismLevelEnum {
    DeterminismLevelUnspecified = "DETERMINISM_LEVEL_UNSPECIFIED",
    Deterministic = "DETERMINISTIC",
    NotDeterministic = "NOT_DETERMINISTIC"
}
/**
 * Optional. Defaults to "SQL" if remote_function_options field is absent, not set otherwise.
 */
export declare enum RoutineLanguageEnum {
    LanguageUnspecified = "LANGUAGE_UNSPECIFIED",
    Sql = "SQL",
    Javascript = "JAVASCRIPT",
    Python = "PYTHON",
    Java = "JAVA",
    Scala = "SCALA"
}
/**
 * Required. The type of routine.
 */
export declare enum RoutineRoutineTypeEnum {
    RoutineTypeUnspecified = "ROUTINE_TYPE_UNSPECIFIED",
    ScalarFunction = "SCALAR_FUNCTION",
    Procedure = "PROCEDURE",
    TableValuedFunction = "TABLE_VALUED_FUNCTION"
}
/**
 * A user-defined function or a stored procedure.
 */
export declare class RoutineInput extends SpeakeasyBase {
    /**
     * Optional.
     */
    arguments?: Argument[];
    /**
     * Required. The body of the routine. For functions, this is the expression in the AS clause. If language=SQL, it is the substring inside (but excluding) the parentheses. For example, for the function created with the following statement: `CREATE FUNCTION JoinLines(x string, y string) as (concat(x, "\n", y))` The definition_body is `concat(x, "\n", y)` (\n is not replaced with linebreak). If language=JAVASCRIPT, it is the evaluated string in the AS clause. For example, for the function created with the following statement: `CREATE FUNCTION f() RETURNS STRING LANGUAGE js AS 'return "\n";\n'` The definition_body is `return "\n";\n` Note that both \n are replaced with linebreaks.
     */
    definitionBody?: string;
    /**
     * Optional. The description of the routine, if defined.
     */
    description?: string;
    /**
     * Optional. The determinism level of the JavaScript UDF, if defined.
     */
    determinismLevel?: RoutineDeterminismLevelEnum;
    /**
     * Optional. If language = "JAVASCRIPT", this field stores the path of the imported JAVASCRIPT libraries.
     */
    importedLibraries?: string[];
    /**
     * Optional. Defaults to "SQL" if remote_function_options field is absent, not set otherwise.
     */
    language?: RoutineLanguageEnum;
    /**
     * Options for a remote user-defined function.
     */
    remoteFunctionOptions?: RemoteFunctionOptions;
    /**
     * A table type
     */
    returnTableType?: StandardSqlTableType;
    /**
     * The data type of a variable such as a function argument. Examples include: * INT64: `{"typeKind": "INT64"}` * ARRAY: { "typeKind": "ARRAY", "arrayElementType": {"typeKind": "STRING"} } * STRUCT>: { "typeKind": "STRUCT", "structType": { "fields": [ { "name": "x", "type": {"typeKind": "STRING"} }, { "name": "y", "type": { "typeKind": "ARRAY", "arrayElementType": {"typeKind": "DATE"} } } ] } }
     */
    returnType?: StandardSqlDataType;
    routineReference?: RoutineReference;
    /**
     * Required. The type of routine.
     */
    routineType?: RoutineRoutineTypeEnum;
    /**
     * Options for a user-defined Spark routine.
     */
    sparkOptions?: SparkOptions;
    /**
     * Optional. Can be set for procedures only. If true (default), the definition body will be validated in the creation and the updates of the procedure. For procedures with an argument of ANY TYPE, the definition body validtion is not supported at creation/update time, and thus this field must be set to false explicitly.
     */
    strictMode?: boolean;
}
/**
 * A user-defined function or a stored procedure.
 */
export declare class Routine extends SpeakeasyBase {
    /**
     * Optional.
     */
    arguments?: Argument[];
    /**
     * Output only. The time when this routine was created, in milliseconds since the epoch.
     */
    creationTime?: string;
    /**
     * Required. The body of the routine. For functions, this is the expression in the AS clause. If language=SQL, it is the substring inside (but excluding) the parentheses. For example, for the function created with the following statement: `CREATE FUNCTION JoinLines(x string, y string) as (concat(x, "\n", y))` The definition_body is `concat(x, "\n", y)` (\n is not replaced with linebreak). If language=JAVASCRIPT, it is the evaluated string in the AS clause. For example, for the function created with the following statement: `CREATE FUNCTION f() RETURNS STRING LANGUAGE js AS 'return "\n";\n'` The definition_body is `return "\n";\n` Note that both \n are replaced with linebreaks.
     */
    definitionBody?: string;
    /**
     * Optional. The description of the routine, if defined.
     */
    description?: string;
    /**
     * Optional. The determinism level of the JavaScript UDF, if defined.
     */
    determinismLevel?: RoutineDeterminismLevelEnum;
    /**
     * Output only. A hash of this resource.
     */
    etag?: string;
    /**
     * Optional. If language = "JAVASCRIPT", this field stores the path of the imported JAVASCRIPT libraries.
     */
    importedLibraries?: string[];
    /**
     * Optional. Defaults to "SQL" if remote_function_options field is absent, not set otherwise.
     */
    language?: RoutineLanguageEnum;
    /**
     * Output only. The time when this routine was last modified, in milliseconds since the epoch.
     */
    lastModifiedTime?: string;
    /**
     * Options for a remote user-defined function.
     */
    remoteFunctionOptions?: RemoteFunctionOptions;
    /**
     * A table type
     */
    returnTableType?: StandardSqlTableType;
    /**
     * The data type of a variable such as a function argument. Examples include: * INT64: `{"typeKind": "INT64"}` * ARRAY: { "typeKind": "ARRAY", "arrayElementType": {"typeKind": "STRING"} } * STRUCT>: { "typeKind": "STRUCT", "structType": { "fields": [ { "name": "x", "type": {"typeKind": "STRING"} }, { "name": "y", "type": { "typeKind": "ARRAY", "arrayElementType": {"typeKind": "DATE"} } } ] } }
     */
    returnType?: StandardSqlDataType;
    routineReference?: RoutineReference;
    /**
     * Required. The type of routine.
     */
    routineType?: RoutineRoutineTypeEnum;
    /**
     * Options for a user-defined Spark routine.
     */
    sparkOptions?: SparkOptions;
    /**
     * Optional. Can be set for procedures only. If true (default), the definition body will be validated in the creation and the updates of the procedure. For procedures with an argument of ANY TYPE, the definition body validtion is not supported at creation/update time, and thus this field must be set to false explicitly.
     */
    strictMode?: boolean;
}
