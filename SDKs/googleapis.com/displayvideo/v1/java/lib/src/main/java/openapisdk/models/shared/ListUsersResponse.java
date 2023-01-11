package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListUsersResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public ListUsersResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("users")
    public User[] users;
    public ListUsersResponse withUsers(User[] users) {
        this.users = users;
        return this;
    }
}