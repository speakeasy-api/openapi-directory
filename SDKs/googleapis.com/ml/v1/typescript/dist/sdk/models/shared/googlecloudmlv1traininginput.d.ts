import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudMlV1EncryptionConfig } from "./googlecloudmlv1encryptionconfig";
import { GoogleCloudMlV1HyperparameterSpec } from "./googlecloudmlv1hyperparameterspec";
import { GoogleCloudMlV1ReplicaConfig } from "./googlecloudmlv1replicaconfig";
import { GoogleCloudMlV1Scheduling } from "./googlecloudmlv1scheduling";
/**
 * Required. Specifies the machine types, the number of replicas for workers and parameter servers.
 */
export declare enum GoogleCloudMlV1TrainingInputScaleTierEnum {
    Basic = "BASIC",
    Standard1 = "STANDARD_1",
    Premium1 = "PREMIUM_1",
    BasicGpu = "BASIC_GPU",
    BasicTpu = "BASIC_TPU",
    Custom = "CUSTOM"
}
/**
 * Represents input parameters for a training job. When using the gcloud command to submit your training job, you can specify the input parameters as command-line arguments and/or in a YAML configuration file referenced from the --config command-line argument. For details, see the guide to [submitting a training job](/ai-platform/training/docs/training-jobs).
 */
export declare class GoogleCloudMlV1TrainingInput extends SpeakeasyBase {
    /**
     * Optional. Command-line arguments passed to the training application when it starts. If your job uses a custom container, then the arguments are passed to the container's `ENTRYPOINT` command.
     */
    args?: string[];
    /**
     * Optional. Whether you want AI Platform Training to enable [interactive shell access](https://cloud.google.com/ai-platform/training/docs/monitor-debug-interactive-shell) to training containers. If set to `true`, you can access interactive shells at the URIs given by TrainingOutput.web_access_uris or HyperparameterOutput.web_access_uris (within TrainingOutput.trials).
     */
    enableWebAccess?: boolean;
    /**
     * Represents a custom encryption key configuration that can be applied to a resource.
     */
    encryptionConfig?: GoogleCloudMlV1EncryptionConfig;
    /**
     * Represents the configuration for a replica in a cluster.
     */
    evaluatorConfig?: GoogleCloudMlV1ReplicaConfig;
    /**
     * Optional. The number of evaluator replicas to use for the training job. Each replica in the cluster will be of the type specified in `evaluator_type`. This value can only be used when `scale_tier` is set to `CUSTOM`. If you set this value, you must also set `evaluator_type`. The default value is zero.
     */
    evaluatorCount?: string;
    /**
     * Optional. Specifies the type of virtual machine to use for your training job's evaluator nodes. The supported values are the same as those described in the entry for `masterType`. This value must be consistent with the category of machine type that `masterType` uses. In other words, both must be Compute Engine machine types or both must be legacy machine types. This value must be present when `scaleTier` is set to `CUSTOM` and `evaluatorCount` is greater than zero.
     */
    evaluatorType?: string;
    /**
     * Represents a set of hyperparameters to optimize.
     */
    hyperparameters?: GoogleCloudMlV1HyperparameterSpec;
    /**
     * Optional. A Google Cloud Storage path in which to store training outputs and other data needed for training. This path is passed to your TensorFlow program as the '--job-dir' command-line argument. The benefit of specifying this field is that Cloud ML validates the path for use in training.
     */
    jobDir?: string;
    /**
     * Represents the configuration for a replica in a cluster.
     */
    masterConfig?: GoogleCloudMlV1ReplicaConfig;
    /**
     * Optional. Specifies the type of virtual machine to use for your training job's master worker. You must specify this field when `scaleTier` is set to `CUSTOM`. You can use certain Compute Engine machine types directly in this field. See the [list of compatible Compute Engine machine types](/ai-platform/training/docs/machine-types#compute-engine-machine-types). Alternatively, you can use the certain legacy machine types in this field. See the [list of legacy machine types](/ai-platform/training/docs/machine-types#legacy-machine-types). Finally, if you want to use a TPU for training, specify `cloud_tpu` in this field. Learn more about the [special configuration options for training with TPUs](/ai-platform/training/docs/using-tpus#configuring_a_custom_tpu_machine).
     */
    masterType?: string;
    /**
     * Optional. The full name of the [Compute Engine network](/vpc/docs/vpc) to which the Job is peered. For example, `projects/12345/global/networks/myVPC`. The format of this field is `projects/{project}/global/networks/{network}`, where {project} is a project number (like `12345`) and {network} is network name. Private services access must already be configured for the network. If left unspecified, the Job is not peered with any network. [Learn about using VPC Network Peering.](/ai-platform/training/docs/vpc-peering).
     */
    network?: string;
    /**
     * Required. The Google Cloud Storage location of the packages with the training program and any additional dependencies. The maximum number of package URIs is 100.
     */
    packageUris?: string[];
    /**
     * Represents the configuration for a replica in a cluster.
     */
    parameterServerConfig?: GoogleCloudMlV1ReplicaConfig;
    /**
     * Optional. The number of parameter server replicas to use for the training job. Each replica in the cluster will be of the type specified in `parameter_server_type`. This value can only be used when `scale_tier` is set to `CUSTOM`. If you set this value, you must also set `parameter_server_type`. The default value is zero.
     */
    parameterServerCount?: string;
    /**
     * Optional. Specifies the type of virtual machine to use for your training job's parameter server. The supported values are the same as those described in the entry for `master_type`. This value must be consistent with the category of machine type that `masterType` uses. In other words, both must be Compute Engine machine types or both must be legacy machine types. This value must be present when `scaleTier` is set to `CUSTOM` and `parameter_server_count` is greater than zero.
     */
    parameterServerType?: string;
    /**
     * Required. The Python module name to run after installing the packages.
     */
    pythonModule?: string;
    /**
     * Optional. The version of Python used in training. You must either specify this field or specify `masterConfig.imageUri`. The following Python versions are available: * Python '3.7' is available when `runtime_version` is set to '1.15' or later. * Python '3.5' is available when `runtime_version` is set to a version from '1.4' to '1.14'. * Python '2.7' is available when `runtime_version` is set to '1.15' or earlier. Read more about the Python versions available for [each runtime version](/ml-engine/docs/runtime-version-list).
     */
    pythonVersion?: string;
    /**
     * Required. The region to run the training job in. See the [available regions](/ai-platform/training/docs/regions) for AI Platform Training.
     */
    region?: string;
    /**
     * Optional. The AI Platform runtime version to use for training. You must either specify this field or specify `masterConfig.imageUri`. For more information, see the [runtime version list](/ai-platform/training/docs/runtime-version-list) and learn [how to manage runtime versions](/ai-platform/training/docs/versioning).
     */
    runtimeVersion?: string;
    /**
     * Required. Specifies the machine types, the number of replicas for workers and parameter servers.
     */
    scaleTier?: GoogleCloudMlV1TrainingInputScaleTierEnum;
    /**
     * All parameters related to scheduling of training jobs.
     */
    scheduling?: GoogleCloudMlV1Scheduling;
    /**
     * Optional. The email address of a service account to use when running the training appplication. You must have the `iam.serviceAccounts.actAs` permission for the specified service account. In addition, the AI Platform Training Google-managed service account must have the `roles/iam.serviceAccountAdmin` role for the specified service account. [Learn more about configuring a service account.](/ai-platform/training/docs/custom-service-account) If not specified, the AI Platform Training Google-managed service account is used by default.
     */
    serviceAccount?: string;
    /**
     * Optional. Use `chief` instead of `master` in the `TF_CONFIG` environment variable when training with a custom container. Defaults to `false`. [Learn more about this field.](/ai-platform/training/docs/distributed-training-details#chief-versus-master) This field has no effect for training jobs that don't use a custom container.
     */
    useChiefInTfConfig?: boolean;
    /**
     * Represents the configuration for a replica in a cluster.
     */
    workerConfig?: GoogleCloudMlV1ReplicaConfig;
    /**
     * Optional. The number of worker replicas to use for the training job. Each replica in the cluster will be of the type specified in `worker_type`. This value can only be used when `scale_tier` is set to `CUSTOM`. If you set this value, you must also set `worker_type`. The default value is zero.
     */
    workerCount?: string;
    /**
     * Optional. Specifies the type of virtual machine to use for your training job's worker nodes. The supported values are the same as those described in the entry for `masterType`. This value must be consistent with the category of machine type that `masterType` uses. In other words, both must be Compute Engine machine types or both must be legacy machine types. If you use `cloud_tpu` for this value, see special instructions for [configuring a custom TPU machine](/ml-engine/docs/tensorflow/using-tpus#configuring_a_custom_tpu_machine). This value must be present when `scaleTier` is set to `CUSTOM` and `workerCount` is greater than zero.
     */
    workerType?: string;
}
