package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DiffChecksumsResponse
 * # gdata.* are outside protos with mising documentation
**/
public class DiffChecksumsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("checksumsLocation")
    public CompositeMedia checksumsLocation;
    public DiffChecksumsResponse withChecksumsLocation(CompositeMedia checksumsLocation) {
        this.checksumsLocation = checksumsLocation;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("chunkSizeBytes")
    public String chunkSizeBytes;
    public DiffChecksumsResponse withChunkSizeBytes(String chunkSizeBytes) {
        this.chunkSizeBytes = chunkSizeBytes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("objectLocation")
    public CompositeMedia objectLocation;
    public DiffChecksumsResponse withObjectLocation(CompositeMedia objectLocation) {
        this.objectLocation = objectLocation;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("objectSizeBytes")
    public String objectSizeBytes;
    public DiffChecksumsResponse withObjectSizeBytes(String objectSizeBytes) {
        this.objectSizeBytes = objectSizeBytes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("objectVersion")
    public String objectVersion;
    public DiffChecksumsResponse withObjectVersion(String objectVersion) {
        this.objectVersion = objectVersion;
        return this;
    }
}