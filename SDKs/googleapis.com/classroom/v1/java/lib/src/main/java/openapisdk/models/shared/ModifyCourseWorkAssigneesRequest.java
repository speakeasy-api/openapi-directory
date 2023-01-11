package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ModifyCourseWorkAssigneesRequest
 * Request to modify assignee mode and options of a coursework.
**/
public class ModifyCourseWorkAssigneesRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("assigneeMode")
    public ModifyCourseWorkAssigneesRequestAssigneeModeEnum assigneeMode;
    public ModifyCourseWorkAssigneesRequest withAssigneeMode(ModifyCourseWorkAssigneesRequestAssigneeModeEnum assigneeMode) {
        this.assigneeMode = assigneeMode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("modifyIndividualStudentsOptions")
    public ModifyIndividualStudentsOptions modifyIndividualStudentsOptions;
    public ModifyCourseWorkAssigneesRequest withModifyIndividualStudentsOptions(ModifyIndividualStudentsOptions modifyIndividualStudentsOptions) {
        this.modifyIndividualStudentsOptions = modifyIndividualStudentsOptions;
        return this;
    }
}