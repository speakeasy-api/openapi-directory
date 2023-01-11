package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AssignmentInput
 * An assignment allows a project to submit jobs of a certain type using slots from the specified reservation.
**/
public class AssignmentInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("assignee")
    public String assignee;
    public AssignmentInput withAssignee(String assignee) {
        this.assignee = assignee;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("jobType")
    public AssignmentJobTypeEnum jobType;
    public AssignmentInput withJobType(AssignmentJobTypeEnum jobType) {
        this.jobType = jobType;
        return this;
    }
}