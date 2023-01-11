package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CommonFeatureSpec
 * CommonFeatureSpec contains Hub-wide configuration information
**/
public class CommonFeatureSpec {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("anthosobservability")
    public AnthosObservabilityFeatureSpec anthosobservability;
    public CommonFeatureSpec withAnthosobservability(AnthosObservabilityFeatureSpec anthosobservability) {
        this.anthosobservability = anthosobservability;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("appdevexperience")
    public java.util.Map<String, Object> appdevexperience;
    public CommonFeatureSpec withAppdevexperience(java.util.Map<String, Object> appdevexperience) {
        this.appdevexperience = appdevexperience;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cloudauditlogging")
    public CloudAuditLoggingFeatureSpec cloudauditlogging;
    public CommonFeatureSpec withCloudauditlogging(CloudAuditLoggingFeatureSpec cloudauditlogging) {
        this.cloudauditlogging = cloudauditlogging;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fleetobservability")
    public java.util.Map<String, Object> fleetobservability;
    public CommonFeatureSpec withFleetobservability(java.util.Map<String, Object> fleetobservability) {
        this.fleetobservability = fleetobservability;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("multiclusteringress")
    public MultiClusterIngressFeatureSpec multiclusteringress;
    public CommonFeatureSpec withMulticlusteringress(MultiClusterIngressFeatureSpec multiclusteringress) {
        this.multiclusteringress = multiclusteringress;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("workloadcertificate")
    public FeatureSpec workloadcertificate;
    public CommonFeatureSpec withWorkloadcertificate(FeatureSpec workloadcertificate) {
        this.workloadcertificate = workloadcertificate;
        return this;
    }
}