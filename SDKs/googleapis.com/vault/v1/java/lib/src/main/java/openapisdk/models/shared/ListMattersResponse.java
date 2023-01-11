package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListMattersResponse
 * Provides the list of matters.
**/
public class ListMattersResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("matters")
    public Matter[] matters;
    public ListMattersResponse withMatters(Matter[] matters) {
        this.matters = matters;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public ListMattersResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
}