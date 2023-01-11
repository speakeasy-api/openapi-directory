package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ExtractionRules
 * Extraction Rules to identity the backends from customer provided configuration in Connection resource.
**/
public class ExtractionRules {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("extractionRule")
    public ExtractionRule[] extractionRule;
    public ExtractionRules withExtractionRule(ExtractionRule[] extractionRule) {
        this.extractionRule = extractionRule;
        return this;
    }
}