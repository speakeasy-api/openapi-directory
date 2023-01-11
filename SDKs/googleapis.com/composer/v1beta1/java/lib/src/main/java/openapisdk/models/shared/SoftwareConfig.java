package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SoftwareConfig
 * Specifies the selection and configuration of software inside the environment.
**/
public class SoftwareConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("airflowConfigOverrides")
    public java.util.Map<String, String> airflowConfigOverrides;
    public SoftwareConfig withAirflowConfigOverrides(java.util.Map<String, String> airflowConfigOverrides) {
        this.airflowConfigOverrides = airflowConfigOverrides;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cloudDataLineageIntegration")
    public CloudDataLineageIntegration cloudDataLineageIntegration;
    public SoftwareConfig withCloudDataLineageIntegration(CloudDataLineageIntegration cloudDataLineageIntegration) {
        this.cloudDataLineageIntegration = cloudDataLineageIntegration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("envVariables")
    public java.util.Map<String, String> envVariables;
    public SoftwareConfig withEnvVariables(java.util.Map<String, String> envVariables) {
        this.envVariables = envVariables;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("imageVersion")
    public String imageVersion;
    public SoftwareConfig withImageVersion(String imageVersion) {
        this.imageVersion = imageVersion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pypiPackages")
    public java.util.Map<String, String> pypiPackages;
    public SoftwareConfig withPypiPackages(java.util.Map<String, String> pypiPackages) {
        this.pypiPackages = pypiPackages;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pythonVersion")
    public String pythonVersion;
    public SoftwareConfig withPythonVersion(String pythonVersion) {
        this.pythonVersion = pythonVersion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("schedulerCount")
    public Integer schedulerCount;
    public SoftwareConfig withSchedulerCount(Integer schedulerCount) {
        this.schedulerCount = schedulerCount;
        return this;
    }
}