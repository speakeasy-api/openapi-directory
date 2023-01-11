package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateContactInMailingList {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("email")
    public String email;
    public CreateContactInMailingList withEmail(String email) {
        this.email = email;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("firstName")
    public String firstName;
    public CreateContactInMailingList withFirstName(String firstName) {
        this.firstName = firstName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lastName")
    public String lastName;
    public CreateContactInMailingList withLastName(String lastName) {
        this.lastName = lastName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("unsubscribed")
    public Boolean unsubscribed;
    public CreateContactInMailingList withUnsubscribed(Boolean unsubscribed) {
        this.unsubscribed = unsubscribed;
        return this;
    }
}