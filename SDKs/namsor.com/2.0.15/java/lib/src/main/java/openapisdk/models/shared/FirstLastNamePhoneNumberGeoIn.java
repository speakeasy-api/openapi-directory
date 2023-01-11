package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class FirstLastNamePhoneNumberGeoIn {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("FirstLastNameOriginedOut")
    public FirstLastNameOriginedOut firstLastNameOriginedOut;
    public FirstLastNamePhoneNumberGeoIn withFirstLastNameOriginedOut(FirstLastNameOriginedOut firstLastNameOriginedOut) {
        this.firstLastNameOriginedOut = firstLastNameOriginedOut;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("countryIso2")
    public String countryIso2;
    public FirstLastNamePhoneNumberGeoIn withCountryIso2(String countryIso2) {
        this.countryIso2 = countryIso2;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("countryIso2Alt")
    public String countryIso2Alt;
    public FirstLastNamePhoneNumberGeoIn withCountryIso2Alt(String countryIso2Alt) {
        this.countryIso2Alt = countryIso2Alt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("firstName")
    public String firstName;
    public FirstLastNamePhoneNumberGeoIn withFirstName(String firstName) {
        this.firstName = firstName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public FirstLastNamePhoneNumberGeoIn withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lastName")
    public String lastName;
    public FirstLastNamePhoneNumberGeoIn withLastName(String lastName) {
        this.lastName = lastName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("phoneNumber")
    public String phoneNumber;
    public FirstLastNamePhoneNumberGeoIn withPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
        return this;
    }
}