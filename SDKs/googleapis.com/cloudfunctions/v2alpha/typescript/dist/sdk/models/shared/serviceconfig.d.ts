import { SpeakeasyBase } from "../../../internal/utils";
import { SecretEnvVar } from "./secretenvvar";
import { SecretVolume } from "./secretvolume";
/**
 * The ingress settings for the function, controlling what traffic can reach it.
 */
export declare enum ServiceConfigIngressSettingsEnum {
    IngressSettingsUnspecified = "INGRESS_SETTINGS_UNSPECIFIED",
    AllowAll = "ALLOW_ALL",
    AllowInternalOnly = "ALLOW_INTERNAL_ONLY",
    AllowInternalAndGclb = "ALLOW_INTERNAL_AND_GCLB"
}
/**
 * Security level configure whether the function only accepts https. This configuration is only applicable to 1st Gen functions with Http trigger. By default https is optional for 1st Gen functions; 2nd Gen functions are https ONLY.
 */
export declare enum ServiceConfigSecurityLevelEnum {
    SecurityLevelUnspecified = "SECURITY_LEVEL_UNSPECIFIED",
    SecureAlways = "SECURE_ALWAYS",
    SecureOptional = "SECURE_OPTIONAL"
}
/**
 * The egress settings for the connector, controlling what traffic is diverted through it.
 */
export declare enum ServiceConfigVpcConnectorEgressSettingsEnum {
    VpcConnectorEgressSettingsUnspecified = "VPC_CONNECTOR_EGRESS_SETTINGS_UNSPECIFIED",
    PrivateRangesOnly = "PRIVATE_RANGES_ONLY",
    AllTraffic = "ALL_TRAFFIC"
}
/**
 * Describes the Service being deployed. Currently Supported : Cloud Run (fully managed). Next tag: 23
 */
export declare class ServiceConfigInput extends SpeakeasyBase {
    /**
     * Whether 100% of traffic is routed to the latest revision. On CreateFunction and UpdateFunction, when set to true, the revision being deployed will serve 100% of traffic, ignoring any traffic split settings, if any. On GetFunction, true will be returned if the latest revision is serving 100% of traffic.
     */
    allTrafficOnLatestRevision?: boolean;
    /**
     * The number of CPUs used in a single container instance. Default value is calculated from available memory. Supports the same values as Cloud Run, see https://cloud.google.com/run/docs/reference/rest/v1/Container#resourcerequirements Example: "1" indicates 1 vCPU
     */
    availableCpu?: string;
    /**
     * The amount of memory available for a function. Defaults to 256M. Supported units are k, M, G, Mi, Gi. If no unit is supplied the value is interpreted as bytes. See https://github.com/kubernetes/kubernetes/blob/master/staging/src/k8s.io/apimachinery/pkg/api/resource/quantity.go a full description.
     */
    availableMemory?: string;
    /**
     * Environment variables that shall be available during function execution.
     */
    environmentVariables?: Record<string, string>;
    /**
     * The ingress settings for the function, controlling what traffic can reach it.
     */
    ingressSettings?: ServiceConfigIngressSettingsEnum;
    /**
     * The limit on the maximum number of function instances that may coexist at a given time. In some cases, such as rapid traffic surges, Cloud Functions may, for a short period of time, create more instances than the specified max instances limit. If your function cannot tolerate this temporary behavior, you may want to factor in a safety margin and set a lower max instances value than your function can tolerate. See the [Max Instances](https://cloud.google.com/functions/docs/max-instances) Guide for more details.
     */
    maxInstanceCount?: number;
    /**
     * Sets the maximum number of concurrent requests that each instance can receive. Defaults to 1.
     */
    maxInstanceRequestConcurrency?: number;
    /**
     * The limit on the minimum number of function instances that may coexist at a given time. Function instances are kept in idle state for a short period after they finished executing the request to reduce cold start time for subsequent requests. Setting a minimum instance count will ensure that the given number of instances are kept running in idle state always. This can help with cold start times when jump in incoming request count occurs after the idle instance would have been stopped in the default case.
     */
    minInstanceCount?: number;
    /**
     * Secret environment variables configuration.
     */
    secretEnvironmentVariables?: SecretEnvVar[];
    /**
     * Secret volumes configuration.
     */
    secretVolumes?: SecretVolume[];
    /**
     * Security level configure whether the function only accepts https. This configuration is only applicable to 1st Gen functions with Http trigger. By default https is optional for 1st Gen functions; 2nd Gen functions are https ONLY.
     */
    securityLevel?: ServiceConfigSecurityLevelEnum;
    /**
     * The email of the service's service account. If empty, defaults to `{project_number}-compute@developer.gserviceaccount.com`.
     */
    serviceAccountEmail?: string;
    /**
     * The function execution timeout. Execution is considered failed and can be terminated if the function is not completed at the end of the timeout period. Defaults to 60 seconds.
     */
    timeoutSeconds?: number;
    /**
     * The Serverless VPC Access connector that this cloud function can connect to. The format of this field is `projects/* /locations/* /connectors/*`.
     */
    vpcConnector?: string;
    /**
     * The egress settings for the connector, controlling what traffic is diverted through it.
     */
    vpcConnectorEgressSettings?: ServiceConfigVpcConnectorEgressSettingsEnum;
}
/**
 * Describes the Service being deployed. Currently Supported : Cloud Run (fully managed). Next tag: 23
 */
export declare class ServiceConfig extends SpeakeasyBase {
    /**
     * Whether 100% of traffic is routed to the latest revision. On CreateFunction and UpdateFunction, when set to true, the revision being deployed will serve 100% of traffic, ignoring any traffic split settings, if any. On GetFunction, true will be returned if the latest revision is serving 100% of traffic.
     */
    allTrafficOnLatestRevision?: boolean;
    /**
     * The number of CPUs used in a single container instance. Default value is calculated from available memory. Supports the same values as Cloud Run, see https://cloud.google.com/run/docs/reference/rest/v1/Container#resourcerequirements Example: "1" indicates 1 vCPU
     */
    availableCpu?: string;
    /**
     * The amount of memory available for a function. Defaults to 256M. Supported units are k, M, G, Mi, Gi. If no unit is supplied the value is interpreted as bytes. See https://github.com/kubernetes/kubernetes/blob/master/staging/src/k8s.io/apimachinery/pkg/api/resource/quantity.go a full description.
     */
    availableMemory?: string;
    /**
     * Environment variables that shall be available during function execution.
     */
    environmentVariables?: Record<string, string>;
    /**
     * The ingress settings for the function, controlling what traffic can reach it.
     */
    ingressSettings?: ServiceConfigIngressSettingsEnum;
    /**
     * The limit on the maximum number of function instances that may coexist at a given time. In some cases, such as rapid traffic surges, Cloud Functions may, for a short period of time, create more instances than the specified max instances limit. If your function cannot tolerate this temporary behavior, you may want to factor in a safety margin and set a lower max instances value than your function can tolerate. See the [Max Instances](https://cloud.google.com/functions/docs/max-instances) Guide for more details.
     */
    maxInstanceCount?: number;
    /**
     * Sets the maximum number of concurrent requests that each instance can receive. Defaults to 1.
     */
    maxInstanceRequestConcurrency?: number;
    /**
     * The limit on the minimum number of function instances that may coexist at a given time. Function instances are kept in idle state for a short period after they finished executing the request to reduce cold start time for subsequent requests. Setting a minimum instance count will ensure that the given number of instances are kept running in idle state always. This can help with cold start times when jump in incoming request count occurs after the idle instance would have been stopped in the default case.
     */
    minInstanceCount?: number;
    /**
     * Output only. The name of service revision.
     */
    revision?: string;
    /**
     * Secret environment variables configuration.
     */
    secretEnvironmentVariables?: SecretEnvVar[];
    /**
     * Secret volumes configuration.
     */
    secretVolumes?: SecretVolume[];
    /**
     * Security level configure whether the function only accepts https. This configuration is only applicable to 1st Gen functions with Http trigger. By default https is optional for 1st Gen functions; 2nd Gen functions are https ONLY.
     */
    securityLevel?: ServiceConfigSecurityLevelEnum;
    /**
     * Output only. Name of the service associated with a Function. The format of this field is `projects/{project}/locations/{region}/services/{service}`
     */
    service?: string;
    /**
     * The email of the service's service account. If empty, defaults to `{project_number}-compute@developer.gserviceaccount.com`.
     */
    serviceAccountEmail?: string;
    /**
     * The function execution timeout. Execution is considered failed and can be terminated if the function is not completed at the end of the timeout period. Defaults to 60 seconds.
     */
    timeoutSeconds?: number;
    /**
     * Output only. URI of the Service deployed.
     */
    uri?: string;
    /**
     * The Serverless VPC Access connector that this cloud function can connect to. The format of this field is `projects/* /locations/* /connectors/*`.
     */
    vpcConnector?: string;
    /**
     * The egress settings for the connector, controlling what traffic is diverted through it.
     */
    vpcConnectorEgressSettings?: ServiceConfigVpcConnectorEgressSettingsEnum;
}
