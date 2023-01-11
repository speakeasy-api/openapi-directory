package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetUserInfo200ApplicationJsonData {
    @JsonProperty("digest")
    public GetUserInfo200ApplicationJsonDataDigestEnum digest;
    public GetUserInfo200ApplicationJsonData withDigest(GetUserInfo200ApplicationJsonDataDigestEnum digest) {
        this.digest = digest;
        return this;
    }
    @JsonProperty("users")
    public openapisdk.models.shared.Users[] users;
    public GetUserInfo200ApplicationJsonData withUsers(openapisdk.models.shared.Users[] users) {
        this.users = users;
        return this;
    }
}