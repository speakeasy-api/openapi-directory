import { SpeakeasyBase } from "../../../internal/utils";
import { DatabaseConfig } from "./databaseconfig";
import { EncryptionConfig } from "./encryptionconfig";
import { MaintenanceWindow } from "./maintenancewindow";
import { MasterAuthorizedNetworksConfig } from "./masterauthorizednetworksconfig";
import { NodeConfig } from "./nodeconfig";
import { PrivateEnvironmentConfig, PrivateEnvironmentConfigInput } from "./privateenvironmentconfig";
import { RecoveryConfig } from "./recoveryconfig";
import { SoftwareConfig } from "./softwareconfig";
import { WebServerConfig } from "./webserverconfig";
import { WebServerNetworkAccessControl } from "./webservernetworkaccesscontrol";
import { WorkloadsConfig } from "./workloadsconfig";
/**
 * Optional. The size of the Cloud Composer environment. This field is supported for Cloud Composer environments in versions composer-2.*.*-airflow-*.*.* and newer.
 */
export declare enum EnvironmentConfigEnvironmentSizeEnum {
    EnvironmentSizeUnspecified = "ENVIRONMENT_SIZE_UNSPECIFIED",
    EnvironmentSizeSmall = "ENVIRONMENT_SIZE_SMALL",
    EnvironmentSizeMedium = "ENVIRONMENT_SIZE_MEDIUM",
    EnvironmentSizeLarge = "ENVIRONMENT_SIZE_LARGE"
}
/**
 * Configuration information for an environment.
 */
export declare class EnvironmentConfigInput extends SpeakeasyBase {
    /**
     * The configuration of Cloud SQL instance that is used by the Apache Airflow software.
     */
    databaseConfig?: DatabaseConfig;
    /**
     * The encryption options for the Cloud Composer environment and its dependencies. Supported for Cloud Composer environments in versions composer-1.*.*-airflow-*.*.*.
     */
    encryptionConfig?: EncryptionConfig;
    /**
     * Optional. The size of the Cloud Composer environment. This field is supported for Cloud Composer environments in versions composer-2.*.*-airflow-*.*.* and newer.
     */
    environmentSize?: EnvironmentConfigEnvironmentSizeEnum;
    /**
     * The configuration settings for Cloud Composer maintenance window. The following example: ``` { "startTime":"2019-08-01T01:00:00Z" "endTime":"2019-08-01T07:00:00Z" "recurrence":"FREQ=WEEKLY;BYDAY=TU,WE" } ``` would define a maintenance window between 01 and 07 hours UTC during each Tuesday and Wednesday.
     */
    maintenanceWindow?: MaintenanceWindow;
    /**
     * Configuration options for the master authorized networks feature. Enabled master authorized networks will disallow all external traffic to access Kubernetes master through HTTPS except traffic from the given CIDR blocks, Google Compute Engine Public IPs and Google Prod IPs.
     */
    masterAuthorizedNetworksConfig?: MasterAuthorizedNetworksConfig;
    /**
     * The configuration information for the Kubernetes Engine nodes running the Apache Airflow software.
     */
    nodeConfig?: NodeConfig;
    /**
     * The number of nodes in the Kubernetes Engine cluster that will be used to run this environment. This field is supported for Cloud Composer environments in versions composer-1.*.*-airflow-*.*.*.
     */
    nodeCount?: number;
    /**
     * The configuration information for configuring a Private IP Cloud Composer environment.
     */
    privateEnvironmentConfig?: PrivateEnvironmentConfigInput;
    /**
     * The Recovery settings of an environment.
     */
    recoveryConfig?: RecoveryConfig;
    /**
     * Specifies the selection and configuration of software inside the environment.
     */
    softwareConfig?: SoftwareConfig;
    /**
     * The configuration settings for the Airflow web server App Engine instance. Supported for Cloud Composer environments in versions composer-1.*.*-airflow-*.*.*.
     */
    webServerConfig?: WebServerConfig;
    /**
     * Network-level access control policy for the Airflow web server.
     */
    webServerNetworkAccessControl?: WebServerNetworkAccessControl;
    /**
     * The Kubernetes workloads configuration for GKE cluster associated with the Cloud Composer environment. Supported for Cloud Composer environments in versions composer-2.*.*-airflow-*.*.* and newer.
     */
    workloadsConfig?: WorkloadsConfig;
}
/**
 * Configuration information for an environment.
 */
export declare class EnvironmentConfig extends SpeakeasyBase {
    /**
     * Output only. The 'bring your own identity' variant of the URI of the Apache Airflow Web UI hosted within this environment, to be accessed with external identities using workforce identity federation (see [Access environments with workforce identity federation](/composer/docs/composer-2/access-environments-with-workforce-identity-federation)).
     */
    airflowByoidUri?: string;
    /**
     * Output only. The URI of the Apache Airflow Web UI hosted within this environment (see [Airflow web interface](/composer/docs/how-to/accessing/airflow-web-interface)).
     */
    airflowUri?: string;
    /**
     * Output only. The Cloud Storage prefix of the DAGs for this environment. Although Cloud Storage objects reside in a flat namespace, a hierarchical file tree can be simulated using "/"-delimited object name prefixes. DAG objects for this environment reside in a simulated directory with the given prefix.
     */
    dagGcsPrefix?: string;
    /**
     * The configuration of Cloud SQL instance that is used by the Apache Airflow software.
     */
    databaseConfig?: DatabaseConfig;
    /**
     * The encryption options for the Cloud Composer environment and its dependencies. Supported for Cloud Composer environments in versions composer-1.*.*-airflow-*.*.*.
     */
    encryptionConfig?: EncryptionConfig;
    /**
     * Optional. The size of the Cloud Composer environment. This field is supported for Cloud Composer environments in versions composer-2.*.*-airflow-*.*.* and newer.
     */
    environmentSize?: EnvironmentConfigEnvironmentSizeEnum;
    /**
     * Output only. The Kubernetes Engine cluster used to run this environment.
     */
    gkeCluster?: string;
    /**
     * The configuration settings for Cloud Composer maintenance window. The following example: ``` { "startTime":"2019-08-01T01:00:00Z" "endTime":"2019-08-01T07:00:00Z" "recurrence":"FREQ=WEEKLY;BYDAY=TU,WE" } ``` would define a maintenance window between 01 and 07 hours UTC during each Tuesday and Wednesday.
     */
    maintenanceWindow?: MaintenanceWindow;
    /**
     * Configuration options for the master authorized networks feature. Enabled master authorized networks will disallow all external traffic to access Kubernetes master through HTTPS except traffic from the given CIDR blocks, Google Compute Engine Public IPs and Google Prod IPs.
     */
    masterAuthorizedNetworksConfig?: MasterAuthorizedNetworksConfig;
    /**
     * The configuration information for the Kubernetes Engine nodes running the Apache Airflow software.
     */
    nodeConfig?: NodeConfig;
    /**
     * The number of nodes in the Kubernetes Engine cluster that will be used to run this environment. This field is supported for Cloud Composer environments in versions composer-1.*.*-airflow-*.*.*.
     */
    nodeCount?: number;
    /**
     * The configuration information for configuring a Private IP Cloud Composer environment.
     */
    privateEnvironmentConfig?: PrivateEnvironmentConfig;
    /**
     * The Recovery settings of an environment.
     */
    recoveryConfig?: RecoveryConfig;
    /**
     * Specifies the selection and configuration of software inside the environment.
     */
    softwareConfig?: SoftwareConfig;
    /**
     * The configuration settings for the Airflow web server App Engine instance. Supported for Cloud Composer environments in versions composer-1.*.*-airflow-*.*.*.
     */
    webServerConfig?: WebServerConfig;
    /**
     * Network-level access control policy for the Airflow web server.
     */
    webServerNetworkAccessControl?: WebServerNetworkAccessControl;
    /**
     * The Kubernetes workloads configuration for GKE cluster associated with the Cloud Composer environment. Supported for Cloud Composer environments in versions composer-2.*.*-airflow-*.*.* and newer.
     */
    workloadsConfig?: WorkloadsConfig;
}
