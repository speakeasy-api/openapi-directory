import { SpeakeasyBase } from "../../../internal/utils";
import { Action } from "./action";
import { Resources } from "./resources";
import { Secret } from "./secret";
/**
 * Specifies a series of actions to execute, expressed as Docker containers.
 */
export declare class Pipeline extends SpeakeasyBase {
    /**
     * The list of actions to execute, in the order they are specified.
     */
    actions?: Action[];
    /**
     * Holds encrypted information that is only decrypted and stored in RAM by the worker VM when running the pipeline.
     */
    encryptedEnvironment?: Secret;
    /**
     * The environment to pass into every action. Each action can also specify additional environment variables but cannot delete an entry from this map (though they can overwrite it with a different value).
     */
    environment?: Record<string, string>;
    /**
     * The system resources for the pipeline run. At least one zone or region must be specified or the pipeline run will fail.
     */
    resources?: Resources;
    /**
     * The maximum amount of time to give the pipeline to complete. This includes the time spent waiting for a worker to be allocated. If the pipeline fails to complete before the timeout, it will be cancelled and the error code will be set to DEADLINE_EXCEEDED. If unspecified, it will default to 7 days.
     */
    timeout?: string;
}
