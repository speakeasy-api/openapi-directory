package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DiffVersionResponse
 * # gdata.* are outside protos with mising documentation
**/
public class DiffVersionResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("objectSizeBytes")
    public String objectSizeBytes;
    public DiffVersionResponse withObjectSizeBytes(String objectSizeBytes) {
        this.objectSizeBytes = objectSizeBytes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("objectVersion")
    public String objectVersion;
    public DiffVersionResponse withObjectVersion(String objectVersion) {
        this.objectVersion = objectVersion;
        return this;
    }
}