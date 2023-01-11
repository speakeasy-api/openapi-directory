package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ObRisk1DeliveryAddress
 * Information that locates and identifies a specific address, as defined by postal services or in free format text.
**/
public class ObRisk1DeliveryAddress {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AddressLine")
    public String[] addressLine;
    public ObRisk1DeliveryAddress withAddressLine(String[] addressLine) {
        this.addressLine = addressLine;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("BuildingNumber")
    public String buildingNumber;
    public ObRisk1DeliveryAddress withBuildingNumber(String buildingNumber) {
        this.buildingNumber = buildingNumber;
        return this;
    }
    @JsonProperty("Country")
    public String country;
    public ObRisk1DeliveryAddress withCountry(String country) {
        this.country = country;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CountrySubDivision")
    public String countrySubDivision;
    public ObRisk1DeliveryAddress withCountrySubDivision(String countrySubDivision) {
        this.countrySubDivision = countrySubDivision;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PostCode")
    public String postCode;
    public ObRisk1DeliveryAddress withPostCode(String postCode) {
        this.postCode = postCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("StreetName")
    public String streetName;
    public ObRisk1DeliveryAddress withStreetName(String streetName) {
        this.streetName = streetName;
        return this;
    }
    @JsonProperty("TownName")
    public String townName;
    public ObRisk1DeliveryAddress withTownName(String townName) {
        this.townName = townName;
        return this;
    }
}