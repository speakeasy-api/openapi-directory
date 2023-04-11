import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleDevtoolsRemotebuildexecutionAdminV1alphaWorkerPool } from "./googledevtoolsremotebuildexecutionadminv1alphaworkerpool";
/**
 * The request used for `CreateWorkerPool`.
 */
export declare class GoogleDevtoolsRemotebuildexecutionAdminV1alphaCreateWorkerPoolRequest extends SpeakeasyBase {
    /**
     * Resource name of the instance in which to create the new worker pool. Format: `projects/[PROJECT_ID]/instances/[INSTANCE_ID]`.
     */
    parent?: string;
    /**
     * ID of the created worker pool. A valid pool ID must: be 6-50 characters long, contain only lowercase letters, digits, hyphens and underscores, start with a lowercase letter, and end with a lowercase letter or a digit.
     */
    poolId?: string;
    /**
     * A worker pool resource in the Remote Build Execution API.
     */
    workerPool?: GoogleDevtoolsRemotebuildexecutionAdminV1alphaWorkerPool;
}
