package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AnthosObservabilityMembershipSpec
 * **Anthosobservability**: Per-Membership Feature spec.
**/
public class AnthosObservabilityMembershipSpec {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("doNotOptimizeMetrics")
    public Boolean doNotOptimizeMetrics;
    public AnthosObservabilityMembershipSpec withDoNotOptimizeMetrics(Boolean doNotOptimizeMetrics) {
        this.doNotOptimizeMetrics = doNotOptimizeMetrics;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("enableStackdriverOnApplications")
    public Boolean enableStackdriverOnApplications;
    public AnthosObservabilityMembershipSpec withEnableStackdriverOnApplications(Boolean enableStackdriverOnApplications) {
        this.enableStackdriverOnApplications = enableStackdriverOnApplications;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("version")
    public String version;
    public AnthosObservabilityMembershipSpec withVersion(String version) {
        this.version = version;
        return this;
    }
}