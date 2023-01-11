package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * FileUploadQuestion
 * A file upload question. The API currently does not support creating file upload questions.
**/
public class FileUploadQuestion {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("folderId")
    public String folderId;
    public FileUploadQuestion withFolderId(String folderId) {
        this.folderId = folderId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maxFileSize")
    public String maxFileSize;
    public FileUploadQuestion withMaxFileSize(String maxFileSize) {
        this.maxFileSize = maxFileSize;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maxFiles")
    public Integer maxFiles;
    public FileUploadQuestion withMaxFiles(Integer maxFiles) {
        this.maxFiles = maxFiles;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("types")
    public FileUploadQuestionTypesEnum[] types;
    public FileUploadQuestion withTypes(FileUploadQuestionTypesEnum[] types) {
        this.types = types;
        return this;
    }
}