package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DetailedServiceAddress
 * Service location address.
**/
public class DetailedServiceAddress {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("address_line1")
    public String addressLine1;
    public DetailedServiceAddress withAddressLine1(String addressLine1) {
        this.addressLine1 = addressLine1;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("address_line2")
    public String addressLine2;
    public DetailedServiceAddress withAddressLine2(String addressLine2) {
        this.addressLine2 = addressLine2;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("building_name_number")
    public String buildingNameNumber;
    public DetailedServiceAddress withBuildingNameNumber(String buildingNameNumber) {
        this.buildingNameNumber = buildingNameNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("city")
    public String city;
    public DetailedServiceAddress withCity(String city) {
        this.city = city;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("clinic_name")
    public String clinicName;
    public DetailedServiceAddress withClinicName(String clinicName) {
        this.clinicName = clinicName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("country_code")
    public String countryCode;
    public DetailedServiceAddress withCountryCode(String countryCode) {
        this.countryCode = countryCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("state")
    public String state;
    public DetailedServiceAddress withState(String state) {
        this.state = state;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("wing_floor_or_room_number")
    public String wingFloorOrRoomNumber;
    public DetailedServiceAddress withWingFloorOrRoomNumber(String wingFloorOrRoomNumber) {
        this.wingFloorOrRoomNumber = wingFloorOrRoomNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("zip_code")
    public String zipCode;
    public DetailedServiceAddress withZipCode(String zipCode) {
        this.zipCode = zipCode;
        return this;
    }
}