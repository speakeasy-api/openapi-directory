import { SpeakeasyBase } from "../../../internal/utils";
import { Artifact } from "./artifact";
import { Command } from "./command";
import { Source } from "./source";
/**
 * Provenance of a build. Contains all information needed to verify the full details about the build from source to completion.
 */
export declare class BuildProvenance extends SpeakeasyBase {
    /**
     * Special options applied to this build. This is a catch-all field where build providers can enter any desired additional details.
     */
    buildOptions?: Record<string, string>;
    /**
     * Version string of the builder at the time this build was executed.
     */
    builderVersion?: string;
    /**
     * Output of the build.
     */
    builtArtifacts?: Artifact[];
    /**
     * Commands requested by the build.
     */
    commands?: Command[];
    /**
     * Time at which the build was created.
     */
    createTime?: string;
    /**
     * E-mail address of the user who initiated this build. Note that this was the user's e-mail address at the time the build was initiated; this address may not represent the same end-user for all time.
     */
    creator?: string;
    /**
     * Time at which execution of the build was finished.
     */
    endTime?: string;
    /**
     * Required. Unique identifier of the build.
     */
    id?: string;
    /**
     * URI where any logs for this provenance were written.
     */
    logsUri?: string;
    /**
     * ID of the project.
     */
    projectId?: string;
    /**
     * Source describes the location of the source used for the build.
     */
    sourceProvenance?: Source;
    /**
     * Time at which execution of the build was started.
     */
    startTime?: string;
    /**
     * Trigger identifier if the build was triggered automatically; empty if not.
     */
    triggerId?: string;
}
