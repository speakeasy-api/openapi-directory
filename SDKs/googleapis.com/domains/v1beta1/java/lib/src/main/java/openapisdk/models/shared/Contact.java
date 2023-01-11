package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Contact
 * Details required for a contact associated with a `Registration`.
**/
public class Contact {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("email")
    public String email;
    public Contact withEmail(String email) {
        this.email = email;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("faxNumber")
    public String faxNumber;
    public Contact withFaxNumber(String faxNumber) {
        this.faxNumber = faxNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("phoneNumber")
    public String phoneNumber;
    public Contact withPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("postalAddress")
    public PostalAddress postalAddress;
    public Contact withPostalAddress(PostalAddress postalAddress) {
        this.postalAddress = postalAddress;
        return this;
    }
}