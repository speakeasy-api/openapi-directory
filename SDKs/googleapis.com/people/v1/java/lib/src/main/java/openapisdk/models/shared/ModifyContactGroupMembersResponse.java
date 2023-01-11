package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ModifyContactGroupMembersResponse
 * The response to a modify contact group members request.
**/
public class ModifyContactGroupMembersResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("canNotRemoveLastContactGroupResourceNames")
    public String[] canNotRemoveLastContactGroupResourceNames;
    public ModifyContactGroupMembersResponse withCanNotRemoveLastContactGroupResourceNames(String[] canNotRemoveLastContactGroupResourceNames) {
        this.canNotRemoveLastContactGroupResourceNames = canNotRemoveLastContactGroupResourceNames;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("notFoundResourceNames")
    public String[] notFoundResourceNames;
    public ModifyContactGroupMembersResponse withNotFoundResourceNames(String[] notFoundResourceNames) {
        this.notFoundResourceNames = notFoundResourceNames;
        return this;
    }
}