package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ModifyContactGroupMembersRequest
 * A request to modify an existing contact group's members. Contacts can be removed from any group but they can only be added to a user group or "myContacts" or "starred" system groups.
**/
public class ModifyContactGroupMembersRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resourceNamesToAdd")
    public String[] resourceNamesToAdd;
    public ModifyContactGroupMembersRequest withResourceNamesToAdd(String[] resourceNamesToAdd) {
        this.resourceNamesToAdd = resourceNamesToAdd;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resourceNamesToRemove")
    public String[] resourceNamesToRemove;
    public ModifyContactGroupMembersRequest withResourceNamesToRemove(String[] resourceNamesToRemove) {
        this.resourceNamesToRemove = resourceNamesToRemove;
        return this;
    }
}