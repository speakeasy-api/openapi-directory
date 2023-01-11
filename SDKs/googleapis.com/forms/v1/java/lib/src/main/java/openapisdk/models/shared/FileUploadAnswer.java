package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * FileUploadAnswer
 * Info for a single file submitted to a file upload question.
**/
public class FileUploadAnswer {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fileId")
    public String fileId;
    public FileUploadAnswer withFileId(String fileId) {
        this.fileId = fileId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fileName")
    public String fileName;
    public FileUploadAnswer withFileName(String fileName) {
        this.fileName = fileName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mimeType")
    public String mimeType;
    public FileUploadAnswer withMimeType(String mimeType) {
        this.mimeType = mimeType;
        return this;
    }
}