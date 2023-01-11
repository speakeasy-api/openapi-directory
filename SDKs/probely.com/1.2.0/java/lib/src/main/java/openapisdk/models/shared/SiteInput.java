package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SiteInput
 * Main resource associated with a target
**/
public class SiteInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("basic_auth")
    public BasicAuth basicAuth;
    public SiteInput withBasicAuth(BasicAuth basicAuth) {
        this.basicAuth = basicAuth;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cookies")
    public Cookies[] cookies;
    public SiteInput withCookies(Cookies[] cookies) {
        this.cookies = cookies;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("desc")
    public String desc;
    public SiteInput withDesc(String desc) {
        this.desc = desc;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("form_login")
    public FormLogin[] formLogin;
    public SiteInput withFormLogin(FormLogin[] formLogin) {
        this.formLogin = formLogin;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("form_login_check_pattern")
    public String formLoginCheckPattern;
    public SiteInput withFormLoginCheckPattern(String formLoginCheckPattern) {
        this.formLoginCheckPattern = formLoginCheckPattern;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("form_login_url")
    public String formLoginUrl;
    public SiteInput withFormLoginUrl(String formLoginUrl) {
        this.formLoginUrl = formLoginUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("has_basic_auth")
    public Boolean hasBasicAuth;
    public SiteInput withHasBasicAuth(Boolean hasBasicAuth) {
        this.hasBasicAuth = hasBasicAuth;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("has_form_login")
    public Boolean hasFormLogin;
    public SiteInput withHasFormLogin(Boolean hasFormLogin) {
        this.hasFormLogin = hasFormLogin;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("headers")
    public Headers[] headers;
    public SiteInput withHeaders(Headers[] headers) {
        this.headers = headers;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public SiteInput withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("url")
    public String url;
    public SiteInput withUrl(String url) {
        this.url = url;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("whitelist")
    public String[] whitelist;
    public SiteInput withWhitelist(String[] whitelist) {
        this.whitelist = whitelist;
        return this;
    }
}