package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class Company {
    @JsonProperty("name")
    public String name;
    public Company withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("operatingName")
    public String operatingName;
    public Company withOperatingName(String operatingName) {
        this.operatingName = operatingName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("taxId")
    public String taxId;
    public Company withTaxId(String taxId) {
        this.taxId = taxId;
        return this;
    }
}