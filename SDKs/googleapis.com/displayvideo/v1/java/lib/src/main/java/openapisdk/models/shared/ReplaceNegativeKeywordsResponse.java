package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ReplaceNegativeKeywordsResponse
 * Response message for NegativeKeywordService.ReplaceNegativeKeywords.
**/
public class ReplaceNegativeKeywordsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("negativeKeywords")
    public NegativeKeyword[] negativeKeywords;
    public ReplaceNegativeKeywordsResponse withNegativeKeywords(NegativeKeyword[] negativeKeywords) {
        this.negativeKeywords = negativeKeywords;
        return this;
    }
}