package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Rule
 * Specification of rules.
**/
public class Rule {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("destinations")
    public Destination[] destinations;
    public Rule withDestinations(Destination[] destinations) {
        this.destinations = destinations;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sources")
    public Source[] sources;
    public Rule withSources(Source[] sources) {
        this.sources = sources;
        return this;
    }
}