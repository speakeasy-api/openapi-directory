package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Service
 * An otoroshi service descriptor. Represent a forward HTTP call on a domain to another location with some optional api management mecanism
**/
public class Service {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Canary")
    public Canary canary;
    public Service withCanary(Canary canary) {
        this.canary = canary;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("additionalHeaders")
    public java.util.Map<String, String> additionalHeaders;
    public Service withAdditionalHeaders(java.util.Map<String, String> additionalHeaders) {
        this.additionalHeaders = additionalHeaders;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("api")
    public ExposedApi api;
    public Service withApi(ExposedApi api) {
        this.api = api;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("authConfigRef")
    public String authConfigRef;
    public Service withAuthConfigRef(String authConfigRef) {
        this.authConfigRef = authConfigRef;
        return this;
    }
    @JsonProperty("buildMode")
    public Boolean buildMode;
    public Service withBuildMode(Boolean buildMode) {
        this.buildMode = buildMode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("chaosConfig")
    public ChaosConfig chaosConfig;
    public Service withChaosConfig(ChaosConfig chaosConfig) {
        this.chaosConfig = chaosConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("clientConfig")
    public ClientConfig clientConfig;
    public Service withClientConfig(ClientConfig clientConfig) {
        this.clientConfig = clientConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("clientValidatorRef")
    public String clientValidatorRef;
    public Service withClientValidatorRef(String clientValidatorRef) {
        this.clientValidatorRef = clientValidatorRef;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cors")
    public CorsSettings cors;
    public Service withCors(CorsSettings cors) {
        this.cors = cors;
        return this;
    }
    @JsonProperty("domain")
    public String domain;
    public Service withDomain(String domain) {
        this.domain = domain;
        return this;
    }
    @JsonProperty("enabled")
    public Boolean enabled;
    public Service withEnabled(Boolean enabled) {
        this.enabled = enabled;
        return this;
    }
    @JsonProperty("enforceSecureCommunication")
    public Boolean enforceSecureCommunication;
    public Service withEnforceSecureCommunication(Boolean enforceSecureCommunication) {
        this.enforceSecureCommunication = enforceSecureCommunication;
        return this;
    }
    @JsonProperty("env")
    public String env;
    public Service withEnv(String env) {
        this.env = env;
        return this;
    }
    @JsonProperty("forceHttps")
    public Boolean forceHttps;
    public Service withForceHttps(Boolean forceHttps) {
        this.forceHttps = forceHttps;
        return this;
    }
    @JsonProperty("groups")
    public String[] groups;
    public Service withGroups(String[] groups) {
        this.groups = groups;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("gzip")
    public Gzip gzip;
    public Service withGzip(Gzip gzip) {
        this.gzip = gzip;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("headersVerification")
    public java.util.Map<String, String> headersVerification;
    public Service withHeadersVerification(java.util.Map<String, String> headersVerification) {
        this.headersVerification = headersVerification;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("healthCheck")
    public HealthCheck healthCheck;
    public Service withHealthCheck(HealthCheck healthCheck) {
        this.healthCheck = healthCheck;
        return this;
    }
    @JsonProperty("id")
    public String id;
    public Service withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ipFiltering")
    public IpFiltering ipFiltering;
    public Service withIpFiltering(IpFiltering ipFiltering) {
        this.ipFiltering = ipFiltering;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("jwtVerifier")
    public Object jwtVerifier;
    public Service withJwtVerifier(Object jwtVerifier) {
        this.jwtVerifier = jwtVerifier;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("localHost")
    public String localHost;
    public Service withLocalHost(String localHost) {
        this.localHost = localHost;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("localScheme")
    public String localScheme;
    public Service withLocalScheme(String localScheme) {
        this.localScheme = localScheme;
        return this;
    }
    @JsonProperty("maintenanceMode")
    public Boolean maintenanceMode;
    public Service withMaintenanceMode(Boolean maintenanceMode) {
        this.maintenanceMode = maintenanceMode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("matchingHeaders")
    public java.util.Map<String, String> matchingHeaders;
    public Service withMatchingHeaders(java.util.Map<String, String> matchingHeaders) {
        this.matchingHeaders = matchingHeaders;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("matchingRoot")
    public String matchingRoot;
    public Service withMatchingRoot(String matchingRoot) {
        this.matchingRoot = matchingRoot;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("metadata")
    public java.util.Map<String, String> metadata;
    public Service withMetadata(java.util.Map<String, String> metadata) {
        this.metadata = metadata;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public Service withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("overrideHost")
    public Boolean overrideHost;
    public Service withOverrideHost(Boolean overrideHost) {
        this.overrideHost = overrideHost;
        return this;
    }
    @JsonProperty("privateApp")
    public Boolean privateApp;
    public Service withPrivateApp(Boolean privateApp) {
        this.privateApp = privateApp;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("privatePatterns")
    public String[] privatePatterns;
    public Service withPrivatePatterns(String[] privatePatterns) {
        this.privatePatterns = privatePatterns;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("publicPatterns")
    public String[] publicPatterns;
    public Service withPublicPatterns(String[] publicPatterns) {
        this.publicPatterns = publicPatterns;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("redirectToLocal")
    public Boolean redirectToLocal;
    public Service withRedirectToLocal(Boolean redirectToLocal) {
        this.redirectToLocal = redirectToLocal;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("redirection")
    public RedirectionSettings redirection;
    public Service withRedirection(RedirectionSettings redirection) {
        this.redirection = redirection;
        return this;
    }
    @JsonProperty("root")
    public String root;
    public Service withRoot(String root) {
        this.root = root;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("secComExcludedPatterns")
    public String[] secComExcludedPatterns;
    public Service withSecComExcludedPatterns(String[] secComExcludedPatterns) {
        this.secComExcludedPatterns = secComExcludedPatterns;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("secComSettings")
    public Object secComSettings;
    public Service withSecComSettings(Object secComSettings) {
        this.secComSettings = secComSettings;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sendOtoroshiHeadersBack")
    public Boolean sendOtoroshiHeadersBack;
    public Service withSendOtoroshiHeadersBack(Boolean sendOtoroshiHeadersBack) {
        this.sendOtoroshiHeadersBack = sendOtoroshiHeadersBack;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("statsdConfig")
    public StatsdConfig statsdConfig;
    public Service withStatsdConfig(StatsdConfig statsdConfig) {
        this.statsdConfig = statsdConfig;
        return this;
    }
    @JsonProperty("subdomain")
    public String subdomain;
    public Service withSubdomain(String subdomain) {
        this.subdomain = subdomain;
        return this;
    }
    @JsonProperty("targets")
    public Target[] targets;
    public Service withTargets(Target[] targets) {
        this.targets = targets;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("transformerRef")
    public String transformerRef;
    public Service withTransformerRef(String transformerRef) {
        this.transformerRef = transformerRef;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("userFacing")
    public Boolean userFacing;
    public Service withUserFacing(Boolean userFacing) {
        this.userFacing = userFacing;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("xForwardedHeaders")
    public Boolean xForwardedHeaders;
    public Service withXForwardedHeaders(Boolean xForwardedHeaders) {
        this.xForwardedHeaders = xForwardedHeaders;
        return this;
    }
}