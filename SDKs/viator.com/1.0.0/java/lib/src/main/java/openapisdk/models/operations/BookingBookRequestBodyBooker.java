package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * BookingBookRequestBodyBooker
 * **object** containing details about the primary contact (**note**: this contact needn't be a traveller)
**/
public class BookingBookRequestBodyBooker {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cellPhone")
    public String cellPhone;
    public BookingBookRequestBodyBooker withCellPhone(String cellPhone) {
        this.cellPhone = cellPhone;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cellPhoneCountryCode")
    public String cellPhoneCountryCode;
    public BookingBookRequestBodyBooker withCellPhoneCountryCode(String cellPhoneCountryCode) {
        this.cellPhoneCountryCode = cellPhoneCountryCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("email")
    public String email;
    public BookingBookRequestBodyBooker withEmail(String email) {
        this.email = email;
        return this;
    }
    @JsonProperty("firstname")
    public String firstname;
    public BookingBookRequestBodyBooker withFirstname(String firstname) {
        this.firstname = firstname;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("homePhone")
    public String homePhone;
    public BookingBookRequestBodyBooker withHomePhone(String homePhone) {
        this.homePhone = homePhone;
        return this;
    }
    @JsonProperty("surname")
    public String surname;
    public BookingBookRequestBodyBooker withSurname(String surname) {
        this.surname = surname;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("title")
    public String title;
    public BookingBookRequestBodyBooker withTitle(String title) {
        this.title = title;
        return this;
    }
}