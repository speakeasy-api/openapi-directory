import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRunV2BinaryAuthorization } from "./googlecloudrunv2binaryauthorization";
import { GoogleCloudRunV2Condition } from "./googlecloudrunv2condition";
import { GoogleCloudRunV2RevisionTemplate } from "./googlecloudrunv2revisiontemplate";
import { GoogleCloudRunV2TrafficTarget } from "./googlecloudrunv2traffictarget";
import { GoogleCloudRunV2TrafficTargetStatus } from "./googlecloudrunv2traffictargetstatus";
/**
 * Provides the ingress settings for this Service. On output, returns the currently observed ingress settings, or INGRESS_TRAFFIC_UNSPECIFIED if no revision is active.
 */
export declare enum GoogleCloudRunV2ServiceIngressEnum {
    IngressTrafficUnspecified = "INGRESS_TRAFFIC_UNSPECIFIED",
    IngressTrafficAll = "INGRESS_TRAFFIC_ALL",
    IngressTrafficInternalOnly = "INGRESS_TRAFFIC_INTERNAL_ONLY",
    IngressTrafficInternalLoadBalancer = "INGRESS_TRAFFIC_INTERNAL_LOAD_BALANCER"
}
/**
 * The launch stage as defined by [Google Cloud Platform Launch Stages](https://cloud.google.com/terms/launch-stages). Cloud Run supports `ALPHA`, `BETA`, and `GA`. If no value is specified, GA is assumed. Set the launch stage to a preview stage on input to allow use of preview features in that stage. On read (or output), describes whether the resource uses preview features. For example, if ALPHA is provided as input, but only BETA and GA-level features are used, this field will be BETA on output.
 */
export declare enum GoogleCloudRunV2ServiceLaunchStageEnum {
    LaunchStageUnspecified = "LAUNCH_STAGE_UNSPECIFIED",
    Unimplemented = "UNIMPLEMENTED",
    Prelaunch = "PRELAUNCH",
    EarlyAccess = "EARLY_ACCESS",
    Alpha = "ALPHA",
    Beta = "BETA",
    Ga = "GA",
    Deprecated = "DEPRECATED"
}
/**
 * Service acts as a top-level container that manages a set of configurations and revision templates which implement a network service. Service exists to provide a singular abstraction which can be access controlled, reasoned about, and which encapsulates software lifecycle decisions such as rollout policy and team resource ownership.
 */
export declare class GoogleCloudRunV2ServiceInput extends SpeakeasyBase {
    /**
     * Unstructured key value map that may be set by external tools to store and arbitrary metadata. They are not queryable and should be preserved when modifying objects. Cloud Run API v2 does not support annotations with `run.googleapis.com`, `cloud.googleapis.com`, `serving.knative.dev`, or `autoscaling.knative.dev` namespaces, and they will be rejected. All system annotations in v1 now have a corresponding field in v2 Service. This field follows Kubernetes annotations' namespacing, limits, and rules. More info: https://kubernetes.io/docs/user-guide/annotations
     */
    annotations?: Record<string, string>;
    /**
     * Settings for Binary Authorization feature.
     */
    binaryAuthorization?: GoogleCloudRunV2BinaryAuthorization;
    /**
     * Arbitrary identifier for the API client.
     */
    client?: string;
    /**
     * Arbitrary version identifier for the API client.
     */
    clientVersion?: string;
    /**
     * User-provided description of the Service. This field currently has a 512-character limit.
     */
    description?: string;
    /**
     * Provides the ingress settings for this Service. On output, returns the currently observed ingress settings, or INGRESS_TRAFFIC_UNSPECIFIED if no revision is active.
     */
    ingress?: GoogleCloudRunV2ServiceIngressEnum;
    /**
     * Map of string keys and values that can be used to organize and categorize objects. User-provided labels are shared with Google's billing system, so they can be used to filter, or break down billing charges by team, component, environment, state, etc. For more information, visit https://cloud.google.com/resource-manager/docs/creating-managing-labels or https://cloud.google.com/run/docs/configuring/labels Cloud Run API v2 does not support labels with `run.googleapis.com`, `cloud.googleapis.com`, `serving.knative.dev`, or `autoscaling.knative.dev` namespaces, and they will be rejected. All system labels in v1 now have a corresponding field in v2 Service.
     */
    labels?: Record<string, string>;
    /**
     * The launch stage as defined by [Google Cloud Platform Launch Stages](https://cloud.google.com/terms/launch-stages). Cloud Run supports `ALPHA`, `BETA`, and `GA`. If no value is specified, GA is assumed. Set the launch stage to a preview stage on input to allow use of preview features in that stage. On read (or output), describes whether the resource uses preview features. For example, if ALPHA is provided as input, but only BETA and GA-level features are used, this field will be BETA on output.
     */
    launchStage?: GoogleCloudRunV2ServiceLaunchStageEnum;
    /**
     * The fully qualified name of this Service. In CreateServiceRequest, this field is ignored, and instead composed from CreateServiceRequest.parent and CreateServiceRequest.service_id. Format: projects/{project}/locations/{location}/services/{service_id}
     */
    name?: string;
    /**
     * RevisionTemplate describes the data a revision should have when created from a template.
     */
    template?: GoogleCloudRunV2RevisionTemplate;
    /**
     * Defines a status condition for a resource.
     */
    terminalCondition?: GoogleCloudRunV2Condition;
    /**
     * Specifies how to distribute traffic over a collection of Revisions belonging to the Service. If traffic is empty or not provided, defaults to 100% traffic to the latest `Ready` Revision.
     */
    traffic?: GoogleCloudRunV2TrafficTarget[];
}
/**
 * Service acts as a top-level container that manages a set of configurations and revision templates which implement a network service. Service exists to provide a singular abstraction which can be access controlled, reasoned about, and which encapsulates software lifecycle decisions such as rollout policy and team resource ownership.
 */
export declare class GoogleCloudRunV2Service extends SpeakeasyBase {
    /**
     * Unstructured key value map that may be set by external tools to store and arbitrary metadata. They are not queryable and should be preserved when modifying objects. Cloud Run API v2 does not support annotations with `run.googleapis.com`, `cloud.googleapis.com`, `serving.knative.dev`, or `autoscaling.knative.dev` namespaces, and they will be rejected. All system annotations in v1 now have a corresponding field in v2 Service. This field follows Kubernetes annotations' namespacing, limits, and rules. More info: https://kubernetes.io/docs/user-guide/annotations
     */
    annotations?: Record<string, string>;
    /**
     * Settings for Binary Authorization feature.
     */
    binaryAuthorization?: GoogleCloudRunV2BinaryAuthorization;
    /**
     * Arbitrary identifier for the API client.
     */
    client?: string;
    /**
     * Arbitrary version identifier for the API client.
     */
    clientVersion?: string;
    /**
     * Output only. The Conditions of all other associated sub-resources. They contain additional diagnostics information in case the Service does not reach its Serving state. See comments in `reconciling` for additional information on reconciliation process in Cloud Run.
     */
    conditions?: GoogleCloudRunV2Condition[];
    /**
     * Output only. The creation time.
     */
    createTime?: string;
    /**
     * Output only. Email address of the authenticated creator.
     */
    creator?: string;
    /**
     * Output only. The deletion time.
     */
    deleteTime?: string;
    /**
     * User-provided description of the Service. This field currently has a 512-character limit.
     */
    description?: string;
    /**
     * Output only. A system-generated fingerprint for this version of the resource. May be used to detect modification conflict during updates.
     */
    etag?: string;
    /**
     * Output only. For a deleted resource, the time after which it will be permamently deleted.
     */
    expireTime?: string;
    /**
     * Output only. A number that monotonically increases every time the user modifies the desired state. Please note that unlike v1, this is an int64 value. As with most Google APIs, its JSON representation will be a `string` instead of an `integer`.
     */
    generation?: string;
    /**
     * Provides the ingress settings for this Service. On output, returns the currently observed ingress settings, or INGRESS_TRAFFIC_UNSPECIFIED if no revision is active.
     */
    ingress?: GoogleCloudRunV2ServiceIngressEnum;
    /**
     * Map of string keys and values that can be used to organize and categorize objects. User-provided labels are shared with Google's billing system, so they can be used to filter, or break down billing charges by team, component, environment, state, etc. For more information, visit https://cloud.google.com/resource-manager/docs/creating-managing-labels or https://cloud.google.com/run/docs/configuring/labels Cloud Run API v2 does not support labels with `run.googleapis.com`, `cloud.googleapis.com`, `serving.knative.dev`, or `autoscaling.knative.dev` namespaces, and they will be rejected. All system labels in v1 now have a corresponding field in v2 Service.
     */
    labels?: Record<string, string>;
    /**
     * Output only. Email address of the last authenticated modifier.
     */
    lastModifier?: string;
    /**
     * Output only. Name of the last created revision. See comments in `reconciling` for additional information on reconciliation process in Cloud Run.
     */
    latestCreatedRevision?: string;
    /**
     * Output only. Name of the latest revision that is serving traffic. See comments in `reconciling` for additional information on reconciliation process in Cloud Run.
     */
    latestReadyRevision?: string;
    /**
     * The launch stage as defined by [Google Cloud Platform Launch Stages](https://cloud.google.com/terms/launch-stages). Cloud Run supports `ALPHA`, `BETA`, and `GA`. If no value is specified, GA is assumed. Set the launch stage to a preview stage on input to allow use of preview features in that stage. On read (or output), describes whether the resource uses preview features. For example, if ALPHA is provided as input, but only BETA and GA-level features are used, this field will be BETA on output.
     */
    launchStage?: GoogleCloudRunV2ServiceLaunchStageEnum;
    /**
     * The fully qualified name of this Service. In CreateServiceRequest, this field is ignored, and instead composed from CreateServiceRequest.parent and CreateServiceRequest.service_id. Format: projects/{project}/locations/{location}/services/{service_id}
     */
    name?: string;
    /**
     * Output only. The generation of this Service currently serving traffic. See comments in `reconciling` for additional information on reconciliation process in Cloud Run. Please note that unlike v1, this is an int64 value. As with most Google APIs, its JSON representation will be a `string` instead of an `integer`.
     */
    observedGeneration?: string;
    /**
     * Output only. Returns true if the Service is currently being acted upon by the system to bring it into the desired state. When a new Service is created, or an existing one is updated, Cloud Run will asynchronously perform all necessary steps to bring the Service to the desired serving state. This process is called reconciliation. While reconciliation is in process, `observed_generation`, `latest_ready_revison`, `traffic_statuses`, and `uri` will have transient values that might mismatch the intended state: Once reconciliation is over (and this field is false), there are two possible outcomes: reconciliation succeeded and the serving state matches the Service, or there was an error, and reconciliation failed. This state can be found in `terminal_condition.state`. If reconciliation succeeded, the following fields will match: `traffic` and `traffic_statuses`, `observed_generation` and `generation`, `latest_ready_revision` and `latest_created_revision`. If reconciliation failed, `traffic_statuses`, `observed_generation`, and `latest_ready_revision` will have the state of the last serving revision, or empty for newly created Services. Additional information on the failure can be found in `terminal_condition` and `conditions`.
     */
    reconciling?: boolean;
    /**
     * Output only. Reserved for future use.
     */
    satisfiesPzs?: boolean;
    /**
     * RevisionTemplate describes the data a revision should have when created from a template.
     */
    template?: GoogleCloudRunV2RevisionTemplate;
    /**
     * Defines a status condition for a resource.
     */
    terminalCondition?: GoogleCloudRunV2Condition;
    /**
     * Specifies how to distribute traffic over a collection of Revisions belonging to the Service. If traffic is empty or not provided, defaults to 100% traffic to the latest `Ready` Revision.
     */
    traffic?: GoogleCloudRunV2TrafficTarget[];
    /**
     * Output only. Detailed status information for corresponding traffic targets. See comments in `reconciling` for additional information on reconciliation process in Cloud Run.
     */
    trafficStatuses?: GoogleCloudRunV2TrafficTargetStatus[];
    /**
     * Output only. Server assigned unique identifier for the trigger. The value is a UUID4 string and guaranteed to remain unchanged until the resource is deleted.
     */
    uid?: string;
    /**
     * Output only. The last-modified time.
     */
    updateTime?: string;
    /**
     * Output only. The main URI in which this Service is serving traffic.
     */
    uri?: string;
}
