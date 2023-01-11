package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class FirstLastNamePhoneNumberIn {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("FirstLastNameOriginedOut")
    public FirstLastNameOriginedOut firstLastNameOriginedOut;
    public FirstLastNamePhoneNumberIn withFirstLastNameOriginedOut(FirstLastNameOriginedOut firstLastNameOriginedOut) {
        this.firstLastNameOriginedOut = firstLastNameOriginedOut;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("firstName")
    public String firstName;
    public FirstLastNamePhoneNumberIn withFirstName(String firstName) {
        this.firstName = firstName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public FirstLastNamePhoneNumberIn withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lastName")
    public String lastName;
    public FirstLastNamePhoneNumberIn withLastName(String lastName) {
        this.lastName = lastName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("phoneNumber")
    public String phoneNumber;
    public FirstLastNamePhoneNumberIn withPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
        return this;
    }
}