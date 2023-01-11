package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJsonAtmAddress
 * Postal Address
**/
public class GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJsonAtmAddress {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("BuildingNumberOrName")
    public String buildingNumberOrName;
    public GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJsonAtmAddress withBuildingNumberOrName(String buildingNumberOrName) {
        this.buildingNumberOrName = buildingNumberOrName;
        return this;
    }
    @JsonProperty("Country")
    public String country;
    public GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJsonAtmAddress withCountry(String country) {
        this.country = country;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CountrySubDivision")
    public String countrySubDivision;
    public GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJsonAtmAddress withCountrySubDivision(String countrySubDivision) {
        this.countrySubDivision = countrySubDivision;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("OptionalAddressField")
    public String optionalAddressField;
    public GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJsonAtmAddress withOptionalAddressField(String optionalAddressField) {
        this.optionalAddressField = optionalAddressField;
        return this;
    }
    @JsonProperty("PostCode")
    public String postCode;
    public GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJsonAtmAddress withPostCode(String postCode) {
        this.postCode = postCode;
        return this;
    }
    @JsonProperty("StreetName")
    public String streetName;
    public GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJsonAtmAddress withStreetName(String streetName) {
        this.streetName = streetName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TownName")
    public String townName;
    public GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJsonAtmAddress withTownName(String townName) {
        this.townName = townName;
        return this;
    }
}