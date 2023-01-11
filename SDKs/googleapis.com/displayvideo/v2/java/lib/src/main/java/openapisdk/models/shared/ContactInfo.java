package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ContactInfo
 * Contact information defining a Customer Match audience member.
**/
public class ContactInfo {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("countryCode")
    public String countryCode;
    public ContactInfo withCountryCode(String countryCode) {
        this.countryCode = countryCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("hashedEmails")
    public String[] hashedEmails;
    public ContactInfo withHashedEmails(String[] hashedEmails) {
        this.hashedEmails = hashedEmails;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("hashedFirstName")
    public String hashedFirstName;
    public ContactInfo withHashedFirstName(String hashedFirstName) {
        this.hashedFirstName = hashedFirstName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("hashedLastName")
    public String hashedLastName;
    public ContactInfo withHashedLastName(String hashedLastName) {
        this.hashedLastName = hashedLastName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("hashedPhoneNumbers")
    public String[] hashedPhoneNumbers;
    public ContactInfo withHashedPhoneNumbers(String[] hashedPhoneNumbers) {
        this.hashedPhoneNumbers = hashedPhoneNumbers;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("zipCodes")
    public String[] zipCodes;
    public ContactInfo withZipCodes(String[] zipCodes) {
        this.zipCodes = zipCodes;
        return this;
    }
}