import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRunV2Container } from "./googlecloudrunv2container";
import { GoogleCloudRunV2RevisionScaling } from "./googlecloudrunv2revisionscaling";
import { GoogleCloudRunV2Volume } from "./googlecloudrunv2volume";
import { GoogleCloudRunV2VpcAccess } from "./googlecloudrunv2vpcaccess";
/**
 * The sandbox environment to host this Revision.
 */
export declare enum GoogleCloudRunV2RevisionTemplateExecutionEnvironmentEnum {
    ExecutionEnvironmentUnspecified = "EXECUTION_ENVIRONMENT_UNSPECIFIED",
    ExecutionEnvironmentGen1 = "EXECUTION_ENVIRONMENT_GEN1",
    ExecutionEnvironmentGen2 = "EXECUTION_ENVIRONMENT_GEN2"
}
/**
 * RevisionTemplate describes the data a revision should have when created from a template.
 */
export declare class GoogleCloudRunV2RevisionTemplate extends SpeakeasyBase {
    /**
     * KRM-style annotations for the resource. Cloud Run API v2 does not support annotations with `run.googleapis.com`, `cloud.googleapis.com`, `serving.knative.dev`, or `autoscaling.knative.dev` namespaces, and they will be rejected. All system annotations in v1 now have a corresponding field in v2 RevisionTemplate.
     */
    annotations?: Record<string, string>;
    /**
     * Holds the single container that defines the unit of execution for this Revision.
     */
    containers?: GoogleCloudRunV2Container[];
    /**
     * A reference to a customer managed encryption key (CMEK) to use to encrypt this container image. For more information, go to https://cloud.google.com/run/docs/securing/using-cmek
     */
    encryptionKey?: string;
    /**
     * The sandbox environment to host this Revision.
     */
    executionEnvironment?: GoogleCloudRunV2RevisionTemplateExecutionEnvironmentEnum;
    /**
     * KRM-style labels for the resource. Cloud Run API v2 does not support labels with `run.googleapis.com`, `cloud.googleapis.com`, `serving.knative.dev`, or `autoscaling.knative.dev` namespaces, and they will be rejected. All system labels in v1 now have a corresponding field in v2 RevisionTemplate.
     */
    labels?: Record<string, string>;
    /**
     * Sets the maximum number of requests that each serving instance can receive.
     */
    maxInstanceRequestConcurrency?: number;
    /**
     * The unique name for the revision. If this field is omitted, it will be automatically generated based on the Service name.
     */
    revision?: string;
    /**
     * Settings for revision-level scaling settings.
     */
    scaling?: GoogleCloudRunV2RevisionScaling;
    /**
     * Email address of the IAM service account associated with the revision of the service. The service account represents the identity of the running revision, and determines what permissions the revision has. If not provided, the revision will use the project's default service account.
     */
    serviceAccount?: string;
    /**
     * Max allowed time for an instance to respond to a request.
     */
    timeout?: string;
    /**
     * A list of Volumes to make available to containers.
     */
    volumes?: GoogleCloudRunV2Volume[];
    /**
     * VPC Access settings. For more information on creating a VPC Connector, visit https://cloud.google.com/vpc/docs/configure-serverless-vpc-access For information on how to configure Cloud Run with an existing VPC Connector, visit https://cloud.google.com/run/docs/configuring/connecting-vpc
     */
    vpcAccess?: GoogleCloudRunV2VpcAccess;
}
