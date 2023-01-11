package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * ConnectApcRequestBody
 * An APC account information request body
**/
public class ConnectApcRequestBody {
    @JsonProperty("nickname")
    public String nickname;
    public ConnectApcRequestBody withNickname(String nickname) {
        this.nickname = nickname;
        return this;
    }
    @JsonProperty("password")
    public String password;
    public ConnectApcRequestBody withPassword(String password) {
        this.password = password;
        return this;
    }
    @JsonProperty("username")
    public String username;
    public ConnectApcRequestBody withUsername(String username) {
        this.username = username;
        return this;
    }
}