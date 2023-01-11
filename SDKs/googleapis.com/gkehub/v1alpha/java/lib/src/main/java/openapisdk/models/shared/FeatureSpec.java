package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * FeatureSpec
 * **Workload Certificate**: The Hub-wide input for the WorkloadCertificate feature.
**/
public class FeatureSpec {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("defaultConfig")
    public MembershipSpec defaultConfig;
    public FeatureSpec withDefaultConfig(MembershipSpec defaultConfig) {
        this.defaultConfig = defaultConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("provisionGoogleCa")
    public FeatureSpecProvisionGoogleCaEnum provisionGoogleCa;
    public FeatureSpec withProvisionGoogleCa(FeatureSpecProvisionGoogleCaEnum provisionGoogleCa) {
        this.provisionGoogleCa = provisionGoogleCa;
        return this;
    }
}