package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GdataDiffUploadResponse
 * gdata
**/
public class GdataDiffUploadResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("objectVersion")
    public String objectVersion;
    public GdataDiffUploadResponse withObjectVersion(String objectVersion) {
        this.objectVersion = objectVersion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("originalObject")
    public GdataCompositeMedia originalObject;
    public GdataDiffUploadResponse withOriginalObject(GdataCompositeMedia originalObject) {
        this.originalObject = originalObject;
        return this;
    }
}