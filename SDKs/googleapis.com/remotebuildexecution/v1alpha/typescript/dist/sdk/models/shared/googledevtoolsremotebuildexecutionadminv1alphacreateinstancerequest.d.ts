import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleDevtoolsRemotebuildexecutionAdminV1alphaInstanceInput } from "./googledevtoolsremotebuildexecutionadminv1alphainstance";
/**
 * The request used for `CreateInstance`.
 */
export declare class GoogleDevtoolsRemotebuildexecutionAdminV1alphaCreateInstanceRequestInput extends SpeakeasyBase {
    /**
     * Instance conceptually encapsulates all Remote Build Execution resources for remote builds. An instance consists of storage and compute resources (for example, `ContentAddressableStorage`, `ActionCache`, `WorkerPools`) used for running remote builds. All Remote Build Execution API calls are scoped to an instance.
     */
    instance?: GoogleDevtoolsRemotebuildexecutionAdminV1alphaInstanceInput;
    /**
     * Required. ID of the created instance. A valid `instance_id` must: be 6-50 characters long, contain only lowercase letters, digits, hyphens and underscores, start with a lowercase letter, and end with a lowercase letter or a digit.
     */
    instanceId?: string;
    /**
     * Required. Resource name of the project containing the instance. Format: `projects/[PROJECT_ID]`.
     */
    parent?: string;
}
