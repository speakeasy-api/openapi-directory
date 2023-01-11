package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Assignment
 * An assignment allows a project to submit jobs of a certain type using slots from the specified reservation.
**/
public class Assignment {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("assignee")
    public String assignee;
    public Assignment withAssignee(String assignee) {
        this.assignee = assignee;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("jobType")
    public AssignmentJobTypeEnum jobType;
    public Assignment withJobType(AssignmentJobTypeEnum jobType) {
        this.jobType = jobType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public Assignment withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("state")
    public AssignmentStateEnum state;
    public Assignment withState(AssignmentStateEnum state) {
        this.state = state;
        return this;
    }
}