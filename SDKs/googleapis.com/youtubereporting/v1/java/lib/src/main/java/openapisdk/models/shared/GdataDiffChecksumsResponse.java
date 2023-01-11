package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GdataDiffChecksumsResponse
 * gdata
**/
public class GdataDiffChecksumsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("checksumsLocation")
    public GdataCompositeMedia checksumsLocation;
    public GdataDiffChecksumsResponse withChecksumsLocation(GdataCompositeMedia checksumsLocation) {
        this.checksumsLocation = checksumsLocation;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("chunkSizeBytes")
    public String chunkSizeBytes;
    public GdataDiffChecksumsResponse withChunkSizeBytes(String chunkSizeBytes) {
        this.chunkSizeBytes = chunkSizeBytes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("objectLocation")
    public GdataCompositeMedia objectLocation;
    public GdataDiffChecksumsResponse withObjectLocation(GdataCompositeMedia objectLocation) {
        this.objectLocation = objectLocation;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("objectSizeBytes")
    public String objectSizeBytes;
    public GdataDiffChecksumsResponse withObjectSizeBytes(String objectSizeBytes) {
        this.objectSizeBytes = objectSizeBytes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("objectVersion")
    public String objectVersion;
    public GdataDiffChecksumsResponse withObjectVersion(String objectVersion) {
        this.objectVersion = objectVersion;
        return this;
    }
}