package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ObBranchAndFinancialInstitutionIdentification5 {
    @JsonProperty("Identification")
    public String identification;
    public ObBranchAndFinancialInstitutionIdentification5 withIdentification(String identification) {
        this.identification = identification;
        return this;
    }
    @JsonProperty("SchemeName")
    public String schemeName;
    public ObBranchAndFinancialInstitutionIdentification5 withSchemeName(String schemeName) {
        this.schemeName = schemeName;
        return this;
    }
}