package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOrganisationParentOrganisation
 * Parent organisation
**/
public class GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOrganisationParentOrganisation {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("BIC")
    public String bic;
    public GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOrganisationParentOrganisation withBic(String bic) {
        this.bic = bic;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("LEI")
    public String lei;
    public GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOrganisationParentOrganisation withLei(String lei) {
        this.lei = lei;
        return this;
    }
    @JsonProperty("OrganisationName")
    public GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOrganisationParentOrganisationOrganisationName organisationName;
    public GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOrganisationParentOrganisation withOrganisationName(GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOrganisationParentOrganisationOrganisationName organisationName) {
        this.organisationName = organisationName;
        return this;
    }
}