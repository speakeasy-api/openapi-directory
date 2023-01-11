package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

/**
 * Site
 * Main resource associated with a target
**/
public class Site {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("basic_auth")
    public BasicAuth basicAuth;
    public Site withBasicAuth(BasicAuth basicAuth) {
        this.basicAuth = basicAuth;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("changed")
    public OffsetDateTime changed;
    public Site withChanged(OffsetDateTime changed) {
        this.changed = changed;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("changed_by")
    public ChangedBy changedBy;
    public Site withChangedBy(ChangedBy changedBy) {
        this.changedBy = changedBy;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cookies")
    public Cookies[] cookies;
    public Site withCookies(Cookies[] cookies) {
        this.cookies = cookies;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("desc")
    public String desc;
    public Site withDesc(String desc) {
        this.desc = desc;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("form_login")
    public FormLogin[] formLogin;
    public Site withFormLogin(FormLogin[] formLogin) {
        this.formLogin = formLogin;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("form_login_check_pattern")
    public String formLoginCheckPattern;
    public Site withFormLoginCheckPattern(String formLoginCheckPattern) {
        this.formLoginCheckPattern = formLoginCheckPattern;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("form_login_url")
    public String formLoginUrl;
    public Site withFormLoginUrl(String formLoginUrl) {
        this.formLoginUrl = formLoginUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("has_basic_auth")
    public Boolean hasBasicAuth;
    public Site withHasBasicAuth(Boolean hasBasicAuth) {
        this.hasBasicAuth = hasBasicAuth;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("has_form_login")
    public Boolean hasFormLogin;
    public Site withHasFormLogin(Boolean hasFormLogin) {
        this.hasFormLogin = hasFormLogin;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("headers")
    public Headers[] headers;
    public Site withHeaders(Headers[] headers) {
        this.headers = headers;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("host")
    public String host;
    public Site withHost(String host) {
        this.host = host;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public Site withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public Site withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("stack")
    public String[] stack;
    public Site withStack(String[] stack) {
        this.stack = stack;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("url")
    public String url;
    public Site withUrl(String url) {
        this.url = url;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("verification_date")
    public OffsetDateTime verificationDate;
    public Site withVerificationDate(OffsetDateTime verificationDate) {
        this.verificationDate = verificationDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("verification_last_error")
    public String verificationLastError;
    public Site withVerificationLastError(String verificationLastError) {
        this.verificationLastError = verificationLastError;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("verification_method")
    public VerificationMethodEnum verificationMethod;
    public Site withVerificationMethod(VerificationMethodEnum verificationMethod) {
        this.verificationMethod = verificationMethod;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("verification_token")
    public String verificationToken;
    public Site withVerificationToken(String verificationToken) {
        this.verificationToken = verificationToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("verified")
    public Boolean verified;
    public Site withVerified(Boolean verified) {
        this.verified = verified;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("whitelist")
    public String[] whitelist;
    public Site withWhitelist(String[] whitelist) {
        this.whitelist = whitelist;
        return this;
    }
}