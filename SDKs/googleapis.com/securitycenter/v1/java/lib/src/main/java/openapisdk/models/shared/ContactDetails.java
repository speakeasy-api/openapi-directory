package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ContactDetails {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("contacts")
    public Contact[] contacts;
    public ContactDetails withContacts(Contact[] contacts) {
        this.contacts = contacts;
        return this;
    }
}