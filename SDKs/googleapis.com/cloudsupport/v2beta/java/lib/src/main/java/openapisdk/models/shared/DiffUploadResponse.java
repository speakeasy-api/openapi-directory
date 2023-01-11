package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DiffUploadResponse
 * # gdata.* are outside protos with mising documentation
**/
public class DiffUploadResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("objectVersion")
    public String objectVersion;
    public DiffUploadResponse withObjectVersion(String objectVersion) {
        this.objectVersion = objectVersion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("originalObject")
    public CompositeMedia originalObject;
    public DiffUploadResponse withOriginalObject(CompositeMedia originalObject) {
        this.originalObject = originalObject;
        return this;
    }
}