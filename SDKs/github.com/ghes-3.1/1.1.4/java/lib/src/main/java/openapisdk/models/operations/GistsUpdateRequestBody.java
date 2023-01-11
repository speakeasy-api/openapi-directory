package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GistsUpdateRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public GistsUpdateRequestBody withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("files")
    public java.util.Map<String, GistsUpdateRequestBodyFiles> files;
    public GistsUpdateRequestBody withFiles(java.util.Map<String, GistsUpdateRequestBodyFiles> files) {
        this.files = files;
        return this;
    }
}