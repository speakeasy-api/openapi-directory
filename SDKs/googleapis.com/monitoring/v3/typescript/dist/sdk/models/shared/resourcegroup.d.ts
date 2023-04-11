import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The resource type of the group members.
 */
export declare enum ResourceGroupResourceTypeEnum {
    ResourceTypeUnspecified = "RESOURCE_TYPE_UNSPECIFIED",
    Instance = "INSTANCE",
    AwsElbLoadBalancer = "AWS_ELB_LOAD_BALANCER"
}
/**
 * The resource submessage for group checks. It can be used instead of a monitored resource, when multiple resources are being monitored.
 */
export declare class ResourceGroup extends SpeakeasyBase {
    /**
     * The group of resources being monitored. Should be only the [GROUP_ID], and not the full-path projects/[PROJECT_ID_OR_NUMBER]/groups/[GROUP_ID].
     */
    groupId?: string;
    /**
     * The resource type of the group members.
     */
    resourceType?: ResourceGroupResourceTypeEnum;
}
