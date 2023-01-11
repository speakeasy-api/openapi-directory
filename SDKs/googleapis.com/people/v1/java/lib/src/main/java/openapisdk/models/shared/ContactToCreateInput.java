package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ContactToCreateInput
 * A wrapper that contains the person data to populate a newly created source.
**/
public class ContactToCreateInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("contactPerson")
    public PersonInput contactPerson;
    public ContactToCreateInput withContactPerson(PersonInput contactPerson) {
        this.contactPerson = contactPerson;
        return this;
    }
}