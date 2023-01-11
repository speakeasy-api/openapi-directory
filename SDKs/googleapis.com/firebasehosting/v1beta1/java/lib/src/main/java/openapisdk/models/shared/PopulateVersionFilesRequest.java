package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PopulateVersionFilesRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("files")
    public java.util.Map<String, String> files;
    public PopulateVersionFilesRequest withFiles(java.util.Map<String, String> files) {
        this.files = files;
        return this;
    }
}