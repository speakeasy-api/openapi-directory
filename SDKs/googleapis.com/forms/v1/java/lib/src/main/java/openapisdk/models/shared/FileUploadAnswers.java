package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * FileUploadAnswers
 * All submitted files for a FileUpload question.
**/
public class FileUploadAnswers {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("answers")
    public FileUploadAnswer[] answers;
    public FileUploadAnswers withAnswers(FileUploadAnswer[] answers) {
        this.answers = answers;
        return this;
    }
}