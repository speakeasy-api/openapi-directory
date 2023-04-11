import { SpeakeasyBase } from "../../../internal/utils";
import { ScriptCompilationError } from "./scriptcompilationerror";
/**
 * The result of the compilation of a Script
 */
export declare class ScriptCompilationResult extends SpeakeasyBase {
    /**
     * Is the task done or not
     */
    done: boolean;
    /**
     * The error of the compilation of a Script
     */
    error?: ScriptCompilationError;
}
