package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * ConnectDhlExpressUkRequestBody
 * A DHL Express UK account information request body
**/
public class ConnectDhlExpressUkRequestBody {
    @JsonProperty("account_number")
    public String accountNumber;
    public ConnectDhlExpressUkRequestBody withAccountNumber(String accountNumber) {
        this.accountNumber = accountNumber;
        return this;
    }
    @JsonProperty("nickname")
    public String nickname;
    public ConnectDhlExpressUkRequestBody withNickname(String nickname) {
        this.nickname = nickname;
        return this;
    }
    @JsonProperty("password")
    public String password;
    public ConnectDhlExpressUkRequestBody withPassword(String password) {
        this.password = password;
        return this;
    }
    @JsonProperty("site_id")
    public String siteId;
    public ConnectDhlExpressUkRequestBody withSiteId(String siteId) {
        this.siteId = siteId;
        return this;
    }
}