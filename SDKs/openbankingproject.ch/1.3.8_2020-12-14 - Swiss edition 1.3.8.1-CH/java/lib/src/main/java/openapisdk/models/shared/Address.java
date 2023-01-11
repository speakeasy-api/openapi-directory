package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class Address {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("buildingNumber")
    public String buildingNumber;
    public Address withBuildingNumber(String buildingNumber) {
        this.buildingNumber = buildingNumber;
        return this;
    }
    @JsonProperty("country")
    public String country;
    public Address withCountry(String country) {
        this.country = country;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("postCode")
    public String postCode;
    public Address withPostCode(String postCode) {
        this.postCode = postCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("streetName")
    public String streetName;
    public Address withStreetName(String streetName) {
        this.streetName = streetName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("townName")
    public String townName;
    public Address withTownName(String townName) {
        this.townName = townName;
        return this;
    }
}