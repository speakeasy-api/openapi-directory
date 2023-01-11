package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetMembers200ApplicationJson {
    @JsonProperty("name")
    public String name;
    public GetMembers200ApplicationJson withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("state")
    public openapisdk.models.shared.MemberStateEnum state;
    public GetMembers200ApplicationJson withState(openapisdk.models.shared.MemberStateEnum state) {
        this.state = state;
        return this;
    }
    @JsonProperty("user_id")
    public String userId;
    public GetMembers200ApplicationJson withUserId(String userId) {
        this.userId = userId;
        return this;
    }
    @JsonProperty("user_name")
    public String userName;
    public GetMembers200ApplicationJson withUserName(String userName) {
        this.userName = userName;
        return this;
    }
}