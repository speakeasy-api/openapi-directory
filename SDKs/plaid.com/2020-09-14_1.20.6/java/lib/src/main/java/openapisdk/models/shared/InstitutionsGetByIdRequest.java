package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * InstitutionsGetByIdRequest
 * InstitutionsGetByIdRequest defines the request schema for `/institutions/get_by_id`
**/
public class InstitutionsGetByIdRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("client_id")
    public String clientId;
    public InstitutionsGetByIdRequest withClientId(String clientId) {
        this.clientId = clientId;
        return this;
    }
    @JsonProperty("country_codes")
    public CountryCodeEnum[] countryCodes;
    public InstitutionsGetByIdRequest withCountryCodes(CountryCodeEnum[] countryCodes) {
        this.countryCodes = countryCodes;
        return this;
    }
    @JsonProperty("institution_id")
    public String institutionId;
    public InstitutionsGetByIdRequest withInstitutionId(String institutionId) {
        this.institutionId = institutionId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("options")
    public InstitutionsGetByIdRequestOptions options;
    public InstitutionsGetByIdRequest withOptions(InstitutionsGetByIdRequestOptions options) {
        this.options = options;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("secret")
    public String secret;
    public InstitutionsGetByIdRequest withSecret(String secret) {
        this.secret = secret;
        return this;
    }
}