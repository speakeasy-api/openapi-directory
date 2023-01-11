package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOrganisation
 * Organisation
**/
public class GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOrganisation {
    @JsonProperty("Brand")
    public GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOrganisationBrand brand;
    public GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOrganisation withBrand(GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOrganisationBrand brand) {
        this.brand = brand;
        return this;
    }
    @JsonProperty("ParentOrganisation")
    public GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOrganisationParentOrganisation parentOrganisation;
    public GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOrganisation withParentOrganisation(GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOrganisationParentOrganisation parentOrganisation) {
        this.parentOrganisation = parentOrganisation;
        return this;
    }
}