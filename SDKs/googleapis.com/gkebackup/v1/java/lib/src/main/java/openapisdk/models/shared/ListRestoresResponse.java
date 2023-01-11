package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListRestoresResponse
 * Response message for ListRestores.
**/
public class ListRestoresResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public ListRestoresResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("restores")
    public Restore[] restores;
    public ListRestoresResponse withRestores(Restore[] restores) {
        this.restores = restores;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("unreachable")
    public String[] unreachable;
    public ListRestoresResponse withUnreachable(String[] unreachable) {
        this.unreachable = unreachable;
        return this;
    }
}