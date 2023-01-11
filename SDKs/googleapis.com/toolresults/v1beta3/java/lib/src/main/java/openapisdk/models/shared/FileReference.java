package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * FileReference
 * A reference to a file.
**/
public class FileReference {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fileUri")
    public String fileUri;
    public FileReference withFileUri(String fileUri) {
        this.fileUri = fileUri;
        return this;
    }
}