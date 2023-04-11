import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRunV2Condition } from "./googlecloudrunv2condition";
import { GoogleCloudRunV2Container } from "./googlecloudrunv2container";
import { GoogleCloudRunV2RevisionScaling } from "./googlecloudrunv2revisionscaling";
import { GoogleCloudRunV2Volume } from "./googlecloudrunv2volume";
import { GoogleCloudRunV2VpcAccess } from "./googlecloudrunv2vpcaccess";
/**
 * The action to take if the encryption key is revoked.
 */
export declare enum GoogleCloudRunV2RevisionEncryptionKeyRevocationActionEnum {
    EncryptionKeyRevocationActionUnspecified = "ENCRYPTION_KEY_REVOCATION_ACTION_UNSPECIFIED",
    PreventNew = "PREVENT_NEW",
    Shutdown = "SHUTDOWN"
}
/**
 * The execution environment being used to host this Revision.
 */
export declare enum GoogleCloudRunV2RevisionExecutionEnvironmentEnum {
    ExecutionEnvironmentUnspecified = "EXECUTION_ENVIRONMENT_UNSPECIFIED",
    ExecutionEnvironmentGen1 = "EXECUTION_ENVIRONMENT_GEN1",
    ExecutionEnvironmentGen2 = "EXECUTION_ENVIRONMENT_GEN2"
}
/**
 * The least stable launch stage needed to create this resource, as defined by [Google Cloud Platform Launch Stages](https://cloud.google.com/terms/launch-stages). Cloud Run supports `ALPHA`, `BETA`, and `GA`. Note that this value might not be what was used as input. For example, if ALPHA was provided as input in the parent resource, but only BETA and GA-level features are were, this field will be BETA.
 */
export declare enum GoogleCloudRunV2RevisionLaunchStageEnum {
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
 * A Revision is an immutable snapshot of code and configuration. A Revision references a container image. Revisions are only created by updates to its parent Service.
 */
export declare class GoogleCloudRunV2Revision extends SpeakeasyBase {
    /**
     * KRM-style annotations for the resource.
     */
    annotations?: Record<string, string>;
    /**
     * Output only. The Condition of this Revision, containing its readiness status, and detailed error information in case it did not reach a serving state.
     */
    conditions?: GoogleCloudRunV2Condition[];
    /**
     * Holds the single container that defines the unit of execution for this Revision.
     */
    containers?: GoogleCloudRunV2Container[];
    /**
     * Output only. The creation time.
     */
    createTime?: string;
    /**
     * Output only. For a deleted resource, the deletion time. It is only populated as a response to a Delete request.
     */
    deleteTime?: string;
    /**
     * A reference to a customer managed encryption key (CMEK) to use to encrypt this container image. For more information, go to https://cloud.google.com/run/docs/securing/using-cmek
     */
    encryptionKey?: string;
    /**
     * The action to take if the encryption key is revoked.
     */
    encryptionKeyRevocationAction?: GoogleCloudRunV2RevisionEncryptionKeyRevocationActionEnum;
    /**
     * If encryption_key_revocation_action is SHUTDOWN, the duration before shutting down all instances. The minimum increment is 1 hour.
     */
    encryptionKeyShutdownDuration?: string;
    /**
     * Output only. A system-generated fingerprint for this version of the resource. May be used to detect modification conflict during updates.
     */
    etag?: string;
    /**
     * The execution environment being used to host this Revision.
     */
    executionEnvironment?: GoogleCloudRunV2RevisionExecutionEnvironmentEnum;
    /**
     * Output only. For a deleted resource, the time after which it will be permamently deleted. It is only populated as a response to a Delete request.
     */
    expireTime?: string;
    /**
     * Output only. A number that monotonically increases every time the user modifies the desired state.
     */
    generation?: string;
    /**
     * KRM-style labels for the resource. User-provided labels are shared with Google's billing system, so they can be used to filter, or break down billing charges by team, component, environment, state, etc. For more information, visit https://cloud.google.com/resource-manager/docs/creating-managing-labels or https://cloud.google.com/run/docs/configuring/labels
     */
    labels?: Record<string, string>;
    /**
     * The least stable launch stage needed to create this resource, as defined by [Google Cloud Platform Launch Stages](https://cloud.google.com/terms/launch-stages). Cloud Run supports `ALPHA`, `BETA`, and `GA`. Note that this value might not be what was used as input. For example, if ALPHA was provided as input in the parent resource, but only BETA and GA-level features are were, this field will be BETA.
     */
    launchStage?: GoogleCloudRunV2RevisionLaunchStageEnum;
    /**
     * Output only. The Google Console URI to obtain logs for the Revision.
     */
    logUri?: string;
    /**
     * Sets the maximum number of requests that each serving instance can receive.
     */
    maxInstanceRequestConcurrency?: number;
    /**
     * Output only. The unique name of this Revision.
     */
    name?: string;
    /**
     * Output only. The generation of this Revision currently serving traffic. See comments in `reconciling` for additional information on reconciliation process in Cloud Run.
     */
    observedGeneration?: string;
    /**
     * Output only. Indicates whether the resource's reconciliation is still in progress. See comments in `Service.reconciling` for additional information on reconciliation process in Cloud Run.
     */
    reconciling?: boolean;
    /**
     * Output only. Reserved for future use.
     */
    satisfiesPzs?: boolean;
    /**
     * Settings for revision-level scaling settings.
     */
    scaling?: GoogleCloudRunV2RevisionScaling;
    /**
     * Output only. The name of the parent service.
     */
    service?: string;
    /**
     * Email address of the IAM service account associated with the revision of the service. The service account represents the identity of the running revision, and determines what permissions the revision has.
     */
    serviceAccount?: string;
    /**
     * Max allowed time for an instance to respond to a request.
     */
    timeout?: string;
    /**
     * Output only. Server assigned unique identifier for the Revision. The value is a UUID4 string and guaranteed to remain unchanged until the resource is deleted.
     */
    uid?: string;
    /**
     * Output only. The last-modified time.
     */
    updateTime?: string;
    /**
     * A list of Volumes to make available to containers.
     */
    volumes?: GoogleCloudRunV2Volume[];
    /**
     * VPC Access settings. For more information on creating a VPC Connector, visit https://cloud.google.com/vpc/docs/configure-serverless-vpc-access For information on how to configure Cloud Run with an existing VPC Connector, visit https://cloud.google.com/run/docs/configuring/connecting-vpc
     */
    vpcAccess?: GoogleCloudRunV2VpcAccess;
}
