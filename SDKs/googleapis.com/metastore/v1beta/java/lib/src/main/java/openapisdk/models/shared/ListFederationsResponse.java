package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListFederationsResponse
 * Response message for ListFederations
**/
public class ListFederationsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("federations")
    public Federation[] federations;
    public ListFederationsResponse withFederations(Federation[] federations) {
        this.federations = federations;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public ListFederationsResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("unreachable")
    public String[] unreachable;
    public ListFederationsResponse withUnreachable(String[] unreachable) {
        this.unreachable = unreachable;
        return this;
    }
}