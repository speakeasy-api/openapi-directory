package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonBranchOrganisationParentOrganisationOrganisationName
 * Organisation Name
**/
public class GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonBranchOrganisationParentOrganisationOrganisationName {
    @JsonProperty("LegalName")
    public String legalName;
    public GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonBranchOrganisationParentOrganisationOrganisationName withLegalName(String legalName) {
        this.legalName = legalName;
        return this;
    }
}