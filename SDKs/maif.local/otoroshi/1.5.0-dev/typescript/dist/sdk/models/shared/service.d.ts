import { SpeakeasyBase } from "../../../internal/utils";
import { Canary } from "./canary";
import { ChaosConfig } from "./chaosconfig";
import { ClientConfig } from "./clientconfig";
import { CorsSettings } from "./corssettings";
import { ExposedApi } from "./exposedapi";
import { Gzip } from "./gzip";
import { HealthCheck } from "./healthcheck";
import { IpFiltering } from "./ipfiltering";
import { RedirectionSettings } from "./redirectionsettings";
import { StatsdConfig } from "./statsdconfig";
import { Target } from "./target";
/**
 * An otoroshi service descriptor. Represent a forward HTTP call on a domain to another location with some optional api management mecanism
 */
export declare class Service extends SpeakeasyBase {
    /**
     * The configuration of the canary mode for a service descriptor
     */
    canary?: Canary;
    /**
     * Specify headers that will be added to each client request. Useful to add authentication
     */
    additionalHeaders?: Record<string, string>;
    /**
     * The Open API configuration for your service (if one)
     */
    api?: ExposedApi;
    /**
     * A reference to a global auth module config
     */
    authConfigRef?: string;
    /**
     * Display a construction page when a user try to use the service
     */
    buildMode: boolean;
    /**
     * Configuration for the faults that can be injected in requests
     */
    chaosConfig?: ChaosConfig;
    /**
     * The configuration of the circuit breaker for a service descriptor
     */
    clientConfig?: ClientConfig;
    /**
     * A reference to validation authority
     */
    clientValidatorRef?: string;
    /**
     * The configuration for cors support
     */
    cors?: CorsSettings;
    /**
     * The domain on which the service is available.
     */
    domain: string;
    /**
     * Activate or deactivate your service. Once disabled, users will get an error page saying the service does not exist
     */
    enabled: boolean;
    /**
     * When enabled, Otoroshi will try to exchange headers with downstream service to ensure no one else can use the service from outside
     */
    enforceSecureCommunication: boolean;
    /**
     * The line on which the service is available. Based on that value, the name of the line will be appended to the subdomain. For line prod, nothing will be appended. For example, if the subdomain is 'foo' and line is 'preprod', then the exposed service will be available at 'foo.preprod.mydomain'
     */
    env: string;
    /**
     * Will force redirection to https:// if not present
     */
    forceHttps: boolean;
    /**
     * Each service descriptor is attached to groups. A group can have one or more services. Each API key is linked to a group and allow access to every service in the group
     */
    groups: string[];
    /**
     * Configuration for gzip of service responses
     */
    gzip?: Gzip;
    /**
     * Specify headers that will be verified after routing.
     */
    headersVerification?: Record<string, string>;
    /**
     * The configuration for checking health of a service. Otoroshi will perform GET call on the URL to check if the service is still alive
     */
    healthCheck?: HealthCheck;
    /**
     * A unique random string to identify your service
     */
    id: string;
    /**
     * The filtering configuration block for a service of globally.
     */
    ipFiltering?: IpFiltering;
    jwtVerifier?: any;
    /**
     * The host used localy, mainly localhost:xxxx
     */
    localHost?: string;
    /**
     * The scheme used localy, mainly http
     */
    localScheme?: string;
    /**
     * Display a maintainance page when a user try to use the service
     */
    maintenanceMode: boolean;
    /**
     * Specify headers that MUST be present on client request to route it. Useful to implement versioning
     */
    matchingHeaders?: Record<string, string>;
    /**
     * The root path on which the service is available
     */
    matchingRoot?: string;
    /**
     * Just a bunch of random properties
     */
    metadata?: Record<string, string>;
    /**
     * The name of your service. Only for debug and human readability purposes
     */
    name: string;
    /**
     * Host header will be overriden with Host of the target
     */
    overrideHost?: boolean;
    /**
     * When enabled, user will be allowed to use the service (UI) only if they are registered users of the private apps domain
     */
    privateApp: boolean;
    /**
     * If you define a public pattern that is a little bit too much, you can make some of public URL private again
     */
    privatePatterns?: string[];
    /**
     * By default, every services are private only and you'll need an API key to access it. However, if you want to expose a public UI, you can define one or more public patterns (regex) to allow access to anybody. For example if you want to allow anybody on any URL, just use '/.*'
     */
    publicPatterns?: string[];
    /**
     * If you work locally with Otoroshi, you may want to use that feature to redirect one particuliar service to a local host. For example, you can relocate https://foo.preprod.bar.com to http://localhost:8080 to make some tests
     */
    redirectToLocal?: boolean;
    /**
     * The configuration for redirection per service
     */
    redirection?: RedirectionSettings;
    /**
     * Otoroshi will append this root to any target choosen. If the specified root is '/api/foo', then a request to https://yyyyyyy/bar will actually hit https://xxxxxxxxx/api/foo/bar
     */
    root: string;
    /**
     * URI patterns excluded from secured communications
     */
    secComExcludedPatterns?: string[];
    secComSettings?: any;
    /**
     * When enabled, Otoroshi will send headers to consumer like request id, client latency, overhead, etc ...
     */
    sendOtoroshiHeadersBack?: boolean;
    /**
     * The configuration for statsd metrics push
     */
    statsdConfig?: StatsdConfig;
    /**
     * The subdomain on which the service is available
     */
    subdomain: string;
    /**
     * The list of target that Otoroshi will proxy and expose through the subdomain defined before. Otoroshi will do round-robin load balancing between all those targets with circuit breaker mecanism to avoid cascading failures
     */
    targets: Target[];
    /**
     * A reference to a request transformer
     */
    transformerRef?: string;
    /**
     * The fact that this service will be seen by users and cannot be impacted by the Snow Monkey
     */
    userFacing?: boolean;
    /**
     * Send X-Forwarded-* headers
     */
    xForwardedHeaders?: boolean;
}
