package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * ConnectRrDonnelleyRequestBody
 * A RR Donnelley account information request body
**/
public class ConnectRrDonnelleyRequestBody {
    @JsonProperty("nickname")
    public String nickname;
    public ConnectRrDonnelleyRequestBody withNickname(String nickname) {
        this.nickname = nickname;
        return this;
    }
    @JsonProperty("password")
    public String password;
    public ConnectRrDonnelleyRequestBody withPassword(String password) {
        this.password = password;
        return this;
    }
    @JsonProperty("username")
    public String username;
    public ConnectRrDonnelleyRequestBody withUsername(String username) {
        this.username = username;
        return this;
    }
}