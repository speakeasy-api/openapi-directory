package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * BulkEditNegativeKeywordsResponse
 * Response message for NegativeKeywordService.BulkEditNegativeKeywords.
**/
public class BulkEditNegativeKeywordsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("negativeKeywords")
    public NegativeKeyword[] negativeKeywords;
    public BulkEditNegativeKeywordsResponse withNegativeKeywords(NegativeKeyword[] negativeKeywords) {
        this.negativeKeywords = negativeKeywords;
        return this;
    }
}