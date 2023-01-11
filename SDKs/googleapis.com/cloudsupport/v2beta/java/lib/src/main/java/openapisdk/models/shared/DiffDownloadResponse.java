package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DiffDownloadResponse
 * # gdata.* are outside protos with mising documentation
**/
public class DiffDownloadResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("objectLocation")
    public CompositeMedia objectLocation;
    public DiffDownloadResponse withObjectLocation(CompositeMedia objectLocation) {
        this.objectLocation = objectLocation;
        return this;
    }
}