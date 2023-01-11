package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AccountTreeResponse
 * JSON template for an Analytics account tree response. The account tree response is used in the provisioning api to return the result of creating an account, property, and view (profile).
**/
public class AccountTreeResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("account")
    public Account account;
    public AccountTreeResponse withAccount(Account account) {
        this.account = account;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public AccountTreeResponse withKind(String kind) {
        this.kind = kind;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("profile")
    public Profile profile;
    public AccountTreeResponse withProfile(Profile profile) {
        this.profile = profile;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("webproperty")
    public Webproperty webproperty;
    public AccountTreeResponse withWebproperty(Webproperty webproperty) {
        this.webproperty = webproperty;
        return this;
    }
}