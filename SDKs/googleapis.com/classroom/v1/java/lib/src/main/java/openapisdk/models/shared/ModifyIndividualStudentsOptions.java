package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ModifyIndividualStudentsOptions
 * Contains fields to add or remove students from a course work or announcement where the `assigneeMode` is set to `INDIVIDUAL_STUDENTS`.
**/
public class ModifyIndividualStudentsOptions {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("addStudentIds")
    public String[] addStudentIds;
    public ModifyIndividualStudentsOptions withAddStudentIds(String[] addStudentIds) {
        this.addStudentIds = addStudentIds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("removeStudentIds")
    public String[] removeStudentIds;
    public ModifyIndividualStudentsOptions withRemoveStudentIds(String[] removeStudentIds) {
        this.removeStudentIds = removeStudentIds;
        return this;
    }
}