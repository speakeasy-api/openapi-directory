package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class BookingBookRequestBodyItemsTravellers {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bandId")
    public Long bandId;
    public BookingBookRequestBodyItemsTravellers withBandId(Long bandId) {
        this.bandId = bandId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("firstname")
    public String firstname;
    public BookingBookRequestBodyItemsTravellers withFirstname(String firstname) {
        this.firstname = firstname;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("leadTraveller")
    public Boolean leadTraveller;
    public BookingBookRequestBodyItemsTravellers withLeadTraveller(Boolean leadTraveller) {
        this.leadTraveller = leadTraveller;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("surname")
    public String surname;
    public BookingBookRequestBodyItemsTravellers withSurname(String surname) {
        this.surname = surname;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("title")
    public String title;
    public BookingBookRequestBodyItemsTravellers withTitle(String title) {
        this.title = title;
        return this;
    }
}