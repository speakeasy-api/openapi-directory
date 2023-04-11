import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDatacatalogV1BigQueryRoutineSpec } from "./googleclouddatacatalogv1bigqueryroutinespec";
import { GoogleCloudDatacatalogV1RoutineSpecArgument } from "./googleclouddatacatalogv1routinespecargument";
/**
 * The type of the routine.
 */
export declare enum GoogleCloudDatacatalogV1RoutineSpecRoutineTypeEnum {
    RoutineTypeUnspecified = "ROUTINE_TYPE_UNSPECIFIED",
    ScalarFunction = "SCALAR_FUNCTION",
    Procedure = "PROCEDURE"
}
/**
 * Specification that applies to a routine. Valid only for entries with the `ROUTINE` type.
 */
export declare class GoogleCloudDatacatalogV1RoutineSpec extends SpeakeasyBase {
    /**
     * Fields specific for BigQuery routines.
     */
    bigqueryRoutineSpec?: GoogleCloudDatacatalogV1BigQueryRoutineSpec;
    /**
     * The body of the routine.
     */
    definitionBody?: string;
    /**
     * The language the routine is written in. The exact value depends on the source system. For BigQuery routines, possible values are: * `SQL` * `JAVASCRIPT`
     */
    language?: string;
    /**
     * Return type of the argument. The exact value depends on the source system and the language.
     */
    returnType?: string;
    /**
     * Arguments of the routine.
     */
    routineArguments?: GoogleCloudDatacatalogV1RoutineSpecArgument[];
    /**
     * The type of the routine.
     */
    routineType?: GoogleCloudDatacatalogV1RoutineSpecRoutineTypeEnum;
}
