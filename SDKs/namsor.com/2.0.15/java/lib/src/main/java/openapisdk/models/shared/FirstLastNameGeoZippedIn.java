package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class FirstLastNameGeoZippedIn {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("countryIso2")
    public String countryIso2;
    public FirstLastNameGeoZippedIn withCountryIso2(String countryIso2) {
        this.countryIso2 = countryIso2;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("firstName")
    public String firstName;
    public FirstLastNameGeoZippedIn withFirstName(String firstName) {
        this.firstName = firstName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public FirstLastNameGeoZippedIn withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lastName")
    public String lastName;
    public FirstLastNameGeoZippedIn withLastName(String lastName) {
        this.lastName = lastName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("zipCode")
    public String zipCode;
    public FirstLastNameGeoZippedIn withZipCode(String zipCode) {
        this.zipCode = zipCode;
        return this;
    }
}