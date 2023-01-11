package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GeneralAgencyDetails {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("certified")
    public Boolean certified;
    public GeneralAgencyDetails withCertified(Boolean certified) {
        this.certified = certified;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("franchise_code")
    public String franchiseCode;
    public GeneralAgencyDetails withFranchiseCode(String franchiseCode) {
        this.franchiseCode = franchiseCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public GeneralAgencyDetails withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("national_producer_number")
    public String nationalProducerNumber;
    public GeneralAgencyDetails withNationalProducerNumber(String nationalProducerNumber) {
        this.nationalProducerNumber = nationalProducerNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tax_id_number")
    public String taxIdNumber;
    public GeneralAgencyDetails withTaxIdNumber(String taxIdNumber) {
        this.taxIdNumber = taxIdNumber;
        return this;
    }
}