import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Output only. The current state of the instance.
 */
export declare enum InstanceStateEnum {
    StateNotKnown = "STATE_NOT_KNOWN",
    Ready = "READY",
    Creating = "CREATING"
}
/**
 * The type of the instance. Defaults to `PRODUCTION`.
 */
export declare enum InstanceTypeEnum {
    TypeUnspecified = "TYPE_UNSPECIFIED",
    Production = "PRODUCTION",
    Development = "DEVELOPMENT"
}
/**
 * A collection of Bigtable Tables and the resources that serve them. All tables in an instance are served from all Clusters in the instance.
 */
export declare class Instance extends SpeakeasyBase {
    /**
     * Output only. A commit timestamp representing when this Instance was created. For instances created before this field was added (August 2021), this value is `seconds: 0, nanos: 1`.
     */
    createTime?: string;
    /**
     * Required. The descriptive name for this instance as it appears in UIs. Can be changed at any time, but should be kept globally unique to avoid confusion.
     */
    displayName?: string;
    /**
     * Labels are a flexible and lightweight mechanism for organizing cloud resources into groups that reflect a customer's organizational needs and deployment strategies. They can be used to filter resources and aggregate metrics. * Label keys must be between 1 and 63 characters long and must conform to the regular expression: `\p{Ll}\p{Lo}{0,62}`. * Label values must be between 0 and 63 characters long and must conform to the regular expression: `[\p{Ll}\p{Lo}\p{N}_-]{0,63}`. * No more than 64 labels can be associated with a given resource. * Keys and values must both be under 128 bytes.
     */
    labels?: Record<string, string>;
    /**
     * The unique name of the instance. Values are of the form `projects/{project}/instances/a-z+[a-z0-9]`.
     */
    name?: string;
    /**
     * Output only. Reserved for future use.
     */
    satisfiesPzs?: boolean;
    /**
     * Output only. The current state of the instance.
     */
    state?: InstanceStateEnum;
    /**
     * The type of the instance. Defaults to `PRODUCTION`.
     */
    type?: InstanceTypeEnum;
}
/**
 * A collection of Bigtable Tables and the resources that serve them. All tables in an instance are served from all Clusters in the instance.
 */
export declare class InstanceInput extends SpeakeasyBase {
    /**
     * Required. The descriptive name for this instance as it appears in UIs. Can be changed at any time, but should be kept globally unique to avoid confusion.
     */
    displayName?: string;
    /**
     * Labels are a flexible and lightweight mechanism for organizing cloud resources into groups that reflect a customer's organizational needs and deployment strategies. They can be used to filter resources and aggregate metrics. * Label keys must be between 1 and 63 characters long and must conform to the regular expression: `\p{Ll}\p{Lo}{0,62}`. * Label values must be between 0 and 63 characters long and must conform to the regular expression: `[\p{Ll}\p{Lo}\p{N}_-]{0,63}`. * No more than 64 labels can be associated with a given resource. * Keys and values must both be under 128 bytes.
     */
    labels?: Record<string, string>;
    /**
     * The unique name of the instance. Values are of the form `projects/{project}/instances/a-z+[a-z0-9]`.
     */
    name?: string;
    /**
     * The type of the instance. Defaults to `PRODUCTION`.
     */
    type?: InstanceTypeEnum;
}
