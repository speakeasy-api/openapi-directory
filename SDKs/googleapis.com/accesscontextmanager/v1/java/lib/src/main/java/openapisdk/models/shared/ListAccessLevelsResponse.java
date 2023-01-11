package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListAccessLevelsResponse
 * A response to `ListAccessLevelsRequest`.
**/
public class ListAccessLevelsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("accessLevels")
    public AccessLevel[] accessLevels;
    public ListAccessLevelsResponse withAccessLevels(AccessLevel[] accessLevels) {
        this.accessLevels = accessLevels;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public ListAccessLevelsResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
}