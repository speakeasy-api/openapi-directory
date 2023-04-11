import { SpeakeasyBase } from "../../../internal/utils";
import { BuiltInVariable } from "./builtinvariable";
/**
 * Successful response
 */
export declare class CreateBuiltInVariableResponse extends SpeakeasyBase {
    /**
     * List of created built-in variables.
     */
    builtInVariable?: BuiltInVariable[];
}
