package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ObPostalAddress6
 * Information that locates and identifies a specific address, as defined by postal services.
**/
public class ObPostalAddress6 {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AddressLine")
    public String[] addressLine;
    public ObPostalAddress6 withAddressLine(String[] addressLine) {
        this.addressLine = addressLine;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AddressType")
    public ObAddressTypeCodeEnum addressType;
    public ObPostalAddress6 withAddressType(ObAddressTypeCodeEnum addressType) {
        this.addressType = addressType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("BuildingNumber")
    public String buildingNumber;
    public ObPostalAddress6 withBuildingNumber(String buildingNumber) {
        this.buildingNumber = buildingNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Country")
    public String country;
    public ObPostalAddress6 withCountry(String country) {
        this.country = country;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CountrySubDivision")
    public String countrySubDivision;
    public ObPostalAddress6 withCountrySubDivision(String countrySubDivision) {
        this.countrySubDivision = countrySubDivision;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Department")
    public String department;
    public ObPostalAddress6 withDepartment(String department) {
        this.department = department;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PostCode")
    public String postCode;
    public ObPostalAddress6 withPostCode(String postCode) {
        this.postCode = postCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("StreetName")
    public String streetName;
    public ObPostalAddress6 withStreetName(String streetName) {
        this.streetName = streetName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SubDepartment")
    public String subDepartment;
    public ObPostalAddress6 withSubDepartment(String subDepartment) {
        this.subDepartment = subDepartment;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TownName")
    public String townName;
    public ObPostalAddress6 withTownName(String townName) {
        this.townName = townName;
        return this;
    }
}