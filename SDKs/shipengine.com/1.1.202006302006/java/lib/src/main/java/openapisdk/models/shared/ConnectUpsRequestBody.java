package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ConnectUpsRequestBody
 * A UPS account information request body
**/
public class ConnectUpsRequestBody {
    @JsonProperty("account_country_code")
    public String accountCountryCode;
    public ConnectUpsRequestBody withAccountCountryCode(String accountCountryCode) {
        this.accountCountryCode = accountCountryCode;
        return this;
    }
    @JsonProperty("account_number")
    public String accountNumber;
    public ConnectUpsRequestBody withAccountNumber(String accountNumber) {
        this.accountNumber = accountNumber;
        return this;
    }
    @JsonProperty("account_postal_code")
    public String accountPostalCode;
    public ConnectUpsRequestBody withAccountPostalCode(String accountPostalCode) {
        this.accountPostalCode = accountPostalCode;
        return this;
    }
    @JsonProperty("address1")
    public String address1;
    public ConnectUpsRequestBody withAddress1(String address1) {
        this.address1 = address1;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("address2")
    public String address2;
    public ConnectUpsRequestBody withAddress2(String address2) {
        this.address2 = address2;
        return this;
    }
    @JsonProperty("agree_to_technology_agreement")
    public Boolean agreeToTechnologyAgreement;
    public ConnectUpsRequestBody withAgreeToTechnologyAgreement(Boolean agreeToTechnologyAgreement) {
        this.agreeToTechnologyAgreement = agreeToTechnologyAgreement;
        return this;
    }
    @JsonProperty("city")
    public String city;
    public ConnectUpsRequestBody withCity(String city) {
        this.city = city;
        return this;
    }
    @JsonProperty("company")
    public String company;
    public ConnectUpsRequestBody withCompany(String company) {
        this.company = company;
        return this;
    }
    @JsonProperty("country_code")
    public String countryCode;
    public ConnectUpsRequestBody withCountryCode(String countryCode) {
        this.countryCode = countryCode;
        return this;
    }
    @JsonProperty("email")
    public String email;
    public ConnectUpsRequestBody withEmail(String email) {
        this.email = email;
        return this;
    }
    @JsonProperty("first_name")
    public String firstName;
    public ConnectUpsRequestBody withFirstName(String firstName) {
        this.firstName = firstName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("invoice")
    public UpsInvoice invoice;
    public ConnectUpsRequestBody withInvoice(UpsInvoice invoice) {
        this.invoice = invoice;
        return this;
    }
    @JsonProperty("last_name")
    public String lastName;
    public ConnectUpsRequestBody withLastName(String lastName) {
        this.lastName = lastName;
        return this;
    }
    @JsonProperty("nickname")
    public String nickname;
    public ConnectUpsRequestBody withNickname(String nickname) {
        this.nickname = nickname;
        return this;
    }
    @JsonProperty("phone")
    public String phone;
    public ConnectUpsRequestBody withPhone(String phone) {
        this.phone = phone;
        return this;
    }
    @JsonProperty("postal_code")
    public String postalCode;
    public ConnectUpsRequestBody withPostalCode(String postalCode) {
        this.postalCode = postalCode;
        return this;
    }
    @JsonProperty("state")
    public String state;
    public ConnectUpsRequestBody withState(String state) {
        this.state = state;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("title")
    public String title;
    public ConnectUpsRequestBody withTitle(String title) {
        this.title = title;
        return this;
    }
}