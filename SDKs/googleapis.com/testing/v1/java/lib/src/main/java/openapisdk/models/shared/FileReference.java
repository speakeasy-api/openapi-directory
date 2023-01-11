package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * FileReference
 * A reference to a file, used for user inputs.
**/
public class FileReference {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("gcsPath")
    public String gcsPath;
    public FileReference withGcsPath(String gcsPath) {
        this.gcsPath = gcsPath;
        return this;
    }
}