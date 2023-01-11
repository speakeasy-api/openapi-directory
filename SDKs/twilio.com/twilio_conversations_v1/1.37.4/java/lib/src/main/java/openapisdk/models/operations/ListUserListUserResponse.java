package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListUserListUserResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("meta")
    public ListUserListUserResponseMeta meta;
    public ListUserListUserResponse withMeta(ListUserListUserResponseMeta meta) {
        this.meta = meta;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("users")
    public openapisdk.models.shared.ConversationsV1User[] users;
    public ListUserListUserResponse withUsers(openapisdk.models.shared.ConversationsV1User[] users) {
        this.users = users;
        return this;
    }
}