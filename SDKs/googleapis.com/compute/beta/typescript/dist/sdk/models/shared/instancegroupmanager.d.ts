import { SpeakeasyBase } from "../../../internal/utils";
import { DistributionPolicy } from "./distributionpolicy";
import { InstanceGroupManagerActionsSummary } from "./instancegroupmanageractionssummary";
import { InstanceGroupManagerAllInstancesConfig } from "./instancegroupmanagerallinstancesconfig";
import { InstanceGroupManagerAutoHealingPolicy } from "./instancegroupmanagerautohealingpolicy";
import { InstanceGroupManagerInstanceLifecyclePolicy } from "./instancegroupmanagerinstancelifecyclepolicy";
import { InstanceGroupManagerStatus } from "./instancegroupmanagerstatus";
import { InstanceGroupManagerUpdatePolicy } from "./instancegroupmanagerupdatepolicy";
import { InstanceGroupManagerVersion } from "./instancegroupmanagerversion";
import { NamedPort } from "./namedport";
import { StatefulPolicy } from "./statefulpolicy";
/**
 * The action to perform in case of zone failure. Only one value is supported, NO_FAILOVER. The default is NO_FAILOVER.
 */
export declare enum InstanceGroupManagerFailoverActionEnum {
    NoFailover = "NO_FAILOVER",
    Unknown = "UNKNOWN"
}
/**
 * Pagination behavior of the listManagedInstances API method for this managed instance group.
 */
export declare enum InstanceGroupManagerListManagedInstancesResultsEnum {
    Pageless = "PAGELESS",
    Paginated = "PAGINATED"
}
/**
 * Represents a Managed Instance Group resource. An instance group is a collection of VM instances that you can manage as a single entity. For more information, read Instance groups. For zonal Managed Instance Group, use the instanceGroupManagers resource. For regional Managed Instance Group, use the regionInstanceGroupManagers resource.
 */
export declare class InstanceGroupManager extends SpeakeasyBase {
    allInstancesConfig?: InstanceGroupManagerAllInstancesConfig;
    /**
     * The autohealing policy for this managed instance group. You can specify only one value.
     */
    autoHealingPolicies?: InstanceGroupManagerAutoHealingPolicy[];
    /**
     * The base instance name to use for instances in this group. The value must be 1-58 characters long. Instances are named by appending a hyphen and a random four-character string to the base instance name. The base instance name must comply with RFC1035.
     */
    baseInstanceName?: string;
    /**
     * [Output Only] The creation timestamp for this managed instance group in RFC3339 text format.
     */
    creationTimestamp?: string;
    currentActions?: InstanceGroupManagerActionsSummary;
    /**
     * An optional description of this resource.
     */
    description?: string;
    distributionPolicy?: DistributionPolicy;
    /**
     * The action to perform in case of zone failure. Only one value is supported, NO_FAILOVER. The default is NO_FAILOVER.
     */
    failoverAction?: InstanceGroupManagerFailoverActionEnum;
    /**
     * Fingerprint of this resource. This field may be used in optimistic locking. It will be ignored when inserting an InstanceGroupManager. An up-to-date fingerprint must be provided in order to update the InstanceGroupManager, otherwise the request will fail with error 412 conditionNotMet. To see the latest fingerprint, make a get() request to retrieve an InstanceGroupManager.
     */
    fingerprint?: string;
    /**
     * [Output Only] A unique identifier for this resource type. The server generates this identifier.
     */
    id?: string;
    /**
     * [Output Only] The URL of the Instance Group resource.
     */
    instanceGroup?: string;
    instanceLifecyclePolicy?: InstanceGroupManagerInstanceLifecyclePolicy;
    /**
     * The URL of the instance template that is specified for this managed instance group. The group uses this template to create all new instances in the managed instance group. The templates for existing instances in the group do not change unless you run recreateInstances, run applyUpdatesToInstances, or set the group's updatePolicy.type to PROACTIVE.
     */
    instanceTemplate?: string;
    /**
     * [Output Only] The resource type, which is always compute#instanceGroupManager for managed instance groups.
     */
    kind?: string;
    /**
     * Pagination behavior of the listManagedInstances API method for this managed instance group.
     */
    listManagedInstancesResults?: InstanceGroupManagerListManagedInstancesResultsEnum;
    /**
     * The name of the managed instance group. The name must be 1-63 characters long, and comply with RFC1035.
     */
    name?: string;
    /**
     * Named ports configured for the Instance Groups complementary to this Instance Group Manager.
     */
    namedPorts?: NamedPort[];
    /**
     * [Output Only] The URL of the region where the managed instance group resides (for regional resources).
     */
    region?: string;
    /**
     * [Output Only] The URL for this managed instance group. The server defines this URL.
     */
    selfLink?: string;
    /**
     * The service account to be used as credentials for all operations performed by the managed instance group on instances. The service accounts needs all permissions required to create and delete instances. By default, the service account {projectNumber}@cloudservices.gserviceaccount.com is used.
     */
    serviceAccount?: string;
    statefulPolicy?: StatefulPolicy;
    status?: InstanceGroupManagerStatus;
    /**
     * The URLs for all TargetPool resources to which instances in the instanceGroup field are added. The target pools automatically apply to all of the instances in the managed instance group.
     */
    targetPools?: string[];
    /**
     * The target number of running instances for this managed instance group. You can reduce this number by using the instanceGroupManager deleteInstances or abandonInstances methods. Resizing the group also changes this number.
     */
    targetSize?: number;
    updatePolicy?: InstanceGroupManagerUpdatePolicy;
    /**
     * Specifies the instance templates used by this managed instance group to create instances. Each version is defined by an instanceTemplate and a name. Every version can appear at most once per instance group. This field overrides the top-level instanceTemplate field. Read more about the relationships between these fields. Exactly one version must leave the targetSize field unset. That version will be applied to all remaining instances. For more information, read about canary updates.
     */
    versions?: InstanceGroupManagerVersion[];
    /**
     * [Output Only] The URL of a zone where the managed instance group is located (for zonal resources).
     */
    zone?: string;
}
