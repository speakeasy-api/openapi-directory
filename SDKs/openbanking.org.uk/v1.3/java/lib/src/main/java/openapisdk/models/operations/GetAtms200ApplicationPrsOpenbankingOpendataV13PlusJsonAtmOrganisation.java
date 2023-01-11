package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJsonAtmOrganisation
 * Organisation
**/
public class GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJsonAtmOrganisation {
    @JsonProperty("Brand")
    public GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJsonAtmOrganisationBrand brand;
    public GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJsonAtmOrganisation withBrand(GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJsonAtmOrganisationBrand brand) {
        this.brand = brand;
        return this;
    }
    @JsonProperty("ParentOrganisation")
    public GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJsonAtmOrganisationParentOrganisation parentOrganisation;
    public GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJsonAtmOrganisation withParentOrganisation(GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJsonAtmOrganisationParentOrganisation parentOrganisation) {
        this.parentOrganisation = parentOrganisation;
        return this;
    }
}