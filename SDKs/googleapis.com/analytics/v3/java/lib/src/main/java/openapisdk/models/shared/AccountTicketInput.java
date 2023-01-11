package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AccountTicketInput
 * JSON template for an Analytics account ticket. The account ticket consists of the ticket ID and the basic information for the account, property and profile.
**/
public class AccountTicketInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("account")
    public Account1 account;
    public AccountTicketInput withAccount(Account1 account) {
        this.account = account;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public AccountTicketInput withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public AccountTicketInput withKind(String kind) {
        this.kind = kind;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("profile")
    public ProfileInput profile;
    public AccountTicketInput withProfile(ProfileInput profile) {
        this.profile = profile;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("redirectUri")
    public String redirectUri;
    public AccountTicketInput withRedirectUri(String redirectUri) {
        this.redirectUri = redirectUri;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("webproperty")
    public WebpropertyInput webproperty;
    public AccountTicketInput withWebproperty(WebpropertyInput webproperty) {
        this.webproperty = webproperty;
        return this;
    }
}