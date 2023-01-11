package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * FirstLastNamePhoneCodedOut
 * Represents the output of inferring the LIKELY country and phone code from a personal name and phone number.
**/
public class FirstLastNamePhoneCodedOut {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("countryIso2")
    public String countryIso2;
    public FirstLastNamePhoneCodedOut withCountryIso2(String countryIso2) {
        this.countryIso2 = countryIso2;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("firstName")
    public String firstName;
    public FirstLastNamePhoneCodedOut withFirstName(String firstName) {
        this.firstName = firstName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public FirstLastNamePhoneCodedOut withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("internationalPhoneNumberVerified")
    public String internationalPhoneNumberVerified;
    public FirstLastNamePhoneCodedOut withInternationalPhoneNumberVerified(String internationalPhoneNumberVerified) {
        this.internationalPhoneNumberVerified = internationalPhoneNumberVerified;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lastName")
    public String lastName;
    public FirstLastNamePhoneCodedOut withLastName(String lastName) {
        this.lastName = lastName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("originCountryIso2")
    public String originCountryIso2;
    public FirstLastNamePhoneCodedOut withOriginCountryIso2(String originCountryIso2) {
        this.originCountryIso2 = originCountryIso2;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("originCountryIso2Alt")
    public String originCountryIso2Alt;
    public FirstLastNamePhoneCodedOut withOriginCountryIso2Alt(String originCountryIso2Alt) {
        this.originCountryIso2Alt = originCountryIso2Alt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("phoneCountryCode")
    public Integer phoneCountryCode;
    public FirstLastNamePhoneCodedOut withPhoneCountryCode(Integer phoneCountryCode) {
        this.phoneCountryCode = phoneCountryCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("phoneCountryCodeAlt")
    public Integer phoneCountryCodeAlt;
    public FirstLastNamePhoneCodedOut withPhoneCountryCodeAlt(Integer phoneCountryCodeAlt) {
        this.phoneCountryCodeAlt = phoneCountryCodeAlt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("phoneCountryIso2")
    public String phoneCountryIso2;
    public FirstLastNamePhoneCodedOut withPhoneCountryIso2(String phoneCountryIso2) {
        this.phoneCountryIso2 = phoneCountryIso2;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("phoneCountryIso2Alt")
    public String phoneCountryIso2Alt;
    public FirstLastNamePhoneCodedOut withPhoneCountryIso2Alt(String phoneCountryIso2Alt) {
        this.phoneCountryIso2Alt = phoneCountryIso2Alt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("phoneCountryIso2Verified")
    public String phoneCountryIso2Verified;
    public FirstLastNamePhoneCodedOut withPhoneCountryIso2Verified(String phoneCountryIso2Verified) {
        this.phoneCountryIso2Verified = phoneCountryIso2Verified;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("phoneNumber")
    public String phoneNumber;
    public FirstLastNamePhoneCodedOut withPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("score")
    public Double score;
    public FirstLastNamePhoneCodedOut withScore(Double score) {
        this.score = score;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("script")
    public String script;
    public FirstLastNamePhoneCodedOut withScript(String script) {
        this.script = script;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("verified")
    public Boolean verified;
    public FirstLastNamePhoneCodedOut withVerified(Boolean verified) {
        this.verified = verified;
        return this;
    }
}