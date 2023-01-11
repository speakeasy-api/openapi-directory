package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Version
 * A Version resource is a specific set of source code and configuration files that are deployed into a service.
**/
public class Version {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("apiConfig")
    public ApiConfigHandler apiConfig;
    public Version withApiConfig(ApiConfigHandler apiConfig) {
        this.apiConfig = apiConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("appEngineApis")
    public Boolean appEngineApis;
    public Version withAppEngineApis(Boolean appEngineApis) {
        this.appEngineApis = appEngineApis;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("automaticScaling")
    public AutomaticScaling automaticScaling;
    public Version withAutomaticScaling(AutomaticScaling automaticScaling) {
        this.automaticScaling = automaticScaling;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("basicScaling")
    public BasicScaling basicScaling;
    public Version withBasicScaling(BasicScaling basicScaling) {
        this.basicScaling = basicScaling;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("betaSettings")
    public java.util.Map<String, String> betaSettings;
    public Version withBetaSettings(java.util.Map<String, String> betaSettings) {
        this.betaSettings = betaSettings;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("buildEnvVariables")
    public java.util.Map<String, String> buildEnvVariables;
    public Version withBuildEnvVariables(java.util.Map<String, String> buildEnvVariables) {
        this.buildEnvVariables = buildEnvVariables;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("createTime")
    public String createTime;
    public Version withCreateTime(String createTime) {
        this.createTime = createTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("createdBy")
    public String createdBy;
    public Version withCreatedBy(String createdBy) {
        this.createdBy = createdBy;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("defaultExpiration")
    public String defaultExpiration;
    public Version withDefaultExpiration(String defaultExpiration) {
        this.defaultExpiration = defaultExpiration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deployment")
    public Deployment deployment;
    public Version withDeployment(Deployment deployment) {
        this.deployment = deployment;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("diskUsageBytes")
    public String diskUsageBytes;
    public Version withDiskUsageBytes(String diskUsageBytes) {
        this.diskUsageBytes = diskUsageBytes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("endpointsApiService")
    public EndpointsApiService endpointsApiService;
    public Version withEndpointsApiService(EndpointsApiService endpointsApiService) {
        this.endpointsApiService = endpointsApiService;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("entrypoint")
    public Entrypoint entrypoint;
    public Version withEntrypoint(Entrypoint entrypoint) {
        this.entrypoint = entrypoint;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("env")
    public String env;
    public Version withEnv(String env) {
        this.env = env;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("envVariables")
    public java.util.Map<String, String> envVariables;
    public Version withEnvVariables(java.util.Map<String, String> envVariables) {
        this.envVariables = envVariables;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("errorHandlers")
    public ErrorHandler[] errorHandlers;
    public Version withErrorHandlers(ErrorHandler[] errorHandlers) {
        this.errorHandlers = errorHandlers;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("handlers")
    public UrlMap[] handlers;
    public Version withHandlers(UrlMap[] handlers) {
        this.handlers = handlers;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("healthCheck")
    public HealthCheck healthCheck;
    public Version withHealthCheck(HealthCheck healthCheck) {
        this.healthCheck = healthCheck;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public Version withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("inboundServices")
    public VersionInboundServicesEnum[] inboundServices;
    public Version withInboundServices(VersionInboundServicesEnum[] inboundServices) {
        this.inboundServices = inboundServices;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("instanceClass")
    public String instanceClass;
    public Version withInstanceClass(String instanceClass) {
        this.instanceClass = instanceClass;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("libraries")
    public Library[] libraries;
    public Version withLibraries(Library[] libraries) {
        this.libraries = libraries;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("livenessCheck")
    public LivenessCheck livenessCheck;
    public Version withLivenessCheck(LivenessCheck livenessCheck) {
        this.livenessCheck = livenessCheck;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("manualScaling")
    public ManualScaling manualScaling;
    public Version withManualScaling(ManualScaling manualScaling) {
        this.manualScaling = manualScaling;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public Version withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("network")
    public Network network;
    public Version withNetwork(Network network) {
        this.network = network;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nobuildFilesRegex")
    public String nobuildFilesRegex;
    public Version withNobuildFilesRegex(String nobuildFilesRegex) {
        this.nobuildFilesRegex = nobuildFilesRegex;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("readinessCheck")
    public ReadinessCheck readinessCheck;
    public Version withReadinessCheck(ReadinessCheck readinessCheck) {
        this.readinessCheck = readinessCheck;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resources")
    public Resources resources;
    public Version withResources(Resources resources) {
        this.resources = resources;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("runtime")
    public String runtime;
    public Version withRuntime(String runtime) {
        this.runtime = runtime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("runtimeApiVersion")
    public String runtimeApiVersion;
    public Version withRuntimeApiVersion(String runtimeApiVersion) {
        this.runtimeApiVersion = runtimeApiVersion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("runtimeChannel")
    public String runtimeChannel;
    public Version withRuntimeChannel(String runtimeChannel) {
        this.runtimeChannel = runtimeChannel;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("runtimeMainExecutablePath")
    public String runtimeMainExecutablePath;
    public Version withRuntimeMainExecutablePath(String runtimeMainExecutablePath) {
        this.runtimeMainExecutablePath = runtimeMainExecutablePath;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("serviceAccount")
    public String serviceAccount;
    public Version withServiceAccount(String serviceAccount) {
        this.serviceAccount = serviceAccount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("servingStatus")
    public VersionServingStatusEnum servingStatus;
    public Version withServingStatus(VersionServingStatusEnum servingStatus) {
        this.servingStatus = servingStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("threadsafe")
    public Boolean threadsafe;
    public Version withThreadsafe(Boolean threadsafe) {
        this.threadsafe = threadsafe;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("versionUrl")
    public String versionUrl;
    public Version withVersionUrl(String versionUrl) {
        this.versionUrl = versionUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("vm")
    public Boolean vm;
    public Version withVm(Boolean vm) {
        this.vm = vm;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("vpcAccessConnector")
    public VpcAccessConnector vpcAccessConnector;
    public Version withVpcAccessConnector(VpcAccessConnector vpcAccessConnector) {
        this.vpcAccessConnector = vpcAccessConnector;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("zones")
    public String[] zones;
    public Version withZones(String[] zones) {
        this.zones = zones;
        return this;
    }
}