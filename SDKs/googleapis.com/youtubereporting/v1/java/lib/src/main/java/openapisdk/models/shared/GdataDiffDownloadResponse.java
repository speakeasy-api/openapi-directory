package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GdataDiffDownloadResponse
 * gdata
**/
public class GdataDiffDownloadResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("objectLocation")
    public GdataCompositeMedia objectLocation;
    public GdataDiffDownloadResponse withObjectLocation(GdataCompositeMedia objectLocation) {
        this.objectLocation = objectLocation;
        return this;
    }
}