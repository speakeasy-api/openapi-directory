package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class IssuesAddAssigneesRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("assignees")
    public String[] assignees;
    public IssuesAddAssigneesRequestBody withAssignees(String[] assignees) {
        this.assignees = assignees;
        return this;
    }
}