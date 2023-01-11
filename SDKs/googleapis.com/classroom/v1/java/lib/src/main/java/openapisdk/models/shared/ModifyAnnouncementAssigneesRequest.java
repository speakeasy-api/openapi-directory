package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ModifyAnnouncementAssigneesRequest
 * Request to modify assignee mode and options of an announcement.
**/
public class ModifyAnnouncementAssigneesRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("assigneeMode")
    public ModifyAnnouncementAssigneesRequestAssigneeModeEnum assigneeMode;
    public ModifyAnnouncementAssigneesRequest withAssigneeMode(ModifyAnnouncementAssigneesRequestAssigneeModeEnum assigneeMode) {
        this.assigneeMode = assigneeMode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("modifyIndividualStudentsOptions")
    public ModifyIndividualStudentsOptions modifyIndividualStudentsOptions;
    public ModifyAnnouncementAssigneesRequest withModifyIndividualStudentsOptions(ModifyIndividualStudentsOptions modifyIndividualStudentsOptions) {
        this.modifyIndividualStudentsOptions = modifyIndividualStudentsOptions;
        return this;
    }
}