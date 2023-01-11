package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * ConnectStampsRequestBody
 * A Stamps account information request body
**/
public class ConnectStampsRequestBody {
    @JsonProperty("nickname")
    public String nickname;
    public ConnectStampsRequestBody withNickname(String nickname) {
        this.nickname = nickname;
        return this;
    }
    @JsonProperty("password")
    public String password;
    public ConnectStampsRequestBody withPassword(String password) {
        this.password = password;
        return this;
    }
    @JsonProperty("username")
    public String username;
    public ConnectStampsRequestBody withUsername(String username) {
        this.username = username;
        return this;
    }
}