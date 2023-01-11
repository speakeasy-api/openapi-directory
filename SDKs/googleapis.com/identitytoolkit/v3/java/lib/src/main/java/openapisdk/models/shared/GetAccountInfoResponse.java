package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GetAccountInfoResponse
 * Response of getting account information.
**/
public class GetAccountInfoResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public GetAccountInfoResponse withKind(String kind) {
        this.kind = kind;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("users")
    public UserInfo[] users;
    public GetAccountInfoResponse withUsers(UserInfo[] users) {
        this.users = users;
        return this;
    }
}