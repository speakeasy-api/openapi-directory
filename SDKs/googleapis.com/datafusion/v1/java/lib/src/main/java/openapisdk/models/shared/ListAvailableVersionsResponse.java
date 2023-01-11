package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListAvailableVersionsResponse
 * Response message for the list available versions request.
**/
public class ListAvailableVersionsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("availableVersions")
    public Version[] availableVersions;
    public ListAvailableVersionsResponse withAvailableVersions(Version[] availableVersions) {
        this.availableVersions = availableVersions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public ListAvailableVersionsResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
}