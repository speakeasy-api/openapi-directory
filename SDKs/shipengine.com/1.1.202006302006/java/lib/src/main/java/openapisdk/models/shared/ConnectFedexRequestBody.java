package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ConnectFedexRequestBody
 * A Fedex account information request body
**/
public class ConnectFedexRequestBody {
    @JsonProperty("account_number")
    public String accountNumber;
    public ConnectFedexRequestBody withAccountNumber(String accountNumber) {
        this.accountNumber = accountNumber;
        return this;
    }
    @JsonProperty("address1")
    public String address1;
    public ConnectFedexRequestBody withAddress1(String address1) {
        this.address1 = address1;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("address2")
    public String address2;
    public ConnectFedexRequestBody withAddress2(String address2) {
        this.address2 = address2;
        return this;
    }
    @JsonProperty("agree_to_eula")
    public Boolean agreeToEula;
    public ConnectFedexRequestBody withAgreeToEula(Boolean agreeToEula) {
        this.agreeToEula = agreeToEula;
        return this;
    }
    @JsonProperty("city")
    public String city;
    public ConnectFedexRequestBody withCity(String city) {
        this.city = city;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("company")
    public String company;
    public ConnectFedexRequestBody withCompany(String company) {
        this.company = company;
        return this;
    }
    @JsonProperty("country_code")
    public String countryCode;
    public ConnectFedexRequestBody withCountryCode(String countryCode) {
        this.countryCode = countryCode;
        return this;
    }
    @JsonProperty("email")
    public String email;
    public ConnectFedexRequestBody withEmail(String email) {
        this.email = email;
        return this;
    }
    @JsonProperty("first_name")
    public String firstName;
    public ConnectFedexRequestBody withFirstName(String firstName) {
        this.firstName = firstName;
        return this;
    }
    @JsonProperty("last_name")
    public String lastName;
    public ConnectFedexRequestBody withLastName(String lastName) {
        this.lastName = lastName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("meter_number")
    public String meterNumber;
    public ConnectFedexRequestBody withMeterNumber(String meterNumber) {
        this.meterNumber = meterNumber;
        return this;
    }
    @JsonProperty("nickname")
    public String nickname;
    public ConnectFedexRequestBody withNickname(String nickname) {
        this.nickname = nickname;
        return this;
    }
    @JsonProperty("phone")
    public String phone;
    public ConnectFedexRequestBody withPhone(String phone) {
        this.phone = phone;
        return this;
    }
    @JsonProperty("postal_code")
    public String postalCode;
    public ConnectFedexRequestBody withPostalCode(String postalCode) {
        this.postalCode = postalCode;
        return this;
    }
    @JsonProperty("state")
    public String state;
    public ConnectFedexRequestBody withState(String state) {
        this.state = state;
        return this;
    }
}