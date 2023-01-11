package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * EgressControlConfig
 * Egress control config for connector runtime. These configurations define the rules to identify which outbound domains/hosts needs to be whitelisted. It may be a static information for a particular connector version or it is derived from the configurations provided by the customer in Connection resource.
**/
public class EgressControlConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("backends")
    public String backends;
    public EgressControlConfig withBackends(String backends) {
        this.backends = backends;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("extractionRules")
    public ExtractionRules extractionRules;
    public EgressControlConfig withExtractionRules(ExtractionRules extractionRules) {
        this.extractionRules = extractionRules;
        return this;
    }
}