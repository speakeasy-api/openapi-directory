package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CreateCompanyRequest
 * Input only. The Request of the CreateCompany method.
**/
public class CreateCompanyRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("company")
    public Company company;
    public CreateCompanyRequest withCompany(Company company) {
        this.company = company;
        return this;
    }
}