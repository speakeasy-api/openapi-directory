package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AddressToValidate
 * A complete or partial mailing address.
**/
public class AddressToValidate {
    @JsonProperty("address_line1")
    public String addressLine1;
    public AddressToValidate withAddressLine1(String addressLine1) {
        this.addressLine1 = addressLine1;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("address_line2")
    public String addressLine2;
    public AddressToValidate withAddressLine2(String addressLine2) {
        this.addressLine2 = addressLine2;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("address_line3")
    public String addressLine3;
    public AddressToValidate withAddressLine3(String addressLine3) {
        this.addressLine3 = addressLine3;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("address_residential_indicator")
    public java.util.Map<String, Object> addressResidentialIndicator;
    public AddressToValidate withAddressResidentialIndicator(java.util.Map<String, Object> addressResidentialIndicator) {
        this.addressResidentialIndicator = addressResidentialIndicator;
        return this;
    }
    @JsonProperty("city_locality")
    public String cityLocality;
    public AddressToValidate withCityLocality(String cityLocality) {
        this.cityLocality = cityLocality;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("company_name")
    public String companyName;
    public AddressToValidate withCompanyName(String companyName) {
        this.companyName = companyName;
        return this;
    }
    @JsonProperty("country_code")
    public String countryCode;
    public AddressToValidate withCountryCode(String countryCode) {
        this.countryCode = countryCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public AddressToValidate withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("phone")
    public String phone;
    public AddressToValidate withPhone(String phone) {
        this.phone = phone;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("postal_code")
    public String postalCode;
    public AddressToValidate withPostalCode(String postalCode) {
        this.postalCode = postalCode;
        return this;
    }
    @JsonProperty("state_province")
    public String stateProvince;
    public AddressToValidate withStateProvince(String stateProvince) {
        this.stateProvince = stateProvince;
        return this;
    }
}