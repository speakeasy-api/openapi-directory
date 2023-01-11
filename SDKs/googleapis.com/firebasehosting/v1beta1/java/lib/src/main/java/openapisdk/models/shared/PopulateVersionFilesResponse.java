package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PopulateVersionFilesResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("uploadRequiredHashes")
    public String[] uploadRequiredHashes;
    public PopulateVersionFilesResponse withUploadRequiredHashes(String[] uploadRequiredHashes) {
        this.uploadRequiredHashes = uploadRequiredHashes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("uploadUrl")
    public String uploadUrl;
    public PopulateVersionFilesResponse withUploadUrl(String uploadUrl) {
        this.uploadUrl = uploadUrl;
        return this;
    }
}