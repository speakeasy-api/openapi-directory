package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ExpansionFilesUploadResponse
 * Response for uploading an expansion file.
**/
public class ExpansionFilesUploadResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("expansionFile")
    public ExpansionFile expansionFile;
    public ExpansionFilesUploadResponse withExpansionFile(ExpansionFile expansionFile) {
        this.expansionFile = expansionFile;
        return this;
    }
}