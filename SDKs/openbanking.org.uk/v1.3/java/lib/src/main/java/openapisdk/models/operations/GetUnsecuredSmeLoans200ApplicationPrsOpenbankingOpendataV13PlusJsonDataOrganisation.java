package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOrganisation
 * Organisation
**/
public class GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOrganisation {
    @JsonProperty("Brand")
    public GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOrganisationBrand brand;
    public GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOrganisation withBrand(GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOrganisationBrand brand) {
        this.brand = brand;
        return this;
    }
    @JsonProperty("ParentOrganisation")
    public GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOrganisationParentOrganisation parentOrganisation;
    public GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOrganisation withParentOrganisation(GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOrganisationParentOrganisation parentOrganisation) {
        this.parentOrganisation = parentOrganisation;
        return this;
    }
}