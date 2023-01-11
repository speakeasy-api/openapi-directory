package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOrganisationParentOrganisationOrganisationName
 * Organisation Name
**/
public class GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOrganisationParentOrganisationOrganisationName {
    @JsonProperty("LegalName")
    public String legalName;
    public GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOrganisationParentOrganisationOrganisationName withLegalName(String legalName) {
        this.legalName = legalName;
        return this;
    }
}