package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListLiensResponse
 * The response message for Liens.ListLiens.
**/
public class ListLiensResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("liens")
    public Lien[] liens;
    public ListLiensResponse withLiens(Lien[] liens) {
        this.liens = liens;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public ListLiensResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
}