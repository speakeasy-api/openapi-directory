package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOrganisationParentOrganisationOrganisationName
 * Organisation Name
**/
public class GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOrganisationParentOrganisationOrganisationName {
    @JsonProperty("LegalName")
    public String legalName;
    public GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOrganisationParentOrganisationOrganisationName withLegalName(String legalName) {
        this.legalName = legalName;
        return this;
    }
}