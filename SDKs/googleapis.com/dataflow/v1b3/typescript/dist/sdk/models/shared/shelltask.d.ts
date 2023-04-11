import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A task which consists of a shell command for the worker to execute.
 */
export declare class ShellTask extends SpeakeasyBase {
    /**
     * The shell command to run.
     */
    command?: string;
    /**
     * Exit code for the task.
     */
    exitCode?: number;
}
