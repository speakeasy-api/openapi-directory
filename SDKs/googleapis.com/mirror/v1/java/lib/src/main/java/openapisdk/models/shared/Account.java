package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Account
 * Represents an account passed into the Account Manager on Glass.
**/
public class Account {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("authTokens")
    public AuthToken[] authTokens;
    public Account withAuthTokens(AuthToken[] authTokens) {
        this.authTokens = authTokens;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("features")
    public String[] features;
    public Account withFeatures(String[] features) {
        this.features = features;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("password")
    public String password;
    public Account withPassword(String password) {
        this.password = password;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("userData")
    public UserData[] userData;
    public Account withUserData(UserData[] userData) {
        this.userData = userData;
        return this;
    }
}