package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ServiceConfigInput
 * Describes the Service being deployed. Currently Supported : Cloud Run (fully managed). Next tag: 23
**/
public class ServiceConfigInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("allTrafficOnLatestRevision")
    public Boolean allTrafficOnLatestRevision;
    public ServiceConfigInput withAllTrafficOnLatestRevision(Boolean allTrafficOnLatestRevision) {
        this.allTrafficOnLatestRevision = allTrafficOnLatestRevision;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("availableCpu")
    public String availableCpu;
    public ServiceConfigInput withAvailableCpu(String availableCpu) {
        this.availableCpu = availableCpu;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("availableMemory")
    public String availableMemory;
    public ServiceConfigInput withAvailableMemory(String availableMemory) {
        this.availableMemory = availableMemory;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("environmentVariables")
    public java.util.Map<String, String> environmentVariables;
    public ServiceConfigInput withEnvironmentVariables(java.util.Map<String, String> environmentVariables) {
        this.environmentVariables = environmentVariables;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ingressSettings")
    public ServiceConfigIngressSettingsEnum ingressSettings;
    public ServiceConfigInput withIngressSettings(ServiceConfigIngressSettingsEnum ingressSettings) {
        this.ingressSettings = ingressSettings;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maxInstanceCount")
    public Integer maxInstanceCount;
    public ServiceConfigInput withMaxInstanceCount(Integer maxInstanceCount) {
        this.maxInstanceCount = maxInstanceCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maxInstanceRequestConcurrency")
    public Integer maxInstanceRequestConcurrency;
    public ServiceConfigInput withMaxInstanceRequestConcurrency(Integer maxInstanceRequestConcurrency) {
        this.maxInstanceRequestConcurrency = maxInstanceRequestConcurrency;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("minInstanceCount")
    public Integer minInstanceCount;
    public ServiceConfigInput withMinInstanceCount(Integer minInstanceCount) {
        this.minInstanceCount = minInstanceCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("secretEnvironmentVariables")
    public SecretEnvVar[] secretEnvironmentVariables;
    public ServiceConfigInput withSecretEnvironmentVariables(SecretEnvVar[] secretEnvironmentVariables) {
        this.secretEnvironmentVariables = secretEnvironmentVariables;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("secretVolumes")
    public SecretVolume[] secretVolumes;
    public ServiceConfigInput withSecretVolumes(SecretVolume[] secretVolumes) {
        this.secretVolumes = secretVolumes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("securityLevel")
    public ServiceConfigSecurityLevelEnum securityLevel;
    public ServiceConfigInput withSecurityLevel(ServiceConfigSecurityLevelEnum securityLevel) {
        this.securityLevel = securityLevel;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("serviceAccountEmail")
    public String serviceAccountEmail;
    public ServiceConfigInput withServiceAccountEmail(String serviceAccountEmail) {
        this.serviceAccountEmail = serviceAccountEmail;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("timeoutSeconds")
    public Integer timeoutSeconds;
    public ServiceConfigInput withTimeoutSeconds(Integer timeoutSeconds) {
        this.timeoutSeconds = timeoutSeconds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("vpcConnector")
    public String vpcConnector;
    public ServiceConfigInput withVpcConnector(String vpcConnector) {
        this.vpcConnector = vpcConnector;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("vpcConnectorEgressSettings")
    public ServiceConfigVpcConnectorEgressSettingsEnum vpcConnectorEgressSettings;
    public ServiceConfigInput withVpcConnectorEgressSettings(ServiceConfigVpcConnectorEgressSettingsEnum vpcConnectorEgressSettings) {
        this.vpcConnectorEgressSettings = vpcConnectorEgressSettings;
        return this;
    }
}