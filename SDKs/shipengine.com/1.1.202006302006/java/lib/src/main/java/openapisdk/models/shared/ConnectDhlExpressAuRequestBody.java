package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * ConnectDhlExpressAuRequestBody
 * A DHL Express AU account information request body
**/
public class ConnectDhlExpressAuRequestBody {
    @JsonProperty("account_number")
    public String accountNumber;
    public ConnectDhlExpressAuRequestBody withAccountNumber(String accountNumber) {
        this.accountNumber = accountNumber;
        return this;
    }
    @JsonProperty("nickname")
    public String nickname;
    public ConnectDhlExpressAuRequestBody withNickname(String nickname) {
        this.nickname = nickname;
        return this;
    }
}