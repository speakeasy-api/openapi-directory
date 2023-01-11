package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListNegativeKeywordListsResponse
 * Response message for NegativeKeywordListService.ListNegativeKeywordLists.
**/
public class ListNegativeKeywordListsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("negativeKeywordLists")
    public NegativeKeywordList[] negativeKeywordLists;
    public ListNegativeKeywordListsResponse withNegativeKeywordLists(NegativeKeywordList[] negativeKeywordLists) {
        this.negativeKeywordLists = negativeKeywordLists;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public ListNegativeKeywordListsResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
}