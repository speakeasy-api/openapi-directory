package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * LinkTokenCreateRequest
 * LinkTokenCreateRequest defines the request schema for `/link/token/create`
**/
public class LinkTokenCreateRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("access_token")
    public String accessToken;
    public LinkTokenCreateRequest withAccessToken(String accessToken) {
        this.accessToken = accessToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("account_filters")
    public java.util.Map<String, Object> accountFilters;
    public LinkTokenCreateRequest withAccountFilters(java.util.Map<String, Object> accountFilters) {
        this.accountFilters = accountFilters;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("android_package_name")
    public String androidPackageName;
    public LinkTokenCreateRequest withAndroidPackageName(String androidPackageName) {
        this.androidPackageName = androidPackageName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("auth")
    public LinkTokenCreateRequestAuth auth;
    public LinkTokenCreateRequest withAuth(LinkTokenCreateRequestAuth auth) {
        this.auth = auth;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("client_id")
    public String clientId;
    public LinkTokenCreateRequest withClientId(String clientId) {
        this.clientId = clientId;
        return this;
    }
    @JsonProperty("client_name")
    public String clientName;
    public LinkTokenCreateRequest withClientName(String clientName) {
        this.clientName = clientName;
        return this;
    }
    @JsonProperty("country_codes")
    public CountryCodeEnum[] countryCodes;
    public LinkTokenCreateRequest withCountryCodes(CountryCodeEnum[] countryCodes) {
        this.countryCodes = countryCodes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deposit_switch")
    public LinkTokenCreateRequestDepositSwitch depositSwitch;
    public LinkTokenCreateRequest withDepositSwitch(LinkTokenCreateRequestDepositSwitch depositSwitch) {
        this.depositSwitch = depositSwitch;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("eu_config")
    public LinkTokenEuConfig euConfig;
    public LinkTokenCreateRequest withEuConfig(LinkTokenEuConfig euConfig) {
        this.euConfig = euConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("income_verification")
    public LinkTokenCreateRequestIncomeVerification incomeVerification;
    public LinkTokenCreateRequest withIncomeVerification(LinkTokenCreateRequestIncomeVerification incomeVerification) {
        this.incomeVerification = incomeVerification;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("institution_id")
    public String institutionId;
    public LinkTokenCreateRequest withInstitutionId(String institutionId) {
        this.institutionId = institutionId;
        return this;
    }
    @JsonProperty("language")
    public String language;
    public LinkTokenCreateRequest withLanguage(String language) {
        this.language = language;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("link_customization_name")
    public String linkCustomizationName;
    public LinkTokenCreateRequest withLinkCustomizationName(String linkCustomizationName) {
        this.linkCustomizationName = linkCustomizationName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("payment_initiation")
    public LinkTokenCreateRequestPaymentInitiation paymentInitiation;
    public LinkTokenCreateRequest withPaymentInitiation(LinkTokenCreateRequestPaymentInitiation paymentInitiation) {
        this.paymentInitiation = paymentInitiation;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("products")
    public ProductsEnum[] products;
    public LinkTokenCreateRequest withProducts(ProductsEnum[] products) {
        this.products = products;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("redirect_uri")
    public String redirectUri;
    public LinkTokenCreateRequest withRedirectUri(String redirectUri) {
        this.redirectUri = redirectUri;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("secret")
    public String secret;
    public LinkTokenCreateRequest withSecret(String secret) {
        this.secret = secret;
        return this;
    }
    @JsonProperty("user")
    public LinkTokenCreateRequestUser user;
    public LinkTokenCreateRequest withUser(LinkTokenCreateRequestUser user) {
        this.user = user;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("webhook")
    public String webhook;
    public LinkTokenCreateRequest withWebhook(String webhook) {
        this.webhook = webhook;
        return this;
    }
}