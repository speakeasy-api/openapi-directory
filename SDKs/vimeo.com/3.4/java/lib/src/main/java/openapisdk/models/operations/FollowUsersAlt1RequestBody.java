package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class FollowUsersAlt1RequestBody {
    @JsonProperty("users")
    public String[] users;
    public FollowUsersAlt1RequestBody withUsers(String[] users) {
        this.users = users;
        return this;
    }
}