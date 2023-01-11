package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * ConnectImexRequestBody
 * An Imex account information request body
**/
public class ConnectImexRequestBody {
    @JsonProperty("nickname")
    public String nickname;
    public ConnectImexRequestBody withNickname(String nickname) {
        this.nickname = nickname;
        return this;
    }
    @JsonProperty("password")
    public String password;
    public ConnectImexRequestBody withPassword(String password) {
        this.password = password;
        return this;
    }
    @JsonProperty("username")
    public String username;
    public ConnectImexRequestBody withUsername(String username) {
        this.username = username;
        return this;
    }
}