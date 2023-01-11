package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * ConnectAccessWorldwideRequestBody
 * An Access Worldwide account information request body
**/
public class ConnectAccessWorldwideRequestBody {
    @JsonProperty("nickname")
    public String nickname;
    public ConnectAccessWorldwideRequestBody withNickname(String nickname) {
        this.nickname = nickname;
        return this;
    }
    @JsonProperty("password")
    public String password;
    public ConnectAccessWorldwideRequestBody withPassword(String password) {
        this.password = password;
        return this;
    }
    @JsonProperty("username")
    public String username;
    public ConnectAccessWorldwideRequestBody withUsername(String username) {
        this.username = username;
        return this;
    }
}