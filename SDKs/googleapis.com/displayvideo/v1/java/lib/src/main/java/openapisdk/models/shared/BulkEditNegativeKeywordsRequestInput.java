package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * BulkEditNegativeKeywordsRequestInput
 * Request message for NegativeKeywordService.BulkEditNegativeKeywords.
**/
public class BulkEditNegativeKeywordsRequestInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("createdNegativeKeywords")
    public NegativeKeywordInput[] createdNegativeKeywords;
    public BulkEditNegativeKeywordsRequestInput withCreatedNegativeKeywords(NegativeKeywordInput[] createdNegativeKeywords) {
        this.createdNegativeKeywords = createdNegativeKeywords;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deletedNegativeKeywords")
    public String[] deletedNegativeKeywords;
    public BulkEditNegativeKeywordsRequestInput withDeletedNegativeKeywords(String[] deletedNegativeKeywords) {
        this.deletedNegativeKeywords = deletedNegativeKeywords;
        return this;
    }
}