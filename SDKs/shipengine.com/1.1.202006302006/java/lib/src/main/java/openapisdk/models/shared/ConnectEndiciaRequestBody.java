package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * ConnectEndiciaRequestBody
 * An Endicia account information request body
**/
public class ConnectEndiciaRequestBody {
    @JsonProperty("account")
    public String account;
    public ConnectEndiciaRequestBody withAccount(String account) {
        this.account = account;
        return this;
    }
    @JsonProperty("nickname")
    public String nickname;
    public ConnectEndiciaRequestBody withNickname(String nickname) {
        this.nickname = nickname;
        return this;
    }
    @JsonProperty("passphrase")
    public String passphrase;
    public ConnectEndiciaRequestBody withPassphrase(String passphrase) {
        this.passphrase = passphrase;
        return this;
    }
}