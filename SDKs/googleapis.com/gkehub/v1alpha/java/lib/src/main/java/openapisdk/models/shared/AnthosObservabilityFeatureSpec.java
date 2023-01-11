package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AnthosObservabilityFeatureSpec
 * **Anthos Observability**: Spec
**/
public class AnthosObservabilityFeatureSpec {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("defaultMembershipSpec")
    public AnthosObservabilityMembershipSpec defaultMembershipSpec;
    public AnthosObservabilityFeatureSpec withDefaultMembershipSpec(AnthosObservabilityMembershipSpec defaultMembershipSpec) {
        this.defaultMembershipSpec = defaultMembershipSpec;
        return this;
    }
}