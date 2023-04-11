import { SpeakeasyBase } from "../../../internal/utils";
import { ManagedInstanceVersion } from "./managedinstanceversion";
/**
 * [Output Only] Action that managed instance group was executing on the instance when the error occurred. Possible values:
 */
export declare enum InstanceManagedByIgmErrorInstanceActionDetailsActionEnum {
    Abandoning = "ABANDONING",
    Creating = "CREATING",
    CreatingAtomically = "CREATING_ATOMICALLY",
    CreatingWithoutRetries = "CREATING_WITHOUT_RETRIES",
    Deleting = "DELETING",
    None = "NONE",
    Queuing = "QUEUING",
    Recreating = "RECREATING",
    Refreshing = "REFRESHING",
    Restarting = "RESTARTING",
    Resuming = "RESUMING",
    Starting = "STARTING",
    Stopping = "STOPPING",
    Suspending = "SUSPENDING",
    Verifying = "VERIFYING"
}
export declare class InstanceManagedByIgmErrorInstanceActionDetails extends SpeakeasyBase {
    /**
     * [Output Only] Action that managed instance group was executing on the instance when the error occurred. Possible values:
     */
    action?: InstanceManagedByIgmErrorInstanceActionDetailsActionEnum;
    /**
     * [Output Only] The URL of the instance. The URL can be set even if the instance has not yet been created.
     */
    instance?: string;
    version?: ManagedInstanceVersion;
}
