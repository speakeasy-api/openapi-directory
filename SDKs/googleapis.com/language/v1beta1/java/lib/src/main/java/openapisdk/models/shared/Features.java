package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Features
 * All available features for sentiment, syntax, and semantic analysis. Setting each one to true will enable that specific analysis for the input.
**/
public class Features {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("extractDocumentSentiment")
    public Boolean extractDocumentSentiment;
    public Features withExtractDocumentSentiment(Boolean extractDocumentSentiment) {
        this.extractDocumentSentiment = extractDocumentSentiment;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("extractEntities")
    public Boolean extractEntities;
    public Features withExtractEntities(Boolean extractEntities) {
        this.extractEntities = extractEntities;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("extractSyntax")
    public Boolean extractSyntax;
    public Features withExtractSyntax(Boolean extractSyntax) {
        this.extractSyntax = extractSyntax;
        return this;
    }
}