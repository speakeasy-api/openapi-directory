import { SpeakeasyBase } from "../../../internal/utils";
import { Accelerator } from "./accelerator";
import { CryptoKeyConfig } from "./cryptokeyconfig";
import { EventPublishConfig } from "./eventpublishconfig";
import { NetworkConfig } from "./networkconfig";
import { Version } from "./version";
/**
 * Required. Instance type.
 */
export declare enum InstanceTypeEnum {
    TypeUnspecified = "TYPE_UNSPECIFIED",
    Basic = "BASIC",
    Enterprise = "ENTERPRISE",
    Developer = "DEVELOPER"
}
/**
 * Represents a Data Fusion instance.
 */
export declare class InstanceInput extends SpeakeasyBase {
    /**
     * The crypto key configuration. This field is used by the Customer-managed encryption keys (CMEK) feature.
     */
    cryptoKeyConfig?: CryptoKeyConfig;
    /**
     * User-managed service account to set on Dataproc when Cloud Data Fusion creates Dataproc to run data processing pipelines. This allows users to have fine-grained access control on Dataproc's accesses to cloud resources.
     */
    dataprocServiceAccount?: string;
    /**
     * A description of this instance.
     */
    description?: string;
    /**
     * Display name for an instance.
     */
    displayName?: string;
    /**
     * Option to enable granular role-based access control.
     */
    enableRbac?: boolean;
    /**
     * Option to enable Stackdriver Logging.
     */
    enableStackdriverLogging?: boolean;
    /**
     * Option to enable Stackdriver Monitoring.
     */
    enableStackdriverMonitoring?: boolean;
    /**
     * Option to enable zone separation.
     */
    enableZoneSeparation?: boolean;
    /**
     * Confirguration of PubSubEventWriter.
     */
    eventPublishConfig?: EventPublishConfig;
    /**
     * The resource labels for instance to use to annotate any related underlying resources such as Compute Engine VMs. The character '=' is not allowed to be used within the labels.
     */
    labels?: Record<string, string>;
    /**
     * Network configuration for a Data Fusion instance. These configurations are used for peering with the customer network. Configurations are optional when a public Data Fusion instance is to be created. However, providing these configurations allows several benefits, such as reduced network latency while accessing the customer resources from managed Data Fusion instance nodes, as well as access to the customer on-prem resources.
     */
    networkConfig?: NetworkConfig;
    /**
     * Map of additional options used to configure the behavior of Data Fusion instance.
     */
    options?: Record<string, string>;
    /**
     * Specifies whether the Data Fusion instance should be private. If set to true, all Data Fusion nodes will have private IP addresses and will not be able to access the public internet.
     */
    privateInstance?: boolean;
    /**
     * Required. Instance type.
     */
    type?: InstanceTypeEnum;
    /**
     * Current version of Data Fusion.
     */
    version?: string;
    /**
     * Name of the zone in which the Data Fusion instance will be created. Only DEVELOPER instances use this field.
     */
    zone?: string;
}
export declare enum InstanceDisabledReasonEnum {
    DisabledReasonUnspecified = "DISABLED_REASON_UNSPECIFIED",
    KmsKeyIssue = "KMS_KEY_ISSUE"
}
/**
 * Output only. The current state of this Data Fusion instance.
 */
export declare enum InstanceStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Creating = "CREATING",
    Running = "RUNNING",
    Failed = "FAILED",
    Deleting = "DELETING",
    Upgrading = "UPGRADING",
    Restarting = "RESTARTING",
    Updating = "UPDATING",
    AutoUpdating = "AUTO_UPDATING",
    AutoUpgrading = "AUTO_UPGRADING",
    Disabled = "DISABLED"
}
/**
 * Represents a Data Fusion instance.
 */
export declare class Instance extends SpeakeasyBase {
    /**
     * Output only. List of accelerators enabled for this CDF instance.
     */
    accelerators?: Accelerator[];
    /**
     * Output only. Endpoint on which the REST APIs is accessible.
     */
    apiEndpoint?: string;
    /**
     * Output only. Available versions that the instance can be upgraded to using UpdateInstanceRequest.
     */
    availableVersion?: Version[];
    /**
     * Output only. The time the instance was created.
     */
    createTime?: string;
    /**
     * The crypto key configuration. This field is used by the Customer-managed encryption keys (CMEK) feature.
     */
    cryptoKeyConfig?: CryptoKeyConfig;
    /**
     * User-managed service account to set on Dataproc when Cloud Data Fusion creates Dataproc to run data processing pipelines. This allows users to have fine-grained access control on Dataproc's accesses to cloud resources.
     */
    dataprocServiceAccount?: string;
    /**
     * A description of this instance.
     */
    description?: string;
    /**
     * Output only. If the instance state is DISABLED, the reason for disabling the instance.
     */
    disabledReason?: InstanceDisabledReasonEnum[];
    /**
     * Display name for an instance.
     */
    displayName?: string;
    /**
     * Option to enable granular role-based access control.
     */
    enableRbac?: boolean;
    /**
     * Option to enable Stackdriver Logging.
     */
    enableStackdriverLogging?: boolean;
    /**
     * Option to enable Stackdriver Monitoring.
     */
    enableStackdriverMonitoring?: boolean;
    /**
     * Option to enable zone separation.
     */
    enableZoneSeparation?: boolean;
    /**
     * Confirguration of PubSubEventWriter.
     */
    eventPublishConfig?: EventPublishConfig;
    /**
     * Output only. Cloud Storage bucket generated by Data Fusion in the customer project.
     */
    gcsBucket?: string;
    /**
     * The resource labels for instance to use to annotate any related underlying resources such as Compute Engine VMs. The character '=' is not allowed to be used within the labels.
     */
    labels?: Record<string, string>;
    /**
     * Output only. The name of this instance is in the form of projects/{project}/locations/{location}/instances/{instance}.
     */
    name?: string;
    /**
     * Network configuration for a Data Fusion instance. These configurations are used for peering with the customer network. Configurations are optional when a public Data Fusion instance is to be created. However, providing these configurations allows several benefits, such as reduced network latency while accessing the customer resources from managed Data Fusion instance nodes, as well as access to the customer on-prem resources.
     */
    networkConfig?: NetworkConfig;
    /**
     * Map of additional options used to configure the behavior of Data Fusion instance.
     */
    options?: Record<string, string>;
    /**
     * Output only. P4 service account for the customer project.
     */
    p4ServiceAccount?: string;
    /**
     * Specifies whether the Data Fusion instance should be private. If set to true, all Data Fusion nodes will have private IP addresses and will not be able to access the public internet.
     */
    privateInstance?: boolean;
    /**
     * Output only. Deprecated. Use tenant_project_id instead to extract the tenant project ID.
     */
    serviceAccount?: string;
    /**
     * Output only. Endpoint on which the Data Fusion UI is accessible.
     */
    serviceEndpoint?: string;
    /**
     * Output only. The current state of this Data Fusion instance.
     */
    state?: InstanceStateEnum;
    /**
     * Output only. Additional information about the current state of this Data Fusion instance if available.
     */
    stateMessage?: string;
    /**
     * Output only. The name of the tenant project.
     */
    tenantProjectId?: string;
    /**
     * Required. Instance type.
     */
    type?: InstanceTypeEnum;
    /**
     * Output only. The time the instance was last updated.
     */
    updateTime?: string;
    /**
     * Current version of Data Fusion.
     */
    version?: string;
    /**
     * Name of the zone in which the Data Fusion instance will be created. Only DEVELOPER instances use this field.
     */
    zone?: string;
}
