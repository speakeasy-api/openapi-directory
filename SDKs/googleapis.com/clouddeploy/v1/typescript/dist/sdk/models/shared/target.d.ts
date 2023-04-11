import { SpeakeasyBase } from "../../../internal/utils";
import { AnthosCluster } from "./anthoscluster";
import { CloudRunLocation } from "./cloudrunlocation";
import { ExecutionConfig } from "./executionconfig";
import { GkeCluster } from "./gkecluster";
import { MultiTarget } from "./multitarget";
/**
 * A `Target` resource in the Google Cloud Deploy API. A `Target` defines a location to which a Skaffold configuration can be deployed.
 */
export declare class TargetInput extends SpeakeasyBase {
    /**
     * Optional. User annotations. These attributes can only be set and used by the user, and not by Google Cloud Deploy. See https://google.aip.dev/128#annotations for more details such as format and size limitations.
     */
    annotations?: Record<string, string>;
    /**
     * Information specifying an Anthos Cluster.
     */
    anthosCluster?: AnthosCluster;
    /**
     * Optional. Description of the `Target`. Max length is 255 characters.
     */
    description?: string;
    /**
     * Optional. This checksum is computed by the server based on the value of other fields, and may be sent on update and delete requests to ensure the client has an up-to-date value before proceeding.
     */
    etag?: string;
    /**
     * Configurations for all execution that relates to this `Target`. Each `ExecutionEnvironmentUsage` value may only be used in a single configuration; using the same value multiple times is an error. When one or more configurations are specified, they must include the `RENDER` and `DEPLOY` `ExecutionEnvironmentUsage` values. When no configurations are specified, execution will use the default specified in `DefaultPool`.
     */
    executionConfigs?: ExecutionConfig[];
    /**
     * Information specifying a GKE Cluster.
     */
    gke?: GkeCluster;
    /**
     * Optional. Labels are attributes that can be set and used by both the user and by Google Cloud Deploy. Labels must meet the following constraints: * Keys and values can contain only lowercase letters, numeric characters, underscores, and dashes. * All characters must use UTF-8 encoding, and international characters are allowed. * Keys must start with a lowercase letter or international character. * Each resource is limited to a maximum of 64 labels. Both keys and values are additionally constrained to be <= 128 bytes.
     */
    labels?: Record<string, string>;
    /**
     * Information specifying a multiTarget.
     */
    multiTarget?: MultiTarget;
    /**
     * Optional. Name of the `Target`. Format is projects/{project}/locations/{location}/targets/a-z{0,62}.
     */
    name?: string;
    /**
     * Optional. Whether or not the `Target` requires approval.
     */
    requireApproval?: boolean;
    /**
     * Information specifying where to deploy a Cloud Run Service.
     */
    run?: CloudRunLocation;
}
/**
 * A `Target` resource in the Google Cloud Deploy API. A `Target` defines a location to which a Skaffold configuration can be deployed.
 */
export declare class Target extends SpeakeasyBase {
    /**
     * Optional. User annotations. These attributes can only be set and used by the user, and not by Google Cloud Deploy. See https://google.aip.dev/128#annotations for more details such as format and size limitations.
     */
    annotations?: Record<string, string>;
    /**
     * Information specifying an Anthos Cluster.
     */
    anthosCluster?: AnthosCluster;
    /**
     * Output only. Time at which the `Target` was created.
     */
    createTime?: string;
    /**
     * Optional. Description of the `Target`. Max length is 255 characters.
     */
    description?: string;
    /**
     * Optional. This checksum is computed by the server based on the value of other fields, and may be sent on update and delete requests to ensure the client has an up-to-date value before proceeding.
     */
    etag?: string;
    /**
     * Configurations for all execution that relates to this `Target`. Each `ExecutionEnvironmentUsage` value may only be used in a single configuration; using the same value multiple times is an error. When one or more configurations are specified, they must include the `RENDER` and `DEPLOY` `ExecutionEnvironmentUsage` values. When no configurations are specified, execution will use the default specified in `DefaultPool`.
     */
    executionConfigs?: ExecutionConfig[];
    /**
     * Information specifying a GKE Cluster.
     */
    gke?: GkeCluster;
    /**
     * Optional. Labels are attributes that can be set and used by both the user and by Google Cloud Deploy. Labels must meet the following constraints: * Keys and values can contain only lowercase letters, numeric characters, underscores, and dashes. * All characters must use UTF-8 encoding, and international characters are allowed. * Keys must start with a lowercase letter or international character. * Each resource is limited to a maximum of 64 labels. Both keys and values are additionally constrained to be <= 128 bytes.
     */
    labels?: Record<string, string>;
    /**
     * Information specifying a multiTarget.
     */
    multiTarget?: MultiTarget;
    /**
     * Optional. Name of the `Target`. Format is projects/{project}/locations/{location}/targets/a-z{0,62}.
     */
    name?: string;
    /**
     * Optional. Whether or not the `Target` requires approval.
     */
    requireApproval?: boolean;
    /**
     * Information specifying where to deploy a Cloud Run Service.
     */
    run?: CloudRunLocation;
    /**
     * Output only. Resource id of the `Target`.
     */
    targetId?: string;
    /**
     * Output only. Unique identifier of the `Target`.
     */
    uid?: string;
    /**
     * Output only. Most recent time at which the `Target` was updated.
     */
    updateTime?: string;
}
