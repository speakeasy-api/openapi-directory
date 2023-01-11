package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GdataDiffVersionResponse
 * gdata
**/
public class GdataDiffVersionResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("objectSizeBytes")
    public String objectSizeBytes;
    public GdataDiffVersionResponse withObjectSizeBytes(String objectSizeBytes) {
        this.objectSizeBytes = objectSizeBytes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("objectVersion")
    public String objectVersion;
    public GdataDiffVersionResponse withObjectVersion(String objectVersion) {
        this.objectVersion = objectVersion;
        return this;
    }
}