package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class AgencyDetails {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("certified")
    public Boolean certified;
    public AgencyDetails withCertified(Boolean certified) {
        this.certified = certified;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("franchise_code")
    public String franchiseCode;
    public AgencyDetails withFranchiseCode(String franchiseCode) {
        this.franchiseCode = franchiseCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public AgencyDetails withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("national_producer_number")
    public String nationalProducerNumber;
    public AgencyDetails withNationalProducerNumber(String nationalProducerNumber) {
        this.nationalProducerNumber = nationalProducerNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tax_id_number")
    public String taxIdNumber;
    public AgencyDetails withTaxIdNumber(String taxIdNumber) {
        this.taxIdNumber = taxIdNumber;
        return this;
    }
}