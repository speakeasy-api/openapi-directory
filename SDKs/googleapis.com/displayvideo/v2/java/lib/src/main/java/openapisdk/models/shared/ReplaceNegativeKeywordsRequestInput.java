package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ReplaceNegativeKeywordsRequestInput
 * Request message for NegativeKeywordService.ReplaceNegativeKeywords.
**/
public class ReplaceNegativeKeywordsRequestInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("newNegativeKeywords")
    public NegativeKeywordInput[] newNegativeKeywords;
    public ReplaceNegativeKeywordsRequestInput withNewNegativeKeywords(NegativeKeywordInput[] newNegativeKeywords) {
        this.newNegativeKeywords = newNegativeKeywords;
        return this;
    }
}