package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListServiceUserListServiceUserResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("meta")
    public ListServiceUserListServiceUserResponseMeta meta;
    public ListServiceUserListServiceUserResponse withMeta(ListServiceUserListServiceUserResponseMeta meta) {
        this.meta = meta;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("users")
    public openapisdk.models.shared.ConversationsV1ServiceServiceUser[] users;
    public ListServiceUserListServiceUserResponse withUsers(openapisdk.models.shared.ConversationsV1ServiceServiceUser[] users) {
        this.users = users;
        return this;
    }
}