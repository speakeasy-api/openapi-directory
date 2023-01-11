package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * ConnectGlobegisticsRequestBody
 * A Globegistics account information request body
**/
public class ConnectGlobegisticsRequestBody {
    @JsonProperty("nickname")
    public String nickname;
    public ConnectGlobegisticsRequestBody withNickname(String nickname) {
        this.nickname = nickname;
        return this;
    }
    @JsonProperty("password")
    public String password;
    public ConnectGlobegisticsRequestBody withPassword(String password) {
        this.password = password;
        return this;
    }
    @JsonProperty("username")
    public String username;
    public ConnectGlobegisticsRequestBody withUsername(String username) {
        this.username = username;
        return this;
    }
}