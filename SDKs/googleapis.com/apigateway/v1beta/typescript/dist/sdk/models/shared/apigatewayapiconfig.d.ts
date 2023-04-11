import { SpeakeasyBase } from "../../../internal/utils";
import { ApigatewayApiConfigFile } from "./apigatewayapiconfigfile";
import { ApigatewayApiConfigGrpcServiceDefinition } from "./apigatewayapiconfiggrpcservicedefinition";
import { ApigatewayApiConfigOpenApiDocument } from "./apigatewayapiconfigopenapidocument";
import { ApigatewayGatewayConfig } from "./apigatewaygatewayconfig";
/**
 * Output only. State of the API Config.
 */
export declare enum ApigatewayApiConfigStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Creating = "CREATING",
    Active = "ACTIVE",
    Failed = "FAILED",
    Deleting = "DELETING",
    Updating = "UPDATING",
    Activating = "ACTIVATING"
}
/**
 * An API Configuration is a combination of settings for both the Managed Service and Gateways serving this API Config.
 */
export declare class ApigatewayApiConfig extends SpeakeasyBase {
    /**
     * Output only. Created time.
     */
    createTime?: string;
    /**
     * Optional. Display name.
     */
    displayName?: string;
    /**
     * Configuration settings for Gateways.
     */
    gatewayConfig?: ApigatewayGatewayConfig;
    /**
     * Immutable. The Google Cloud IAM Service Account that Gateways serving this config should use to authenticate to other services. This may either be the Service Account's email (`{ACCOUNT_ID}@{PROJECT}.iam.gserviceaccount.com`) or its full resource name (`projects/{PROJECT}/accounts/{UNIQUE_ID}`). This is most often used when the service is a GCP resource such as a Cloud Run Service or an IAP-secured service.
     */
    gatewayServiceAccount?: string;
    /**
     * Optional. gRPC service definition files. If specified, openapi_documents must not be included.
     */
    grpcServices?: ApigatewayApiConfigGrpcServiceDefinition[];
    /**
     * Optional. Resource labels to represent user-provided metadata. Refer to cloud documentation on labels for more details. https://cloud.google.com/compute/docs/labeling-resources
     */
    labels?: Record<string, string>;
    /**
     * Optional. Service Configuration files. At least one must be included when using gRPC service definitions. See https://cloud.google.com/endpoints/docs/grpc/grpc-service-config#service_configuration_overview for the expected file contents. If multiple files are specified, the files are merged with the following rules: * All singular scalar fields are merged using "last one wins" semantics in the order of the files uploaded. * Repeated fields are concatenated. * Singular embedded messages are merged using these rules for nested fields.
     */
    managedServiceConfigs?: ApigatewayApiConfigFile[];
    /**
     * Output only. Resource name of the API Config. Format: projects/{project}/locations/global/apis/{api}/configs/{api_config}
     */
    name?: string;
    /**
     * Optional. OpenAPI specification documents. If specified, grpc_services and managed_service_configs must not be included.
     */
    openapiDocuments?: ApigatewayApiConfigOpenApiDocument[];
    /**
     * Output only. The ID of the associated Service Config ( https://cloud.google.com/service-infrastructure/docs/glossary#config).
     */
    serviceConfigId?: string;
    /**
     * Output only. State of the API Config.
     */
    state?: ApigatewayApiConfigStateEnum;
    /**
     * Output only. Updated time.
     */
    updateTime?: string;
}
/**
 * An API Configuration is a combination of settings for both the Managed Service and Gateways serving this API Config.
 */
export declare class ApigatewayApiConfigInput extends SpeakeasyBase {
    /**
     * Optional. Display name.
     */
    displayName?: string;
    /**
     * Configuration settings for Gateways.
     */
    gatewayConfig?: ApigatewayGatewayConfig;
    /**
     * Immutable. The Google Cloud IAM Service Account that Gateways serving this config should use to authenticate to other services. This may either be the Service Account's email (`{ACCOUNT_ID}@{PROJECT}.iam.gserviceaccount.com`) or its full resource name (`projects/{PROJECT}/accounts/{UNIQUE_ID}`). This is most often used when the service is a GCP resource such as a Cloud Run Service or an IAP-secured service.
     */
    gatewayServiceAccount?: string;
    /**
     * Optional. gRPC service definition files. If specified, openapi_documents must not be included.
     */
    grpcServices?: ApigatewayApiConfigGrpcServiceDefinition[];
    /**
     * Optional. Resource labels to represent user-provided metadata. Refer to cloud documentation on labels for more details. https://cloud.google.com/compute/docs/labeling-resources
     */
    labels?: Record<string, string>;
    /**
     * Optional. Service Configuration files. At least one must be included when using gRPC service definitions. See https://cloud.google.com/endpoints/docs/grpc/grpc-service-config#service_configuration_overview for the expected file contents. If multiple files are specified, the files are merged with the following rules: * All singular scalar fields are merged using "last one wins" semantics in the order of the files uploaded. * Repeated fields are concatenated. * Singular embedded messages are merged using these rules for nested fields.
     */
    managedServiceConfigs?: ApigatewayApiConfigFile[];
    /**
     * Optional. OpenAPI specification documents. If specified, grpc_services and managed_service_configs must not be included.
     */
    openapiDocuments?: ApigatewayApiConfigOpenApiDocument[];
}
