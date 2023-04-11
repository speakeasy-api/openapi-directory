import { SpeakeasyBase } from "../../../internal/utils";
import { GcsObject } from "./gcsobject";
/**
 * The script interpreter to use to run the script. If no interpreter is specified the script will be executed directly, which will likely only succeed for scripts with [shebang lines] (https://en.wikipedia.org/wiki/Shebang_\(Unix\)).
 */
export declare enum ExecStepConfigInterpreterEnum {
    InterpreterUnspecified = "INTERPRETER_UNSPECIFIED",
    None = "NONE",
    Shell = "SHELL",
    Powershell = "POWERSHELL"
}
/**
 * Common configurations for an ExecStep.
 */
export declare class ExecStepConfig extends SpeakeasyBase {
    /**
     * Defaults to [0]. A list of possible return values that the execution can return to indicate a success.
     */
    allowedSuccessCodes?: number[];
    /**
     * Google Cloud Storage object representation.
     */
    gcsObject?: GcsObject;
    /**
     * The script interpreter to use to run the script. If no interpreter is specified the script will be executed directly, which will likely only succeed for scripts with [shebang lines] (https://en.wikipedia.org/wiki/Shebang_\(Unix\)).
     */
    interpreter?: ExecStepConfigInterpreterEnum;
    /**
     * An absolute path to the executable on the VM.
     */
    localPath?: string;
}
