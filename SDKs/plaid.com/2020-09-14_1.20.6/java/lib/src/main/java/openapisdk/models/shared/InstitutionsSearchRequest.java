package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * InstitutionsSearchRequest
 * InstitutionsSearchRequest defines the request schema for `/institutions/search`
**/
public class InstitutionsSearchRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("client_id")
    public String clientId;
    public InstitutionsSearchRequest withClientId(String clientId) {
        this.clientId = clientId;
        return this;
    }
    @JsonProperty("country_codes")
    public CountryCodeEnum[] countryCodes;
    public InstitutionsSearchRequest withCountryCodes(CountryCodeEnum[] countryCodes) {
        this.countryCodes = countryCodes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("options")
    public InstitutionsSearchRequestOptions options;
    public InstitutionsSearchRequest withOptions(InstitutionsSearchRequestOptions options) {
        this.options = options;
        return this;
    }
    @JsonProperty("products")
    public ProductsEnum[] products;
    public InstitutionsSearchRequest withProducts(ProductsEnum[] products) {
        this.products = products;
        return this;
    }
    @JsonProperty("query")
    public String query;
    public InstitutionsSearchRequest withQuery(String query) {
        this.query = query;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("secret")
    public String secret;
    public InstitutionsSearchRequest withSecret(String secret) {
        this.secret = secret;
        return this;
    }
}