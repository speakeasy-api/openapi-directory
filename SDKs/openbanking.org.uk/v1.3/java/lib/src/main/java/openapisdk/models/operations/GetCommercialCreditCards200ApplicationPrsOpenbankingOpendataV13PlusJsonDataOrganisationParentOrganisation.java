package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOrganisationParentOrganisation
 * Parent organisation
**/
public class GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOrganisationParentOrganisation {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("BIC")
    public String bic;
    public GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOrganisationParentOrganisation withBic(String bic) {
        this.bic = bic;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("LEI")
    public String lei;
    public GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOrganisationParentOrganisation withLei(String lei) {
        this.lei = lei;
        return this;
    }
    @JsonProperty("OrganisationName")
    public GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOrganisationParentOrganisationOrganisationName organisationName;
    public GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOrganisationParentOrganisation withOrganisationName(GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOrganisationParentOrganisationOrganisationName organisationName) {
        this.organisationName = organisationName;
        return this;
    }
}