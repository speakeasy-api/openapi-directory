package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ExpansionFile {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fileSize")
    public String fileSize;
    public ExpansionFile withFileSize(String fileSize) {
        this.fileSize = fileSize;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("referencesVersion")
    public Integer referencesVersion;
    public ExpansionFile withReferencesVersion(Integer referencesVersion) {
        this.referencesVersion = referencesVersion;
        return this;
    }
}