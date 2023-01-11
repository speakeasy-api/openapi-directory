package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonBranchAddress
 * Postal Address
**/
public class GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonBranchAddress {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("BuildingNumberOrName")
    public String buildingNumberOrName;
    public GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonBranchAddress withBuildingNumberOrName(String buildingNumberOrName) {
        this.buildingNumberOrName = buildingNumberOrName;
        return this;
    }
    @JsonProperty("Country")
    public String country;
    public GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonBranchAddress withCountry(String country) {
        this.country = country;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CountrySubDivision")
    public String countrySubDivision;
    public GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonBranchAddress withCountrySubDivision(String countrySubDivision) {
        this.countrySubDivision = countrySubDivision;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("OptionalAddressField")
    public String optionalAddressField;
    public GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonBranchAddress withOptionalAddressField(String optionalAddressField) {
        this.optionalAddressField = optionalAddressField;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PostCode")
    public String postCode;
    public GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonBranchAddress withPostCode(String postCode) {
        this.postCode = postCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("StreetName")
    public String streetName;
    public GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonBranchAddress withStreetName(String streetName) {
        this.streetName = streetName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TownName")
    public String townName;
    public GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonBranchAddress withTownName(String townName) {
        this.townName = townName;
        return this;
    }
}