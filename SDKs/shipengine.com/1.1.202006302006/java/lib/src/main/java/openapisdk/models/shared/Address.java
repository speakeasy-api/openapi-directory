package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Address
 * A complete or partial mailing address.
**/
public class Address {
    @JsonProperty("address_line1")
    public String addressLine1;
    public Address withAddressLine1(String addressLine1) {
        this.addressLine1 = addressLine1;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("address_line2")
    public String addressLine2;
    public Address withAddressLine2(String addressLine2) {
        this.addressLine2 = addressLine2;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("address_line3")
    public String addressLine3;
    public Address withAddressLine3(String addressLine3) {
        this.addressLine3 = addressLine3;
        return this;
    }
    @JsonProperty("address_residential_indicator")
    public java.util.Map<String, Object> addressResidentialIndicator;
    public Address withAddressResidentialIndicator(java.util.Map<String, Object> addressResidentialIndicator) {
        this.addressResidentialIndicator = addressResidentialIndicator;
        return this;
    }
    @JsonProperty("city_locality")
    public String cityLocality;
    public Address withCityLocality(String cityLocality) {
        this.cityLocality = cityLocality;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("company_name")
    public String companyName;
    public Address withCompanyName(String companyName) {
        this.companyName = companyName;
        return this;
    }
    @JsonProperty("country_code")
    public String countryCode;
    public Address withCountryCode(String countryCode) {
        this.countryCode = countryCode;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public Address withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("phone")
    public String phone;
    public Address withPhone(String phone) {
        this.phone = phone;
        return this;
    }
    @JsonProperty("postal_code")
    public String postalCode;
    public Address withPostalCode(String postalCode) {
        this.postalCode = postalCode;
        return this;
    }
    @JsonProperty("state_province")
    public String stateProvince;
    public Address withStateProvince(String stateProvince) {
        this.stateProvince = stateProvince;
        return this;
    }
}