package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Correction
 * Output only. Shows any corrections that were applied to this creative.
**/
public class Correction {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("contexts")
    public ServingContext[] contexts;
    public Correction withContexts(ServingContext[] contexts) {
        this.contexts = contexts;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("details")
    public String[] details;
    public Correction withDetails(String[] details) {
        this.details = details;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public CorrectionTypeEnum type;
    public Correction withType(CorrectionTypeEnum type) {
        this.type = type;
        return this;
    }
}