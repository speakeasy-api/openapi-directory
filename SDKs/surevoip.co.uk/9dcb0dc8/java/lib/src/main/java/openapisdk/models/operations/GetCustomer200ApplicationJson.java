package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetCustomer200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("address")
    public String address;
    public GetCustomer200ApplicationJson withAddress(String address) {
        this.address = address;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("balance")
    public Long balance;
    public GetCustomer200ApplicationJson withBalance(Long balance) {
        this.balance = balance;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("city")
    public String city;
    public GetCustomer200ApplicationJson withCity(String city) {
        this.city = city;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("company_name")
    public String companyName;
    public GetCustomer200ApplicationJson withCompanyName(String companyName) {
        this.companyName = companyName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("company_website")
    public String companyWebsite;
    public GetCustomer200ApplicationJson withCompanyWebsite(String companyWebsite) {
        this.companyWebsite = companyWebsite;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("country")
    public String country;
    public GetCustomer200ApplicationJson withCountry(String country) {
        this.country = country;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("creditlimit")
    public String creditlimit;
    public GetCustomer200ApplicationJson withCreditlimit(String creditlimit) {
        this.creditlimit = creditlimit;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("email")
    public String email;
    public GetCustomer200ApplicationJson withEmail(String email) {
        this.email = email;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fax")
    public String fax;
    public GetCustomer200ApplicationJson withFax(String fax) {
        this.fax = fax;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("firstname")
    public String firstname;
    public GetCustomer200ApplicationJson withFirstname(String firstname) {
        this.firstname = firstname;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lastname")
    public String lastname;
    public GetCustomer200ApplicationJson withLastname(String lastname) {
        this.lastname = lastname;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("phone")
    public String phone;
    public GetCustomer200ApplicationJson withPhone(String phone) {
        this.phone = phone;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("postcode")
    public String postcode;
    public GetCustomer200ApplicationJson withPostcode(String postcode) {
        this.postcode = postcode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("state")
    public String state;
    public GetCustomer200ApplicationJson withState(String state) {
        this.state = state;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("username")
    public Long username;
    public GetCustomer200ApplicationJson withUsername(Long username) {
        this.username = username;
        return this;
    }
}