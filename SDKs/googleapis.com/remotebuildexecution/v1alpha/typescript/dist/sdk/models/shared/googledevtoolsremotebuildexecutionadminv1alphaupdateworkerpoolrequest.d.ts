import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleDevtoolsRemotebuildexecutionAdminV1alphaWorkerPool } from "./googledevtoolsremotebuildexecutionadminv1alphaworkerpool";
/**
 * The request used for UpdateWorkerPool.
 */
export declare class GoogleDevtoolsRemotebuildexecutionAdminV1alphaUpdateWorkerPoolRequest extends SpeakeasyBase {
    /**
     * The update mask applies to worker_pool. For the `FieldMask` definition, see https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#fieldmask If an empty update_mask is provided, only the non-default valued field in the worker pool field will be updated. Note that in order to update a field to the default value (zero, false, empty string) an explicit update_mask must be provided.
     */
    updateMask?: string;
    /**
     * A worker pool resource in the Remote Build Execution API.
     */
    workerPool?: GoogleDevtoolsRemotebuildexecutionAdminV1alphaWorkerPool;
}
