package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ExtractionRule
 * Extraction Rule.
**/
public class ExtractionRule {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("extractionRegex")
    public String extractionRegex;
    public ExtractionRule withExtractionRegex(String extractionRegex) {
        this.extractionRegex = extractionRegex;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("source")
    public Source source;
    public ExtractionRule withSource(Source source) {
        this.source = source;
        return this;
    }
}