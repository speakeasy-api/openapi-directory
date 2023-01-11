package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * ConnectSekoRequestBody
 * A SEKO account information request body
**/
public class ConnectSekoRequestBody {
    @JsonProperty("access_key")
    public String accessKey;
    public ConnectSekoRequestBody withAccessKey(String accessKey) {
        this.accessKey = accessKey;
        return this;
    }
    @JsonProperty("nickname")
    public String nickname;
    public ConnectSekoRequestBody withNickname(String nickname) {
        this.nickname = nickname;
        return this;
    }
}