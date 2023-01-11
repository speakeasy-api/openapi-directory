package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ServiceConfig
 * Describes the Service being deployed. Currently Supported : Cloud Run (fully managed). Next tag: 23
**/
public class ServiceConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("allTrafficOnLatestRevision")
    public Boolean allTrafficOnLatestRevision;
    public ServiceConfig withAllTrafficOnLatestRevision(Boolean allTrafficOnLatestRevision) {
        this.allTrafficOnLatestRevision = allTrafficOnLatestRevision;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("availableCpu")
    public String availableCpu;
    public ServiceConfig withAvailableCpu(String availableCpu) {
        this.availableCpu = availableCpu;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("availableMemory")
    public String availableMemory;
    public ServiceConfig withAvailableMemory(String availableMemory) {
        this.availableMemory = availableMemory;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("environmentVariables")
    public java.util.Map<String, String> environmentVariables;
    public ServiceConfig withEnvironmentVariables(java.util.Map<String, String> environmentVariables) {
        this.environmentVariables = environmentVariables;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ingressSettings")
    public ServiceConfigIngressSettingsEnum ingressSettings;
    public ServiceConfig withIngressSettings(ServiceConfigIngressSettingsEnum ingressSettings) {
        this.ingressSettings = ingressSettings;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maxInstanceCount")
    public Integer maxInstanceCount;
    public ServiceConfig withMaxInstanceCount(Integer maxInstanceCount) {
        this.maxInstanceCount = maxInstanceCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maxInstanceRequestConcurrency")
    public Integer maxInstanceRequestConcurrency;
    public ServiceConfig withMaxInstanceRequestConcurrency(Integer maxInstanceRequestConcurrency) {
        this.maxInstanceRequestConcurrency = maxInstanceRequestConcurrency;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("minInstanceCount")
    public Integer minInstanceCount;
    public ServiceConfig withMinInstanceCount(Integer minInstanceCount) {
        this.minInstanceCount = minInstanceCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("revision")
    public String revision;
    public ServiceConfig withRevision(String revision) {
        this.revision = revision;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("secretEnvironmentVariables")
    public SecretEnvVar[] secretEnvironmentVariables;
    public ServiceConfig withSecretEnvironmentVariables(SecretEnvVar[] secretEnvironmentVariables) {
        this.secretEnvironmentVariables = secretEnvironmentVariables;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("secretVolumes")
    public SecretVolume[] secretVolumes;
    public ServiceConfig withSecretVolumes(SecretVolume[] secretVolumes) {
        this.secretVolumes = secretVolumes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("securityLevel")
    public ServiceConfigSecurityLevelEnum securityLevel;
    public ServiceConfig withSecurityLevel(ServiceConfigSecurityLevelEnum securityLevel) {
        this.securityLevel = securityLevel;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("service")
    public String service;
    public ServiceConfig withService(String service) {
        this.service = service;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("serviceAccountEmail")
    public String serviceAccountEmail;
    public ServiceConfig withServiceAccountEmail(String serviceAccountEmail) {
        this.serviceAccountEmail = serviceAccountEmail;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("timeoutSeconds")
    public Integer timeoutSeconds;
    public ServiceConfig withTimeoutSeconds(Integer timeoutSeconds) {
        this.timeoutSeconds = timeoutSeconds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("uri")
    public String uri;
    public ServiceConfig withUri(String uri) {
        this.uri = uri;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("vpcConnector")
    public String vpcConnector;
    public ServiceConfig withVpcConnector(String vpcConnector) {
        this.vpcConnector = vpcConnector;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("vpcConnectorEgressSettings")
    public ServiceConfigVpcConnectorEgressSettingsEnum vpcConnectorEgressSettings;
    public ServiceConfig withVpcConnectorEgressSettings(ServiceConfigVpcConnectorEgressSettingsEnum vpcConnectorEgressSettings) {
        this.vpcConnectorEgressSettings = vpcConnectorEgressSettings;
        return this;
    }
}