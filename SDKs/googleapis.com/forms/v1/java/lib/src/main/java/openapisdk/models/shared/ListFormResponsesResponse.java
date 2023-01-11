package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListFormResponsesResponse
 * Response to a ListFormResponsesRequest.
**/
public class ListFormResponsesResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public ListFormResponsesResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("responses")
    public FormResponse[] responses;
    public ListFormResponsesResponse withResponses(FormResponse[] responses) {
        this.responses = responses;
        return this;
    }
}