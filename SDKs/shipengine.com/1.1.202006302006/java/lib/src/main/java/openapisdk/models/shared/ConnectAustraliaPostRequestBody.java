package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * ConnectAustraliaPostRequestBody
 * An Australia Post account information request body
**/
public class ConnectAustraliaPostRequestBody {
    @JsonProperty("account_number")
    public String accountNumber;
    public ConnectAustraliaPostRequestBody withAccountNumber(String accountNumber) {
        this.accountNumber = accountNumber;
        return this;
    }
    @JsonProperty("api_key")
    public String apiKey;
    public ConnectAustraliaPostRequestBody withApiKey(String apiKey) {
        this.apiKey = apiKey;
        return this;
    }
    @JsonProperty("api_secret")
    public String apiSecret;
    public ConnectAustraliaPostRequestBody withApiSecret(String apiSecret) {
        this.apiSecret = apiSecret;
        return this;
    }
    @JsonProperty("nickname")
    public String nickname;
    public ConnectAustraliaPostRequestBody withNickname(String nickname) {
        this.nickname = nickname;
        return this;
    }
}