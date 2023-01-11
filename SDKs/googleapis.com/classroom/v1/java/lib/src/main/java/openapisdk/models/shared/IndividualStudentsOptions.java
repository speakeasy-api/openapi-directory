package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * IndividualStudentsOptions
 * Assignee details about a coursework/announcement. This field is set if and only if `assigneeMode` is `INDIVIDUAL_STUDENTS`.
**/
public class IndividualStudentsOptions {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("studentIds")
    public String[] studentIds;
    public IndividualStudentsOptions withStudentIds(String[] studentIds) {
        this.studentIds = studentIds;
        return this;
    }
}