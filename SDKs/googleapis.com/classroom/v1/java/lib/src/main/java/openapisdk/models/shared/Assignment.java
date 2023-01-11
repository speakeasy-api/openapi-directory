package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Assignment
 * Additional details for assignments.
**/
public class Assignment {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("studentWorkFolder")
    public DriveFolder studentWorkFolder;
    public Assignment withStudentWorkFolder(DriveFolder studentWorkFolder) {
        this.studentWorkFolder = studentWorkFolder;
        return this;
    }
}