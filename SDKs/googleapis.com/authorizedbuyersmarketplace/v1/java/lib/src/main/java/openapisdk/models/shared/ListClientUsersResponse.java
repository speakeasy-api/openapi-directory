package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListClientUsersResponse
 * Response message for the list method.
**/
public class ListClientUsersResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("clientUsers")
    public ClientUser[] clientUsers;
    public ListClientUsersResponse withClientUsers(ClientUser[] clientUsers) {
        this.clientUsers = clientUsers;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public ListClientUsersResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
}