package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ContactCreateRequest {
    @JsonProperty("email")
    public String email;
    public ContactCreateRequest withEmail(String email) {
        this.email = email;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fax_number")
    public String faxNumber;
    public ContactCreateRequest withFaxNumber(String faxNumber) {
        this.faxNumber = faxNumber;
        return this;
    }
    @JsonProperty("first_name")
    public String firstName;
    public ContactCreateRequest withFirstName(String firstName) {
        this.firstName = firstName;
        return this;
    }
    @JsonProperty("last_name")
    public String lastName;
    public ContactCreateRequest withLastName(String lastName) {
        this.lastName = lastName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("phone_number")
    public String phoneNumber;
    public ContactCreateRequest withPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("primary_contact")
    public Boolean primaryContact;
    public ContactCreateRequest withPrimaryContact(Boolean primaryContact) {
        this.primaryContact = primaryContact;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("title")
    public String title;
    public ContactCreateRequest withTitle(String title) {
        this.title = title;
        return this;
    }
    @JsonProperty("types")
    public ContactCreateRequestTypesEnum[] types;
    public ContactCreateRequest withTypes(ContactCreateRequestTypesEnum[] types) {
        this.types = types;
        return this;
    }
}