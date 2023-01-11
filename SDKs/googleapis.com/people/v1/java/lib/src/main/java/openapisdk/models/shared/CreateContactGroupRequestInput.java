package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CreateContactGroupRequestInput
 * A request to create a new contact group.
**/
public class CreateContactGroupRequestInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("contactGroup")
    public ContactGroupInput contactGroup;
    public CreateContactGroupRequestInput withContactGroup(ContactGroupInput contactGroup) {
        this.contactGroup = contactGroup;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("readGroupFields")
    public String readGroupFields;
    public CreateContactGroupRequestInput withReadGroupFields(String readGroupFields) {
        this.readGroupFields = readGroupFields;
        return this;
    }
}