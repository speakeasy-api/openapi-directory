package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * InstitutionsGetRequest
 * InstitutionsGetRequest defines the request schema for `/institutions/get`
**/
public class InstitutionsGetRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("client_id")
    public String clientId;
    public InstitutionsGetRequest withClientId(String clientId) {
        this.clientId = clientId;
        return this;
    }
    @JsonProperty("count")
    public Long count;
    public InstitutionsGetRequest withCount(Long count) {
        this.count = count;
        return this;
    }
    @JsonProperty("country_codes")
    public CountryCodeEnum[] countryCodes;
    public InstitutionsGetRequest withCountryCodes(CountryCodeEnum[] countryCodes) {
        this.countryCodes = countryCodes;
        return this;
    }
    @JsonProperty("offset")
    public Long offset;
    public InstitutionsGetRequest withOffset(Long offset) {
        this.offset = offset;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("options")
    public InstitutionsGetRequestOptions options;
    public InstitutionsGetRequest withOptions(InstitutionsGetRequestOptions options) {
        this.options = options;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("secret")
    public String secret;
    public InstitutionsGetRequest withSecret(String secret) {
        this.secret = secret;
        return this;
    }
}