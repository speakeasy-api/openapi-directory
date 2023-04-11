import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The script interpreter to use to run the script. If no interpreter is specified the script is executed directly, which likely only succeed for scripts with [shebang lines](https://en.wikipedia.org/wiki/Shebang_\(Unix\)).
 */
export declare enum SoftwareRecipeStepRunScriptInterpreterEnum {
    InterpreterUnspecified = "INTERPRETER_UNSPECIFIED",
    Shell = "SHELL",
    Powershell = "POWERSHELL"
}
/**
 * Runs a script through an interpreter.
 */
export declare class SoftwareRecipeStepRunScript extends SpeakeasyBase {
    /**
     * Return codes that indicate that the software installed or updated successfully. Behaviour defaults to [0]
     */
    allowedExitCodes?: number[];
    /**
     * The script interpreter to use to run the script. If no interpreter is specified the script is executed directly, which likely only succeed for scripts with [shebang lines](https://en.wikipedia.org/wiki/Shebang_\(Unix\)).
     */
    interpreter?: SoftwareRecipeStepRunScriptInterpreterEnum;
    /**
     * Required. The shell script to be executed.
     */
    script?: string;
}
