import { SpeakeasyBase } from "../../../internal/utils";
import { Barrier } from "./barrier";
import { Container } from "./container";
import { Environment } from "./environment";
import { Script } from "./script";
/**
 * Runnable describes instructions for executing a specific script or container as part of a Task.
 */
export declare class Runnable extends SpeakeasyBase {
    /**
     * By default, after a Runnable fails, no further Runnable are executed. This flag indicates that this Runnable must be run even if the Task has already failed. This is useful for Runnables that copy output files off of the VM or for debugging. The always_run flag does not override the Task's overall max_run_duration. If the max_run_duration has expired then no further Runnables will execute, not even always_run Runnables.
     */
    alwaysRun?: boolean;
    /**
     * This flag allows a Runnable to continue running in the background while the Task executes subsequent Runnables. This is useful to provide services to other Runnables (or to provide debugging support tools like SSH servers).
     */
    background?: boolean;
    /**
     * Barrier runnable blocks until all tasks in a taskgroup reach it.
     */
    barrier?: Barrier;
    /**
     * Container runnable.
     */
    container?: Container;
    /**
     * An Environment describes a collection of environment variables to set when executing Tasks.
     */
    environment?: Environment;
    /**
     * Normally, a non-zero exit status causes the Task to fail. This flag allows execution of other Runnables to continue instead.
     */
    ignoreExitStatus?: boolean;
    /**
     * Script runnable.
     */
    script?: Script;
    /**
     * Timeout for this Runnable.
     */
    timeout?: string;
}
