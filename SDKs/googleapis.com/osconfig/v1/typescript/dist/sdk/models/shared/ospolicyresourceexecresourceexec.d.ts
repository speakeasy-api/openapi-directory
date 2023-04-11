import { SpeakeasyBase } from "../../../internal/utils";
import { OSPolicyResourceFile } from "./ospolicyresourcefile";
/**
 * Required. The script interpreter to use.
 */
export declare enum OSPolicyResourceExecResourceExecInterpreterEnum {
    InterpreterUnspecified = "INTERPRETER_UNSPECIFIED",
    None = "NONE",
    Shell = "SHELL",
    Powershell = "POWERSHELL"
}
/**
 * A file or script to execute.
 */
export declare class OSPolicyResourceExecResourceExec extends SpeakeasyBase {
    /**
     * Optional arguments to pass to the source during execution.
     */
    args?: string[];
    /**
     * A remote or local file.
     */
    file?: OSPolicyResourceFile;
    /**
     * Required. The script interpreter to use.
     */
    interpreter?: OSPolicyResourceExecResourceExecInterpreterEnum;
    /**
     * Only recorded for enforce Exec. Path to an output file (that is created by this Exec) whose content will be recorded in OSPolicyResourceCompliance after a successful run. Absence or failure to read this file will result in this ExecResource being non-compliant. Output file size is limited to 100K bytes.
     */
    outputFilePath?: string;
    /**
     * An inline script. The size of the script is limited to 32KiB.
     */
    script?: string;
}
