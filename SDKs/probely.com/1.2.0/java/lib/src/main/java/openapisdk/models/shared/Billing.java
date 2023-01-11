package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class Billing {
    @JsonProperty("address")
    public String address;
    public Billing withAddress(String address) {
        this.address = address;
        return this;
    }
    @JsonProperty("city")
    public String city;
    public Billing withCity(String city) {
        this.city = city;
        return this;
    }
    @JsonProperty("country")
    public String country;
    public Billing withCountry(String country) {
        this.country = country;
        return this;
    }
    @JsonProperty("email")
    public String email;
    public Billing withEmail(String email) {
        this.email = email;
        return this;
    }
    @JsonProperty("first_name")
    public String firstName;
    public Billing withFirstName(String firstName) {
        this.firstName = firstName;
        return this;
    }
    @JsonProperty("last_name")
    public String lastName;
    public Billing withLastName(String lastName) {
        this.lastName = lastName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("other")
    public String other;
    public Billing withOther(String other) {
        this.other = other;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("reg_number")
    public String regNumber;
    public Billing withRegNumber(String regNumber) {
        this.regNumber = regNumber;
        return this;
    }
    @JsonProperty("vat_number")
    public String vatNumber;
    public Billing withVatNumber(String vatNumber) {
        this.vatNumber = vatNumber;
        return this;
    }
    @JsonProperty("zip")
    public String zip;
    public Billing withZip(String zip) {
        this.zip = zip;
        return this;
    }
}