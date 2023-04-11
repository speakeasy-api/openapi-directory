import { SpeakeasyBase } from "../../../internal/utils";
import { ApiConfigHandler } from "./apiconfighandler";
import { AutomaticScaling } from "./automaticscaling";
import { BasicScaling } from "./basicscaling";
import { Deployment } from "./deployment";
import { EndpointsApiService } from "./endpointsapiservice";
import { Entrypoint } from "./entrypoint";
import { ErrorHandler } from "./errorhandler";
import { FlexibleRuntimeSettings } from "./flexibleruntimesettings";
import { HealthCheck } from "./healthcheck";
import { Library } from "./library";
import { LivenessCheck } from "./livenesscheck";
import { ManualScaling } from "./manualscaling";
import { Network } from "./network";
import { ReadinessCheck } from "./readinesscheck";
import { Resources } from "./resources";
import { UrlMap } from "./urlmap";
import { VpcAccessConnector } from "./vpcaccessconnector";
export declare enum VersionInboundServicesEnum {
    InboundServiceUnspecified = "INBOUND_SERVICE_UNSPECIFIED",
    InboundServiceMail = "INBOUND_SERVICE_MAIL",
    InboundServiceMailBounce = "INBOUND_SERVICE_MAIL_BOUNCE",
    InboundServiceXmppError = "INBOUND_SERVICE_XMPP_ERROR",
    InboundServiceXmppMessage = "INBOUND_SERVICE_XMPP_MESSAGE",
    InboundServiceXmppSubscribe = "INBOUND_SERVICE_XMPP_SUBSCRIBE",
    InboundServiceXmppPresence = "INBOUND_SERVICE_XMPP_PRESENCE",
    InboundServiceChannelPresence = "INBOUND_SERVICE_CHANNEL_PRESENCE",
    InboundServiceWarmup = "INBOUND_SERVICE_WARMUP"
}
/**
 * Current serving status of this version. Only the versions with a SERVING status create instances and can be billed.SERVING_STATUS_UNSPECIFIED is an invalid value. Defaults to SERVING.
 */
export declare enum VersionServingStatusEnum {
    ServingStatusUnspecified = "SERVING_STATUS_UNSPECIFIED",
    Serving = "SERVING",
    Stopped = "STOPPED"
}
/**
 * A Version resource is a specific set of source code and configuration files that are deployed into a service.
 */
export declare class Version extends SpeakeasyBase {
    /**
     * Google Cloud Endpoints (https://cloud.google.com/endpoints) configuration for API handlers.
     */
    apiConfig?: ApiConfigHandler;
    /**
     * Allows App Engine second generation runtimes to access the legacy bundled services.
     */
    appEngineApis?: boolean;
    /**
     * Automatic scaling is based on request rate, response latencies, and other application metrics.
     */
    automaticScaling?: AutomaticScaling;
    /**
     * A service with basic scaling will create an instance when the application receives a request. The instance will be turned down when the app becomes idle. Basic scaling is ideal for work that is intermittent or driven by user activity.
     */
    basicScaling?: BasicScaling;
    /**
     * Metadata settings that are supplied to this version to enable beta runtime features.
     */
    betaSettings?: Record<string, string>;
    /**
     * Environment variables available to the build environment.Only returned in GET requests if view=FULL is set.
     */
    buildEnvVariables?: Record<string, string>;
    /**
     * Time that this version was created.@OutputOnly
     */
    createTime?: string;
    /**
     * Email address of the user who created this version.@OutputOnly
     */
    createdBy?: string;
    /**
     * Duration that static files should be cached by web proxies and browsers. Only applicable if the corresponding StaticFilesHandler (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1/apps.services.versions#StaticFilesHandler) does not specify its own expiration time.Only returned in GET requests if view=FULL is set.
     */
    defaultExpiration?: string;
    /**
     * Code and application artifacts used to deploy a version to App Engine.
     */
    deployment?: Deployment;
    /**
     * Total size in bytes of all the files that are included in this version and currently hosted on the App Engine disk.@OutputOnly
     */
    diskUsageBytes?: string;
    /**
     * Google Cloud Endpoints (https://cloud.google.com/endpoints) configuration. The Endpoints API Service provides tooling for serving Open API and gRPC endpoints via an NGINX proxy. Only valid for App Engine Flexible environment deployments.The fields here refer to the name and configuration ID of a "service" resource in the Service Management API (https://cloud.google.com/service-management/overview).
     */
    endpointsApiService?: EndpointsApiService;
    /**
     * The entrypoint for the application.
     */
    entrypoint?: Entrypoint;
    /**
     * App Engine execution environment for this version.Defaults to standard.
     */
    env?: string;
    /**
     * Environment variables available to the application.Only returned in GET requests if view=FULL is set.
     */
    envVariables?: Record<string, string>;
    /**
     * Custom static error pages. Limited to 10KB per page.Only returned in GET requests if view=FULL is set.
     */
    errorHandlers?: ErrorHandler[];
    /**
     * Runtime settings for the App Engine flexible environment.
     */
    flexibleRuntimeSettings?: FlexibleRuntimeSettings;
    /**
     * An ordered list of URL-matching patterns that should be applied to incoming requests. The first matching URL handles the request and other request handlers are not attempted.Only returned in GET requests if view=FULL is set.
     */
    handlers?: UrlMap[];
    /**
     * Health checking configuration for VM instances. Unhealthy instances are killed and replaced with new instances. Only applicable for instances in App Engine flexible environment.
     */
    healthCheck?: HealthCheck;
    /**
     * Relative name of the version within the service. Example: v1. Version names can contain only lowercase letters, numbers, or hyphens. Reserved names: "default", "latest", and any name with the prefix "ah-".
     */
    id?: string;
    /**
     * Before an application can receive email or XMPP messages, the application must be configured to enable the service.
     */
    inboundServices?: VersionInboundServicesEnum[];
    /**
     * Instance class that is used to run this version. Valid values are: AutomaticScaling: F1, F2, F4, F4_1G ManualScaling or BasicScaling: B1, B2, B4, B8, B4_1GDefaults to F1 for AutomaticScaling and B1 for ManualScaling or BasicScaling.
     */
    instanceClass?: string;
    /**
     * Configuration for third-party Python runtime libraries that are required by the application.Only returned in GET requests if view=FULL is set.
     */
    libraries?: Library[];
    /**
     * Health checking configuration for VM instances. Unhealthy instances are killed and replaced with new instances.
     */
    livenessCheck?: LivenessCheck;
    /**
     * A service with manual scaling runs continuously, allowing you to perform complex initialization and rely on the state of its memory over time.
     */
    manualScaling?: ManualScaling;
    /**
     * Full path to the Version resource in the API. Example: apps/myapp/services/default/versions/v1.@OutputOnly
     */
    name?: string;
    /**
     * Extra network settings. Only applicable in the App Engine flexible environment.
     */
    network?: Network;
    /**
     * Files that match this pattern will not be built into this version. Only applicable for Go runtimes.Only returned in GET requests if view=FULL is set.
     */
    nobuildFilesRegex?: string;
    /**
     * Readiness checking configuration for VM instances. Unhealthy instances are removed from traffic rotation.
     */
    readinessCheck?: ReadinessCheck;
    /**
     * Machine resources for a version.
     */
    resources?: Resources;
    /**
     * Desired runtime. Example: python27.
     */
    runtime?: string;
    /**
     * The version of the API in the given runtime environment. Please see the app.yaml reference for valid values at https://cloud.google.com/appengine/docs/standard//config/appref
     */
    runtimeApiVersion?: string;
    /**
     * The channel of the runtime to use. Only available for some runtimes. Defaults to the default channel.
     */
    runtimeChannel?: string;
    /**
     * The path or name of the app's main executable.
     */
    runtimeMainExecutablePath?: string;
    /**
     * The identity that the deployed version will run as. Admin API will use the App Engine Appspot service account as default if this field is neither provided in app.yaml file nor through CLI flag.
     */
    serviceAccount?: string;
    /**
     * Current serving status of this version. Only the versions with a SERVING status create instances and can be billed.SERVING_STATUS_UNSPECIFIED is an invalid value. Defaults to SERVING.
     */
    servingStatus?: VersionServingStatusEnum;
    /**
     * Whether multiple requests can be dispatched to this version at once.
     */
    threadsafe?: boolean;
    /**
     * Serving URL for this version. Example: "https://myversion-dot-myservice-dot-myapp.appspot.com"@OutputOnly
     */
    versionUrl?: string;
    /**
     * Whether to deploy this version in a container on a virtual machine.
     */
    vm?: boolean;
    /**
     * VPC access connector specification.
     */
    vpcAccessConnector?: VpcAccessConnector;
    /**
     * The Google Compute Engine zones that are supported by this version in the App Engine flexible environment. Deprecated.
     */
    zones?: string[];
}
