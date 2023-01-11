package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UpdateContactGroupRequestInput
 * A request to update an existing user contact group. All updated fields will be replaced.
**/
public class UpdateContactGroupRequestInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("contactGroup")
    public ContactGroupInput contactGroup;
    public UpdateContactGroupRequestInput withContactGroup(ContactGroupInput contactGroup) {
        this.contactGroup = contactGroup;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("readGroupFields")
    public String readGroupFields;
    public UpdateContactGroupRequestInput withReadGroupFields(String readGroupFields) {
        this.readGroupFields = readGroupFields;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("updateGroupFields")
    public String updateGroupFields;
    public UpdateContactGroupRequestInput withUpdateGroupFields(String updateGroupFields) {
        this.updateGroupFields = updateGroupFields;
        return this;
    }
}