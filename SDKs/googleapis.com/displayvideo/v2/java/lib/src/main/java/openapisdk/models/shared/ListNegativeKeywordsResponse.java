package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListNegativeKeywordsResponse
 * Response message for NegativeKeywordService.ListNegativeKeywords.
**/
public class ListNegativeKeywordsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("negativeKeywords")
    public NegativeKeyword[] negativeKeywords;
    public ListNegativeKeywordsResponse withNegativeKeywords(NegativeKeyword[] negativeKeywords) {
        this.negativeKeywords = negativeKeywords;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public ListNegativeKeywordsResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
}