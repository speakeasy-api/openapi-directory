import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Command describes a step performed as part of the build pipeline.
 */
export declare class Command extends SpeakeasyBase {
    /**
     * Command-line arguments used when executing this command.
     */
    args?: string[];
    /**
     * Working directory (relative to project source root) used when running this command.
     */
    dir?: string;
    /**
     * Environment variables set before running this command.
     */
    env?: string[];
    /**
     * Optional unique identifier for this command, used in wait_for to reference this command as a dependency.
     */
    id?: string;
    /**
     * Required. Name of the command, as presented on the command line, or if the command is packaged as a Docker container, as presented to `docker pull`.
     */
    name?: string;
    /**
     * The ID(s) of the command(s) that this command depends on.
     */
    waitFor?: string[];
}
