package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CreativeGroupAssignment
 * Creative Group Assignment.
**/
public class CreativeGroupAssignment {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("creativeGroupId")
    public String creativeGroupId;
    public CreativeGroupAssignment withCreativeGroupId(String creativeGroupId) {
        this.creativeGroupId = creativeGroupId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("creativeGroupNumber")
    public CreativeGroupAssignmentCreativeGroupNumberEnum creativeGroupNumber;
    public CreativeGroupAssignment withCreativeGroupNumber(CreativeGroupAssignmentCreativeGroupNumberEnum creativeGroupNumber) {
        this.creativeGroupNumber = creativeGroupNumber;
        return this;
    }
}