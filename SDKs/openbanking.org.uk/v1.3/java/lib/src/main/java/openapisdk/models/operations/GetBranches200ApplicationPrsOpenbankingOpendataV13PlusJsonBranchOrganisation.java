package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonBranchOrganisation
 * Organisation
**/
public class GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonBranchOrganisation {
    @JsonProperty("Brand")
    public GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonBranchOrganisationBrand brand;
    public GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonBranchOrganisation withBrand(GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonBranchOrganisationBrand brand) {
        this.brand = brand;
        return this;
    }
    @JsonProperty("ParentOrganisation")
    public GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonBranchOrganisationParentOrganisation parentOrganisation;
    public GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonBranchOrganisation withParentOrganisation(GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonBranchOrganisationParentOrganisation parentOrganisation) {
        this.parentOrganisation = parentOrganisation;
        return this;
    }
}