import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRunV2Container } from "./googlecloudrunv2container";
import { GoogleCloudRunV2Volume } from "./googlecloudrunv2volume";
import { GoogleCloudRunV2VpcAccess } from "./googlecloudrunv2vpcaccess";
/**
 * The execution environment being used to host this Task.
 */
export declare enum GoogleCloudRunV2TaskTemplateExecutionEnvironmentEnum {
    ExecutionEnvironmentUnspecified = "EXECUTION_ENVIRONMENT_UNSPECIFIED",
    ExecutionEnvironmentGen1 = "EXECUTION_ENVIRONMENT_GEN1",
    ExecutionEnvironmentGen2 = "EXECUTION_ENVIRONMENT_GEN2"
}
/**
 * TaskTemplate describes the data a task should have when created from a template.
 */
export declare class GoogleCloudRunV2TaskTemplate extends SpeakeasyBase {
    /**
     * Holds the single container that defines the unit of execution for this task.
     */
    containers?: GoogleCloudRunV2Container[];
    /**
     * A reference to a customer managed encryption key (CMEK) to use to encrypt this container image. For more information, go to https://cloud.google.com/run/docs/securing/using-cmek
     */
    encryptionKey?: string;
    /**
     * The execution environment being used to host this Task.
     */
    executionEnvironment?: GoogleCloudRunV2TaskTemplateExecutionEnvironmentEnum;
    /**
     * Number of retries allowed per Task, before marking this Task failed. Defaults to 3.
     */
    maxRetries?: number;
    /**
     * Email address of the IAM service account associated with the Task of a Job. The service account represents the identity of the running task, and determines what permissions the task has. If not provided, the task will use the project's default service account.
     */
    serviceAccount?: string;
    /**
     * Max allowed time duration the Task may be active before the system will actively try to mark it failed and kill associated containers. This applies per attempt of a task, meaning each retry can run for the full timeout. Defaults to 600 seconds.
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
