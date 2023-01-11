package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class FollowUsersRequestBody {
    @JsonProperty("users")
    public String[] users;
    public FollowUsersRequestBody withUsers(String[] users) {
        this.users = users;
        return this;
    }
}