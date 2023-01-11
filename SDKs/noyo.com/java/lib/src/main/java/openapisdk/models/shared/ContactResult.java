package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ContactResult {
    @JsonProperty("created")
    public Long created;
    public ContactResult withCreated(Long created) {
        this.created = created;
        return this;
    }
    @JsonProperty("email")
    public String email;
    public ContactResult withEmail(String email) {
        this.email = email;
        return this;
    }
    @JsonProperty("fax_number")
    public String faxNumber;
    public ContactResult withFaxNumber(String faxNumber) {
        this.faxNumber = faxNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("first_name")
    public String firstName;
    public ContactResult withFirstName(String firstName) {
        this.firstName = firstName;
        return this;
    }
    @JsonProperty("group_id")
    public String groupId;
    public ContactResult withGroupId(String groupId) {
        this.groupId = groupId;
        return this;
    }
    @JsonProperty("id")
    public String id;
    public ContactResult withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("last_name")
    public String lastName;
    public ContactResult withLastName(String lastName) {
        this.lastName = lastName;
        return this;
    }
    @JsonProperty("modified")
    public Long modified;
    public ContactResult withModified(Long modified) {
        this.modified = modified;
        return this;
    }
    @JsonProperty("phone_number")
    public String phoneNumber;
    public ContactResult withPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
        return this;
    }
    @JsonProperty("primary_contact")
    public Boolean primaryContact;
    public ContactResult withPrimaryContact(Boolean primaryContact) {
        this.primaryContact = primaryContact;
        return this;
    }
    @JsonProperty("title")
    public String title;
    public ContactResult withTitle(String title) {
        this.title = title;
        return this;
    }
    @JsonProperty("types")
    public ContactResultTypesEnum[] types;
    public ContactResult withTypes(ContactResultTypesEnum[] types) {
        this.types = types;
        return this;
    }
    @JsonProperty("version")
    public String version;
    public ContactResult withVersion(String version) {
        this.version = version;
        return this;
    }
}