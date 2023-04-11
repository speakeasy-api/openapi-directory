import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Specifies whether the argument is input or output.
 */
export declare enum GoogleCloudDatacatalogV1RoutineSpecArgumentModeEnum {
    ModeUnspecified = "MODE_UNSPECIFIED",
    In = "IN",
    Out = "OUT",
    Inout = "INOUT"
}
/**
 * Input or output argument of a function or stored procedure.
 */
export declare class GoogleCloudDatacatalogV1RoutineSpecArgument extends SpeakeasyBase {
    /**
     * Specifies whether the argument is input or output.
     */
    mode?: GoogleCloudDatacatalogV1RoutineSpecArgumentModeEnum;
    /**
     * The name of the argument. A return argument of a function might not have a name.
     */
    name?: string;
    /**
     * Type of the argument. The exact value depends on the source system and the language.
     */
    type?: string;
}
