import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicy } from "./googledevtoolsremotebuildexecutionadminv1alphafeaturepolicy";
import { GoogleDevtoolsRemotebuildexecutionAdminV1alphaSchedulerNotificationConfig } from "./googledevtoolsremotebuildexecutionadminv1alphaschedulernotificationconfig";
/**
 * Output only. State of the instance.
 */
export declare enum GoogleDevtoolsRemotebuildexecutionAdminV1alphaInstanceStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Creating = "CREATING",
    Running = "RUNNING",
    Inactive = "INACTIVE"
}
/**
 * Instance conceptually encapsulates all Remote Build Execution resources for remote builds. An instance consists of storage and compute resources (for example, `ContentAddressableStorage`, `ActionCache`, `WorkerPools`) used for running remote builds. All Remote Build Execution API calls are scoped to an instance.
 */
export declare class GoogleDevtoolsRemotebuildexecutionAdminV1alphaInstance extends SpeakeasyBase {
    /**
     * FeaturePolicy defines features allowed to be used on RBE instances, as well as instance-wide behavior changes that take effect without opt-in or opt-out at usage time.
     */
    featurePolicy?: GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicy;
    /**
     * The location is a GCP region. Currently only `us-central1` is supported.
     */
    location?: string;
    /**
     * Output only. Whether stack driver logging is enabled for the instance.
     */
    loggingEnabled?: boolean;
    /**
     * Output only. Instance resource name formatted as: `projects/[PROJECT_ID]/instances/[INSTANCE_ID]`. Name should not be populated when creating an instance since it is provided in the `instance_id` field.
     */
    name?: string;
    /**
     * Defines configurations for an instance's scheduler notifications, where a target Pub/Sub topic will be notified whenever a task (e.g. an action or reservation) completes on this instance.
     */
    schedulerNotificationConfig?: GoogleDevtoolsRemotebuildexecutionAdminV1alphaSchedulerNotificationConfig;
    /**
     * Output only. State of the instance.
     */
    state?: GoogleDevtoolsRemotebuildexecutionAdminV1alphaInstanceStateEnum;
}
/**
 * Instance conceptually encapsulates all Remote Build Execution resources for remote builds. An instance consists of storage and compute resources (for example, `ContentAddressableStorage`, `ActionCache`, `WorkerPools`) used for running remote builds. All Remote Build Execution API calls are scoped to an instance.
 */
export declare class GoogleDevtoolsRemotebuildexecutionAdminV1alphaInstanceInput extends SpeakeasyBase {
    /**
     * FeaturePolicy defines features allowed to be used on RBE instances, as well as instance-wide behavior changes that take effect without opt-in or opt-out at usage time.
     */
    featurePolicy?: GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicy;
    /**
     * The location is a GCP region. Currently only `us-central1` is supported.
     */
    location?: string;
    /**
     * Defines configurations for an instance's scheduler notifications, where a target Pub/Sub topic will be notified whenever a task (e.g. an action or reservation) completes on this instance.
     */
    schedulerNotificationConfig?: GoogleDevtoolsRemotebuildexecutionAdminV1alphaSchedulerNotificationConfig;
}
