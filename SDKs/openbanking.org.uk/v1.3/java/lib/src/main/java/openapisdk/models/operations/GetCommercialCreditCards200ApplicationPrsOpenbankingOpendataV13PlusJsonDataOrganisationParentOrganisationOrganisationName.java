package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOrganisationParentOrganisationOrganisationName
 * Organisation Name
**/
public class GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOrganisationParentOrganisationOrganisationName {
    @JsonProperty("LegalName")
    public String legalName;
    public GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOrganisationParentOrganisationOrganisationName withLegalName(String legalName) {
        this.legalName = legalName;
        return this;
    }
}