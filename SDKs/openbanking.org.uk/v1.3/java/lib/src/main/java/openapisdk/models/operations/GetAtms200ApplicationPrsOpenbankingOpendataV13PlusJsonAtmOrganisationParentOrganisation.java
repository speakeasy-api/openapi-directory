package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJsonAtmOrganisationParentOrganisation
 * Parent organisation
**/
public class GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJsonAtmOrganisationParentOrganisation {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("BIC")
    public String bic;
    public GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJsonAtmOrganisationParentOrganisation withBic(String bic) {
        this.bic = bic;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("LEI")
    public String lei;
    public GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJsonAtmOrganisationParentOrganisation withLei(String lei) {
        this.lei = lei;
        return this;
    }
    @JsonProperty("OrganisationName")
    public GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJsonAtmOrganisationParentOrganisationOrganisationName organisationName;
    public GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJsonAtmOrganisationParentOrganisation withOrganisationName(GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJsonAtmOrganisationParentOrganisationOrganisationName organisationName) {
        this.organisationName = organisationName;
        return this;
    }
}