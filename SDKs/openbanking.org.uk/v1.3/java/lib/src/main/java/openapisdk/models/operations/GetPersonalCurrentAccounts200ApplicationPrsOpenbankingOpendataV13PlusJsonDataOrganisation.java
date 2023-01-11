package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOrganisation
 * Organisation
**/
public class GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOrganisation {
    @JsonProperty("Brand")
    public GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOrganisationBrand brand;
    public GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOrganisation withBrand(GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOrganisationBrand brand) {
        this.brand = brand;
        return this;
    }
    @JsonProperty("ParentOrganisation")
    public GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOrganisationParentOrganisation parentOrganisation;
    public GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOrganisation withParentOrganisation(GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOrganisationParentOrganisation parentOrganisation) {
        this.parentOrganisation = parentOrganisation;
        return this;
    }
}