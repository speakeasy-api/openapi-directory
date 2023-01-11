package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonBranchOrganisationParentOrganisation
 * Parent organisation
**/
public class GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonBranchOrganisationParentOrganisation {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("BIC")
    public String bic;
    public GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonBranchOrganisationParentOrganisation withBic(String bic) {
        this.bic = bic;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("LEI")
    public String lei;
    public GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonBranchOrganisationParentOrganisation withLei(String lei) {
        this.lei = lei;
        return this;
    }
    @JsonProperty("OrganisationName")
    public GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonBranchOrganisationParentOrganisationOrganisationName organisationName;
    public GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonBranchOrganisationParentOrganisation withOrganisationName(GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonBranchOrganisationParentOrganisationOrganisationName organisationName) {
        this.organisationName = organisationName;
        return this;
    }
}