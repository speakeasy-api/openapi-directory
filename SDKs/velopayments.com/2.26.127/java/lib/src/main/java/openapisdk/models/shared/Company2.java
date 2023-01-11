package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class Company2 {
    @JsonProperty("name")
    public String name;
    public Company2 withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("operatingName")
    public String operatingName;
    public Company2 withOperatingName(String operatingName) {
        this.operatingName = operatingName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("taxId")
    public String taxId;
    public Company2 withTaxId(String taxId) {
        this.taxId = taxId;
        return this;
    }
}