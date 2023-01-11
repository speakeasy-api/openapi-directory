package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ConnectFirstmileRequestBody
 * A First Mile account information request body
**/
public class ConnectFirstmileRequestBody {
    @JsonProperty("mailer_id")
    public String mailerId;
    public ConnectFirstmileRequestBody withMailerId(String mailerId) {
        this.mailerId = mailerId;
        return this;
    }
    @JsonProperty("nickname")
    public String nickname;
    public ConnectFirstmileRequestBody withNickname(String nickname) {
        this.nickname = nickname;
        return this;
    }
    @JsonProperty("password")
    public String password;
    public ConnectFirstmileRequestBody withPassword(String password) {
        this.password = password;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("profile_name")
    public String profileName;
    public ConnectFirstmileRequestBody withProfileName(String profileName) {
        this.profileName = profileName;
        return this;
    }
}