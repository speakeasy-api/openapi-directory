import { SpeakeasyBase } from "../../../internal/utils";
import { EnvironmentVariable } from "./environmentvariable";
import { File } from "./file";
/**
 * Represents an operating system process.
 */
export declare class Process extends SpeakeasyBase {
    /**
     * Process arguments as JSON encoded strings.
     */
    args?: string[];
    /**
     * True if `args` is incomplete.
     */
    argumentsTruncated?: boolean;
    /**
     * File information about the related binary/library used by an executable, or the script used by a script interpreter
     */
    binary?: File;
    /**
     * Process environment variables.
     */
    envVariables?: EnvironmentVariable[];
    /**
     * True if `env_variables` is incomplete.
     */
    envVariablesTruncated?: boolean;
    /**
     * File information for libraries loaded by the process.
     */
    libraries?: File[];
    /**
     * The process name visible in utilities like `top` and `ps`; it can be accessed via `/proc/[pid]/comm` and changed with `prctl(PR_SET_NAME)`.
     */
    name?: string;
    /**
     * The parent process id.
     */
    parentPid?: string;
    /**
     * The process id.
     */
    pid?: string;
    /**
     * File information about the related binary/library used by an executable, or the script used by a script interpreter
     */
    script?: File;
}
