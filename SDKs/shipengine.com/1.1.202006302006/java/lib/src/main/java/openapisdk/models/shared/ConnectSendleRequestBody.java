package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * ConnectSendleRequestBody
 * A Sendle account information request body
**/
public class ConnectSendleRequestBody {
    @JsonProperty("api_key")
    public String apiKey;
    public ConnectSendleRequestBody withApiKey(String apiKey) {
        this.apiKey = apiKey;
        return this;
    }
    @JsonProperty("nickname")
    public String nickname;
    public ConnectSendleRequestBody withNickname(String nickname) {
        this.nickname = nickname;
        return this;
    }
    @JsonProperty("sendle_id")
    public String sendleId;
    public ConnectSendleRequestBody withSendleId(String sendleId) {
        this.sendleId = sendleId;
        return this;
    }
}