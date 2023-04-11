import { SpeakeasyBase } from "../../../internal/utils";
import { AutoscalingConfig } from "./autoscalingconfig";
import { AuxiliaryNodeGroup, AuxiliaryNodeGroupInput } from "./auxiliarynodegroup";
import { DataprocMetricConfig } from "./dataprocmetricconfig";
import { EncryptionConfig } from "./encryptionconfig";
import { EndpointConfig, EndpointConfigInput } from "./endpointconfig";
import { GceClusterConfig } from "./gceclusterconfig";
import { GkeClusterConfig } from "./gkeclusterconfig";
import { InstanceGroupConfig, InstanceGroupConfigInput } from "./instancegroupconfig";
import { LifecycleConfig, LifecycleConfigInput } from "./lifecycleconfig";
import { MetastoreConfig } from "./metastoreconfig";
import { NodeInitializationAction } from "./nodeinitializationaction";
import { SecurityConfig } from "./securityconfig";
import { SoftwareConfig } from "./softwareconfig";
/**
 * The cluster config.
 */
export declare class ClusterConfigInput extends SpeakeasyBase {
    /**
     * Autoscaling Policy config associated with the cluster.
     */
    autoscalingConfig?: AutoscalingConfig;
    /**
     * Optional. The node group settings.
     */
    auxiliaryNodeGroups?: AuxiliaryNodeGroupInput[];
    /**
     * Optional. A Cloud Storage bucket used to stage job dependencies, config files, and job driver console output. If you do not specify a staging bucket, Cloud Dataproc will determine a Cloud Storage location (US, ASIA, or EU) for your cluster's staging bucket according to the Compute Engine zone where your cluster is deployed, and then create and manage this project-level, per-location bucket (see Dataproc staging and temp buckets (https://cloud.google.com/dataproc/docs/concepts/configuring-clusters/staging-bucket)). This field requires a Cloud Storage bucket name, not a gs://... URI to a Cloud Storage bucket.
     */
    configBucket?: string;
    /**
     * Dataproc metric config.
     */
    dataprocMetricConfig?: DataprocMetricConfig;
    /**
     * Encryption settings for the cluster.
     */
    encryptionConfig?: EncryptionConfig;
    /**
     * Endpoint config for this cluster
     */
    endpointConfig?: EndpointConfigInput;
    /**
     * Common config settings for resources of Compute Engine cluster instances, applicable to all instances in the cluster.
     */
    gceClusterConfig?: GceClusterConfig;
    /**
     * The cluster's GKE config.
     */
    gkeClusterConfig?: GkeClusterConfig;
    /**
     * Optional. Commands to execute on each node after config is completed. By default, executables are run on master and all worker nodes. You can test a node's role metadata to run an executable on a master or worker node, as shown below using curl (you can also use wget): ROLE=$(curl -H Metadata-Flavor:Google http://metadata/computeMetadata/v1/instance/attributes/dataproc-role) if [[ "${ROLE}" == 'Master' ]]; then ... master specific actions ... else ... worker specific actions ... fi
     */
    initializationActions?: NodeInitializationAction[];
    /**
     * Specifies the cluster auto-delete schedule configuration.
     */
    lifecycleConfig?: LifecycleConfigInput;
    /**
     * The config settings for Compute Engine resources in an instance group, such as a master or worker group.
     */
    masterConfig?: InstanceGroupConfigInput;
    /**
     * Specifies a Metastore configuration.
     */
    metastoreConfig?: MetastoreConfig;
    /**
     * The config settings for Compute Engine resources in an instance group, such as a master or worker group.
     */
    secondaryWorkerConfig?: InstanceGroupConfigInput;
    /**
     * Security related configuration, including encryption, Kerberos, etc.
     */
    securityConfig?: SecurityConfig;
    /**
     * Specifies the selection and config of software inside the cluster.
     */
    softwareConfig?: SoftwareConfig;
    /**
     * Optional. A Cloud Storage bucket used to store ephemeral cluster and jobs data, such as Spark and MapReduce history files. If you do not specify a temp bucket, Dataproc will determine a Cloud Storage location (US, ASIA, or EU) for your cluster's temp bucket according to the Compute Engine zone where your cluster is deployed, and then create and manage this project-level, per-location bucket. The default bucket has a TTL of 90 days, but you can use any TTL (or none) if you specify a bucket (see Dataproc staging and temp buckets (https://cloud.google.com/dataproc/docs/concepts/configuring-clusters/staging-bucket)). This field requires a Cloud Storage bucket name, not a gs://... URI to a Cloud Storage bucket.
     */
    tempBucket?: string;
    /**
     * The config settings for Compute Engine resources in an instance group, such as a master or worker group.
     */
    workerConfig?: InstanceGroupConfigInput;
}
/**
 * The cluster config.
 */
export declare class ClusterConfig extends SpeakeasyBase {
    /**
     * Autoscaling Policy config associated with the cluster.
     */
    autoscalingConfig?: AutoscalingConfig;
    /**
     * Optional. The node group settings.
     */
    auxiliaryNodeGroups?: AuxiliaryNodeGroup[];
    /**
     * Optional. A Cloud Storage bucket used to stage job dependencies, config files, and job driver console output. If you do not specify a staging bucket, Cloud Dataproc will determine a Cloud Storage location (US, ASIA, or EU) for your cluster's staging bucket according to the Compute Engine zone where your cluster is deployed, and then create and manage this project-level, per-location bucket (see Dataproc staging and temp buckets (https://cloud.google.com/dataproc/docs/concepts/configuring-clusters/staging-bucket)). This field requires a Cloud Storage bucket name, not a gs://... URI to a Cloud Storage bucket.
     */
    configBucket?: string;
    /**
     * Dataproc metric config.
     */
    dataprocMetricConfig?: DataprocMetricConfig;
    /**
     * Encryption settings for the cluster.
     */
    encryptionConfig?: EncryptionConfig;
    /**
     * Endpoint config for this cluster
     */
    endpointConfig?: EndpointConfig;
    /**
     * Common config settings for resources of Compute Engine cluster instances, applicable to all instances in the cluster.
     */
    gceClusterConfig?: GceClusterConfig;
    /**
     * The cluster's GKE config.
     */
    gkeClusterConfig?: GkeClusterConfig;
    /**
     * Optional. Commands to execute on each node after config is completed. By default, executables are run on master and all worker nodes. You can test a node's role metadata to run an executable on a master or worker node, as shown below using curl (you can also use wget): ROLE=$(curl -H Metadata-Flavor:Google http://metadata/computeMetadata/v1/instance/attributes/dataproc-role) if [[ "${ROLE}" == 'Master' ]]; then ... master specific actions ... else ... worker specific actions ... fi
     */
    initializationActions?: NodeInitializationAction[];
    /**
     * Specifies the cluster auto-delete schedule configuration.
     */
    lifecycleConfig?: LifecycleConfig;
    /**
     * The config settings for Compute Engine resources in an instance group, such as a master or worker group.
     */
    masterConfig?: InstanceGroupConfig;
    /**
     * Specifies a Metastore configuration.
     */
    metastoreConfig?: MetastoreConfig;
    /**
     * The config settings for Compute Engine resources in an instance group, such as a master or worker group.
     */
    secondaryWorkerConfig?: InstanceGroupConfig;
    /**
     * Security related configuration, including encryption, Kerberos, etc.
     */
    securityConfig?: SecurityConfig;
    /**
     * Specifies the selection and config of software inside the cluster.
     */
    softwareConfig?: SoftwareConfig;
    /**
     * Optional. A Cloud Storage bucket used to store ephemeral cluster and jobs data, such as Spark and MapReduce history files. If you do not specify a temp bucket, Dataproc will determine a Cloud Storage location (US, ASIA, or EU) for your cluster's temp bucket according to the Compute Engine zone where your cluster is deployed, and then create and manage this project-level, per-location bucket. The default bucket has a TTL of 90 days, but you can use any TTL (or none) if you specify a bucket (see Dataproc staging and temp buckets (https://cloud.google.com/dataproc/docs/concepts/configuring-clusters/staging-bucket)). This field requires a Cloud Storage bucket name, not a gs://... URI to a Cloud Storage bucket.
     */
    tempBucket?: string;
    /**
     * The config settings for Compute Engine resources in an instance group, such as a master or worker group.
     */
    workerConfig?: InstanceGroupConfig;
}
