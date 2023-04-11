import { SpeakeasyBase } from "../../../internal/utils";
export declare class InstanceGroupManagerActionsSummary extends SpeakeasyBase {
    /**
     * [Output Only] The total number of instances in the managed instance group that are scheduled to be abandoned. Abandoning an instance removes it from the managed instance group without deleting it.
     */
    abandoning?: number;
    /**
     * [Output Only] The number of instances in the managed instance group that are scheduled to be created or are currently being created. If the group fails to create any of these instances, it tries again until it creates the instance successfully. If you have disabled creation retries, this field will not be populated; instead, the creatingWithoutRetries field will be populated.
     */
    creating?: number;
    /**
     * [Output Only] The number of instances that the managed instance group will attempt to create. The group attempts to create each instance only once. If the group fails to create any of these instances, it decreases the group's targetSize value accordingly.
     */
    creatingWithoutRetries?: number;
    /**
     * [Output Only] The number of instances in the managed instance group that are scheduled to be deleted or are currently being deleted.
     */
    deleting?: number;
    /**
     * [Output Only] The number of instances in the managed instance group that are running and have no scheduled actions.
     */
    none?: number;
    /**
     * [Output Only] The number of instances in the managed instance group that are scheduled to be recreated or are currently being being recreated. Recreating an instance deletes the existing root persistent disk and creates a new disk from the image that is defined in the instance template.
     */
    recreating?: number;
    /**
     * [Output Only] The number of instances in the managed instance group that are being reconfigured with properties that do not require a restart or a recreate action. For example, setting or removing target pools for the instance.
     */
    refreshing?: number;
    /**
     * [Output Only] The number of instances in the managed instance group that are scheduled to be restarted or are currently being restarted.
     */
    restarting?: number;
    /**
     * [Output Only] The number of instances in the managed instance group that are scheduled to be resumed or are currently being resumed.
     */
    resuming?: number;
    /**
     * [Output Only] The number of instances in the managed instance group that are scheduled to be started or are currently being started.
     */
    starting?: number;
    /**
     * [Output Only] The number of instances in the managed instance group that are scheduled to be stopped or are currently being stopped.
     */
    stopping?: number;
    /**
     * [Output Only] The number of instances in the managed instance group that are scheduled to be suspended or are currently being suspended.
     */
    suspending?: number;
    /**
     * [Output Only] The number of instances in the managed instance group that are being verified. See the managedInstances[].currentAction property in the listManagedInstances method documentation.
     */
    verifying?: number;
}
