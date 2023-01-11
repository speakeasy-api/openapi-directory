package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListConnectionProfilesResponse
 * Response message for listing connection profiles.
**/
public class ListConnectionProfilesResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("connectionProfiles")
    public ConnectionProfile[] connectionProfiles;
    public ListConnectionProfilesResponse withConnectionProfiles(ConnectionProfile[] connectionProfiles) {
        this.connectionProfiles = connectionProfiles;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public ListConnectionProfilesResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("unreachable")
    public String[] unreachable;
    public ListConnectionProfilesResponse withUnreachable(String[] unreachable) {
        this.unreachable = unreachable;
        return this;
    }
}