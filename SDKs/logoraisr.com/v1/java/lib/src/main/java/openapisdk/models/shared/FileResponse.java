package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class FileResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("file_id")
    public String fileId;
    public FileResponse withFileId(String fileId) {
        this.fileId = fileId;
        return this;
    }
}