package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CompanyDomainInputModel {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("domain")
    public String domain;
    public CompanyDomainInputModel withDomain(String domain) {
        this.domain = domain;
        return this;
    }
}