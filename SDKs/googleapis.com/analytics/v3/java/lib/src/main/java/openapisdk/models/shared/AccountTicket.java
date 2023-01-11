package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AccountTicket
 * JSON template for an Analytics account ticket. The account ticket consists of the ticket ID and the basic information for the account, property and profile.
**/
public class AccountTicket {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("account")
    public Account account;
    public AccountTicket withAccount(Account account) {
        this.account = account;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public AccountTicket withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public AccountTicket withKind(String kind) {
        this.kind = kind;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("profile")
    public Profile profile;
    public AccountTicket withProfile(Profile profile) {
        this.profile = profile;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("redirectUri")
    public String redirectUri;
    public AccountTicket withRedirectUri(String redirectUri) {
        this.redirectUri = redirectUri;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("webproperty")
    public Webproperty webproperty;
    public AccountTicket withWebproperty(Webproperty webproperty) {
        this.webproperty = webproperty;
        return this;
    }
}